import { Link } from "react-router-dom"
import useCarrouselOptions from "../hooks/useCarrouselOptions"

export default function CarrouselOptions(){

    const { currentArrow, currentBgImg, currentBgImgTitle, currentLink, moveLeftCarrousel, moveRightCarrousel } = useCarrouselOptions()

    return(
        <>
            <button onClick={moveLeftCarrousel} className="h-2/3 md:h-full">
                <img src={currentArrow} alt="" className='md:absolute md:top-1/2 right-[85%] -translate-x-0 md:-translate-y-1/2 h-[70px] rotate-180 hover:cursor-pointer transform duration-200 md:hover:h-[100px] md:hover:right-[83%]' />
            </button>
            <Link to={{pathname: currentLink}}>
                <div className='absolute border-primary dark:border-tertiary md:top-1/2 left-1/2 -translate-x-1/2 md:-translate-y-1/2 h-2/3 md:h-full w-8/12 border-4 rounded-[20px] overflow-hidden'>
                    <div className={`absolute w-full h-full ${currentBgImg} rounded-[16px] z-10 flex items-center justify-center transition-all duration-[.3s] ease-in-out transform bg-center bg-cover hover:scale-105 hover:cursor-pointer`}>
                        <h1 className='font-bold text-primary text-[25px] md:text-[30px] dark:text-tertiary z-30 text-center px-3 rounded-[20px] bg-tertiary dark:bg-primary md:border-2 border-primary dark:border-tertiary bg-opacity-50'>{currentBgImgTitle}
                        </h1>
                        <div className='absolute w-full h-full bg-tertiary dark:bg-primary rounded-[16px] z-20 opacity-10 dark:opacity-70'></div>
                    </div>
                </div>
            </Link>
            <button onClick={moveRightCarrousel} className="h-2/3 md:h-full">
                <img src={currentArrow} alt="" className='md:absolute md:top-1/2 left-[85%] -translate-x-0 md:-translate-y-1/2 h-[70px] hover:cursor-pointer transform duration-200 md:hover:h-[100px] md:hover:left-[83%]' />
            </button>
        </>
    )
}