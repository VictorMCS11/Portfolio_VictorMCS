import html from '../Assets/html_logo.png'
import css from '../Assets/css_logo.png'
import js from '../Assets/js_logo.png'
import ts from '../Assets/ts_logo.png'
import react from '../Assets/react_logo.png'
import tailwind from '../Assets/tailwind_logo.png'
import figma from '../Assets/figma_logo.png'
import ps from '../Assets/ps_logo.png'
import cardstore from '../Assets/cardstore_proj.jpg'
import booktalks from '../Assets/booktalks_proj.jpg'

export default function Projects(){

    type Project = {
        img: string,
        des: string,
        technologies: string[]
    }

    const projects: Project[] = [
        {
            img: cardstore,
            des: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)', 
            technologies: [ html, css, js, ps, figma ]
        },
        {
            img: booktalks,
            des: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)', 
            technologies: [ css, react, ps ]
        },
        {
            img: booktalks,
            des: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)', 
            technologies: [ css, react, ps ]
        }
    ]

    return(
        <>
            {
                projects.length > 0 ?
                (
                    projects.map(proj =>(
                        <div key={proj.img} className='w-full h-max bg-white bg-opacity-30 dark:bg-primary border-4 border-primary dark:border-tertiary rounded-[20px] p-2 transform duration-200 hover:cursor-pointer hover:shadow-md hover:shadow-primary dark:hover:shadow-md dark:hover:shadow-tertiary flex flex-col gap-2'>
                            <div className='md:w-full h-4/5 flex flex-col gap-2 items-center md:flex-row md:items-start'>
                                <img src={proj.img} alt="" className='w-[200px] md:w-1/2 md:h-4/5 rounded-[20px]' />
                                <p className='text-center md:text-start text-[14px] md:w-1/2 text-primary dark:text-tertiary float-left'>{proj.des}</p>
                            </div>
                            <div className='h-1/5 w-full flex gap-3 justify-center md:justify-normal'>
                            {
                                proj.technologies.length > 0 
                                ?(
                                    proj.technologies.map(tech =>(
                                        <img src={tech} alt="" className='h-[25px]' />
                                    ))
                                ):(
                                    <h1>No hay tecnologias</h1>
                                )
                            }
                            </div>
                        </div>
                    ))
                ):(
                    <h1>No hay proyectos</h1>
                )
            }
        </>
    )
}