import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

export default function Map() {

    const API_KEY_GOOGLEMAPS: string = "AIzaSyBxcXUA5-Dxw5yHEoysM1DAif95KRpLsEk";

    const containerStyle = {
      height: "100%",
      width: "100%",
      borderRadius: "15px"
    }

    const center = {
      lat: 38.618303446239786,
      lng: -0.5738952824413538,
    }

    const { isLoaded } = useJsApiLoader({
      id: 'google-map-script',
      googleMapsApiKey: API_KEY_GOOGLEMAPS,
    })

    // const [map, setMap] = useState<Object>(null)

    // const onLoad = useCallback(function callback(map) {
    //   // This is just an example of getting and using the map instance!!! don't just blindly copy!
    //   const bounds = new window.google.maps.LatLngBounds(center)
    //   map.fitBounds(bounds)

    //   setMap(map)
    //   console.log(typeof map)
    // }, [])

    // const onUnmount = useCallback(function callback(map) {
    //   setMap(null)
    // }, [])
  
    return (
        isLoaded ? (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={15}
            // onLoad={onLoad}
            // onUnmount={onUnmount}
          >
            <Marker
              position={{
                lat: 38.618303446239786,
                lng: -0.5738952824413538,
              }}
            />
          </GoogleMap>
        ) : (
          <></>
        )
    );
  }