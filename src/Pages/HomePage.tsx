import { useState } from 'react'
import Map from '../Components/Map'
import CarrouselLinks from '../Components/CarrouselLinks'
import victor_work from '../assets/victor-icon-work.png'
import victor_paz from '../assets/victor-icon-paz.png'
import CarrouselOptions from '../Components/CarrouselOptions'

export default function HomePage(){

    const [icon, sertIcon] = useState(victor_work)

    const changeIcon = () =>{
        sertIcon(prevState => prevState === victor_work ? victor_paz : victor_work)
    }

    return(
        <div className='min-h-[865px] max-w-screen-lg mx-auto grid grid-cols-1 grid-rows-3 gap-y-[50px] py-[50px] transform duration-[.3s]'>
            <div className="w-full h-full border-4 border-primary dark:border-tertiary rounded-[20px] grid grid-rows-2 md:grid-cols-2 md:grid-rows-1" onMouseEnter={changeIcon} onMouseLeave={changeIcon}>
            <div className='h-full w-full p-5'>   
                <img src={icon} alt="" className='h-[75px] mr-2 mb-2 float-left md:h-[125px] transition-all duration-200' />
                <p className='font-bold text-primary text-[13px] md:text-[15px] dark:text-tertiary dark:font-semibold'>Mi nombre es Víctor, soy un desarrollador de software de Ibi, Alicante(España). Me apasiona el diseño de interfaces con Figma y el desarrollo Front con React por sus inmensas posibilidades que te aporta para crear soluciones.</p>
            </div>
            <div className='relative h-full w-full border-t-4 md:border-t-0 md:border-l-4 z-0 rounded-[20px] shadow-black shadow-lg border-primary dark:border-tertiary dark:shadow-tertiary dark:shadow-md flex justify-between'>
                <CarrouselLinks/>
            </div>
            </div>
            <div className='h-full w-full border-4 rounded-[20px] border-primary hover:shadow-lg shadow-black dark:shadow-tertiary dark:hover:shadow-md dark:border-tertiary'>
                <Map />
            </div>
            <div className='relative mx-auto h-full w-full md:w-[700px] rounded-[20px] shadow-black dark:shadow-tertiary dark:border-tertiary'>
                <CarrouselOptions />
            </div>
        </div>
    )
}