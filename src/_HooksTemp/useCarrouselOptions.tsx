import { useState, useEffect } from "react"
import useDarkMode from "./useDarkMode"
import arrow from '../assets/arrow.svg'
import arrow_dark from '../assets/arrow_dark.svg'

export default function useCarrouselOptions(){
    const { darkMode } = useDarkMode()
    const [currentArrow, setCurrentArrow] = useState<string>()

    const [indexBgImgs, setIndexBgImgs] = useState<number[]>([0, darkMode?1:0])
    const bgImgs: string[][] = [
        // ['bg-cv-image-frontpage', 'bg-cv-image-frontpage-dark'],
        ['bg-projects-image-frontpage', 'bg-projects-image-frontpage'],
        ['bg-contact-image-frontpage', 'bg-contact-image-frontpage-dark']
    ]
    const bgImgTitles: string[] = ['MIS PROYECTOS', 'CONTÁCTAME']

    const [currentBgImgTitle, setCurrentBgImgTitLe] = useState<string>()
    const [currentBgImg, setCurrentBgImg] = useState<string>()
    const [currentLink, setCurrentLink] = useState<string>()

    useEffect(() =>{
        setCurrentArrow(darkMode?arrow:arrow_dark)
        setIndexBgImgs(prevState => [prevState[0], darkMode?1:0])
    }, [darkMode])

    useEffect(() =>{
        setCurrentBgImg(bgImgs[indexBgImgs[0]][indexBgImgs[1]])
        setCurrentBgImgTitLe(bgImgTitles[indexBgImgs[0]])
        if(bgImgTitles[indexBgImgs[0]] === 'CURRÍCULUM VITAE'){
            setCurrentLink('/cv')
        }else if(bgImgTitles[indexBgImgs[0]] === 'MIS PROYECTOS'){
            setCurrentLink('/proyectos')
        }else{
            setCurrentLink('/contacto')
        }
    }, [indexBgImgs])

    const moveLeftCarrousel = (): void =>{
        setIndexBgImgs(prevState => [
            prevState[0] == 0? 
            bgImgs.length - 1: 
            prevState[0] - 1, 
            prevState[1]])
    }
    const moveRightCarrousel = (): void =>{
        setIndexBgImgs(prevState => [
            prevState[0] == bgImgs.length - 1? 
            0: 
            prevState[0] + 1, 
            prevState[1]])
    }

    return(
        { currentArrow, currentBgImg, currentBgImgTitle, currentLink, moveLeftCarrousel, moveRightCarrousel }
    )
}