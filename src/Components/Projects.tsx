import html from '../Assets/html_logo.png'
import css from '../Assets/css_logo.png'
import js from '../Assets/js_logo.png'
import ts from '../Assets/ts_logo.png'
import react from '../Assets/react_logo.png'
import tailwind from '../Assets/tailwind_logo.png'
import figma from '../Assets/figma_logo.png'
import ps from '../Assets/ps_logo.png'
import github from '../Assets/github-logo_2.png'
import cardstore from '../Assets/cardstore_proj.jpg'
import booktalks from '../Assets/booktalks_proj.jpg'
import portfolio from '../Assets/portfolio_proj.jpg'

export default function Projects(){

    type Project = {
        img: string,
        titulo: string,
        des: string,
        technologies: string[],
        webLink: string,
        gitLink: string
    }

    const projects: Project[] = [
        {
            img: portfolio,
            titulo: 'Portafolio VictorMCS',
            des: 'Mi portafolio web personal responsive diseñado para mostrar mis habilidades y proyectos de desarrollo. Diseñado desde cero y desarrollado con typescript además de con frameworks como React y tailwind', 
            technologies: [ react, ts, tailwind, ps, figma ],
            webLink: "https://github.com/VictorMCS11/Portfolio_VictorMCS",
            gitLink: 'https://github.com/VictorMCS11/Portfolio_VictorMCS'
        },
        {
            img: cardstore,
            titulo: 'CardStore',
            des: 'Proyecto web FrontEnd responsive simulando una tienda online de cartas. Diseñado desde cero y desarrollado con diversas animaciones con html, css y js nativos.', 
            technologies: [ html, css, js, ps, figma ],
            webLink: "https://cardstore.cloud/",
            gitLink: 'https://github.com/VictorMCS11/CardStore'
        },
        {
            img: booktalks,
            titulo: 'Lorem Ipsum',
            des: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)', 
            technologies: [ css, react, ps, figma ],
            webLink: "",
            gitLink: 'https://github.com/VictorMCS11/BookTalks_FrontEnd'
        },
        {
            img: booktalks,
            titulo: 'Lorem Ipsum',
            des: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)', 
            technologies: [ css, react, ps, figma ],
            webLink: "",
            gitLink: 'https://github.com/VictorMCS11/BookTalks_FrontEnd'
        }
    ]

    return(
        <>
            {
                projects.length > 0 ?
                (
                    projects.map(proj =>(
                        <a href={proj.webLink} target='_blank'>
                            <div key={proj.img} className='w-full h-max bg-white bg-opacity-30 dark:bg-primary border-4 border-primary dark:border-tertiary rounded-[20px] p-2 transform duration-200 hover:cursor-pointer hover:shadow-md hover:shadow-primary dark:hover:shadow-md dark:hover:shadow-tertiary flex flex-col gap-2'>
                                <div className='lg:w-full h-4/5 flex flex-col gap-2 items-center lg:flex-row lg:items-start'>
                                    <img src={proj.img} alt="" className='w-[200px] lg:w-1/2 lg:h-4/5 rounded-[20px]' />
                                    <div>
                                        <h2 className='font-bold text-[17px] text-center lg:text-start text-secondary'>{proj.titulo}</h2>
                                        <p className='text-center lg:text-start text-[13px] text-primary dark:text-tertiary'>{proj.des}</p>
                                    </div>
                                </div>
                                <div className='h-1/5 w-full flex flex-col lg:flex-row gap-3 lg:justify-between'>
                                    <div className='w-full flex flex-wrap gap-3 justify-center lg:justify-normal'>
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
                                    <a href={proj.gitLink} target='_blank' className='m-auto lg:right-2 lg:bottom-2 lg:h-[60px] lg:w-[70px] h-[50px] w-[50px] flex justify-center items-center' >
                                        <img src={github} alt="" className='rounded-full lg:h-[50px] lg:w-[50px] h-[40px] w-[40px] hover:h-full hover:w-full transform duration-100' />
                                    </a>
                                </div>
                            </div>
                        </a>
                    ))
                ):(
                    <h1>No se han encontrado proyectos</h1>
                )
            }
        </>
    )
}