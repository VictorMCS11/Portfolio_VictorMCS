import { Link } from "react-router-dom"
import useCarrouselOptions from "../Hooks/useCarrouselOptions"

export default function CarrouselOptions(){

    const { currentArrow, currentBgImg, currentBgImgTitle, currentLink, moveLeftCarrousel, moveRightCarrousel } = useCarrouselOptions()

    return(
        <>
            <button onClick={moveLeftCarrousel}>
                <img src={currentArrow} alt="" className='absolute top-1/2 right-[85%] -translate-x-0 -translate-y-1/2 h-[70px] rotate-180 hover:cursor-pointer transform duration-200 hover:h-[100px] hover:right-[83%]' />
            </button>
            <Link to={currentLink}>
                <div className='absolute  border-primary dark:border-tertiary top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-8/12 border-4 rounded-[20px] flex justify-center items-center overflow-hidden'>
                    <div className={`absolute w-full h-full ${currentBgImg} rounded-[16px] z-10 flex items-center justify-center text-[30px] transition-all duration-[.3s] ease-in-out transform bg-center bg-cover hover:scale-105 hover:cursor-pointer`}>
                        <h1 className='font-bold text-primary dark:text-tertiary z-30 text-center px-3 rounded-[20px] bg-tertiary dark:bg-primary sm:border-2 border-primary dark:border-tertiary bg-opacity-50'>{currentBgImgTitle}
                        </h1>
                        <div className='absolute w-full h-full bg-tertiary dark:bg-primary rounded-[16px] z-20 opacity-10 dark:opacity-70'></div>
                    </div>
                </div>
            </Link>
            <button onClick={moveRightCarrousel}>
                <img src={currentArrow} alt="" className='absolute top-1/2 left-[85%] -translate-x-0 -translate-y-1/2 h-[70px] hover:cursor-pointer transform duration-200 hover:h-[100px] hover:left-[83%]' />
            </button>
        </>
    )
}