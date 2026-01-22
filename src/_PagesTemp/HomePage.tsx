import Map from '../components/Map'
import CarrouselLinks from '../components/CarrouselLinks'
import victor_work from '../assets/victor-icon-work.png'
import victor_paz from '../assets/victor-icon-paz.png'
import CarrouselOptions from '../components/CarrouselOptions'

export default function HomePage(){
    const center = {
        lat: 38.618303446239786,
        lng: -0.5738952824413538,
    };

    return(
        <div className='min-h-[865px] max-w-screen-lg mx-auto grid grid-cols-1 grid-rows-3 gap-y-[50px] py-[50px] transform duration-[.3s]'>
            <div className="hover-container w-full h-full border-4 border-primary dark:border-tertiary rounded-[20px] grid grid-rows-2 md:grid-cols-2 md:grid-rows-1">
                <div className='h-full w-full p-5'>   
                    <img 
                        src={victor_work} 
                        alt="" 
                        className='default-icon h-[75px] mr-2 mb-2 float-left md:h-[125px] transition-all duration-200' 
                    />
                    <img 
                        src={victor_paz} 
                        alt="" 
                        className='hover-icon h-[75px] mr-2 mb-2 float-left md:h-[125px] transition-all duration-200' 
                    />
                    <p className='font-bold text-primary text-[13px] md:text-[15px] dark:text-tertiary dark:font-semibold'>
                        ¡Hola! Soy Víctor, desarrollador Full Stack especializado en React.js y Node.js. <br /> 
                        Desde Ibi (Alicante) disfruto mucho creando aplicaciones que resuelven necesidades reales 
                        y cada proyecto me lo tomo como una oportunidad para innovar, aprender y superar expectativas, 
                        combinando estética visual con funcionalidad
                    </p>
                </div>
                <div className='relative h-full w-full border-t-4 md:border-t-0 md:border-l-4 z-0 rounded-[20px] shadow-black shadow-lg border-primary dark:border-tertiary dark:shadow-tertiary dark:shadow-md flex justify-between'>
                    <CarrouselLinks/>
                </div>
            </div>
            <div className='h-full w-full border-4 rounded-[20px] border-primary hover:shadow-lg shadow-black dark:shadow-tertiary dark:hover:shadow-md dark:border-tertiary'>
                <Map center={center} zoom={15} />
            </div>
            <div className='relative mx-auto h-full w-full md:w-[700px] rounded-[20px] shadow-black dark:shadow-tertiary dark:border-tertiary flex flex-row justify-between'>
                <CarrouselOptions />
            </div>
        </div>
    )
}