import html from '../assets/html_logo.png'
import css from '../assets/css_logo.png'
import js from '../assets/js_logo.png'
import ts from '../assets/ts_logo.png'
import react from '../assets/react_logo.png'
import tailwind from '../assets/tailwind_logo.png'
import figma from '../assets/figma_logo.png'
import ps from '../assets/ps_logo.png'

export default function Tecnologias(){

    const technologies: string[] = [
        html, css, js, ts, react, tailwind, figma, ps
    ]

    return(
        <div className='flex flex-wrap gap-[10px] justify-center md:flex-row md:justify-between md:gap-0'>
            {
                technologies.length > 0 
                ?(
                    technologies.map(tech =>(
                        <img key={tech} src={tech} alt="" className='object-contain transform duration-200 hover:scale-105' />
                    ))
                ):(
                    <h1>No hay tecnologias</h1>
                )
            }
        </div>
    )
}