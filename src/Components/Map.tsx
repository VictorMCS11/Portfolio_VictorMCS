import { useState, useEffect, useRef } from 'react';

interface MapComponentProps {
  center: { lat: number; lng: number };
  zoom?: number;
}

export default function MapComponent({ center, zoom = 15 }: MapComponentProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadError, setLoadError] = useState<string | null>(null);

  // Map ID - usar variable de entorno o demo
  const MAP_ID = import.meta.env.VITE_GOOGLE_MAPS_MAP_ID || '';

  useEffect(() => {
    const loadGoogleMaps = () => {

      // Verificar si ya está cargado
      if (window.google?.maps?.Map) {
        setIsLoaded(true);
        return;
      }

      // Verificar si ya hay un script cargándose
      const existingScript = document.querySelector('script[src*="maps.googleapis.com"]');
      if (existingScript) {
        const waitForGoogleMaps = () => {
          if (window.google?.maps?.Map) {
            setIsLoaded(true);
          } else {
            setTimeout(waitForGoogleMaps, 100);
          }
        };
        waitForGoogleMaps();
        return;
      }

      // Crear script con loading=async para mejor performance
      const script = document.createElement('script');
      
      // URL optimizada con loading=async y libraries=marker
      const libraries = MAP_ID ? 'marker' : '';
      script.src = `https://maps.googleapis.com/maps/api/js?key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}&loading=async${libraries ? `&libraries=${libraries}` : ''}`;
      
      script.async = true;
      script.defer = true;
      
      script.onload = () => {
        
        // Esperar a que Google Maps esté completamente inicializado
        const waitForInitialization = () => {
          if (window.google?.maps?.Map) {
            setIsLoaded(true);
          } else {
            setTimeout(waitForInitialization, 100);
          }
        };
        
        waitForInitialization();
      };
      
      script.onerror = () => {
        console.error('❌ Error cargando Google Maps');
        setLoadError('Error cargando Google Maps. Verifica tu API Key.');
      };
      
      document.head.appendChild(script);
    };

    loadGoogleMaps();
  }, [MAP_ID]);

  useEffect(() => {
    if (!isLoaded || !mapRef.current) return;

    try {
      // Configuración del mapa
      const mapOptions: google.maps.MapOptions = {
        center,
        zoom,
      };

      // Agregar Map ID si está disponible
      if (MAP_ID) {
        mapOptions.mapId = MAP_ID;
      }

      const map = new google.maps.Map(mapRef.current, mapOptions);

      // Elegir el tipo de marcador
      const canUseAdvancedMarker = MAP_ID && window.google.maps.marker?.AdvancedMarkerElement;

      if (canUseAdvancedMarker) {
        new google.maps.marker.AdvancedMarkerElement({
          map,
          position: center,
          title: 'Ubicación',
        });
      } else {
        new google.maps.Marker({
          map,
          position: center,
          title: 'Ubicación',
        });
      }

    } catch (error) {
      console.error('❌ Error creando mapa:', error);
      setLoadError('Error creando el mapa');
    }
  }, [isLoaded, center, zoom, MAP_ID]);

  if (loadError) {
    return (
      <div className="h-full w-full rounded-2xl bg-gray-100 flex items-center justify-center p-4">
        <div className="text-center">
          <p className="text-red-500 font-bold mb-2">{loadError}</p>
          <p className="text-sm text-gray-600">
            Verifica que la API Key sea válida y esté correctamente configurada.
          </p>
        </div>
      </div>
    );
  }

  if (!isLoaded) {
    return (
      <div className="h-full w-full rounded-2xl bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <p className="mb-2">Cargando mapa...</p>
          <div className="animate-pulse text-sm text-gray-500">
            Optimizando carga...
          </div>
        </div>
      </div>
    );
  }

  return <div ref={mapRef} className="w-full h-full rounded-2xl" />;
}