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
        des: string,
        technologies: string[],
        webLink: string,
        gitLink: string
    }

    const projects: Project[] = [
        {
            img: portfolio,
            des: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)', 
            technologies: [ react, ts, tailwind, ps, figma ],
            webLink: "https://github.com/VictorMCS11/Portfolio_VictorMCS",
            gitLink: 'https://github.com/VictorMCS11/Portfolio_VictorMCS'
        },
        {
            img: cardstore,
            des: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)', 
            technologies: [ html, css, js, ps, figma ],
            webLink: "https://cardstore.cloud/",
            gitLink: 'https://github.com/VictorMCS11/CardStore'
        },
        {
            img: booktalks,
            des: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)', 
            technologies: [ css, react, ps, figma ],
            webLink: "",
            gitLink: 'https://github.com/VictorMCS11/BookTalks_FrontEnd'
        },
        {
            img: booktalks,
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
                                <div className='md:w-full h-4/5 flex flex-col gap-2 items-center md:flex-row md:items-start'>
                                    <img src={proj.img} alt="" className='w-[200px] md:w-1/2 md:h-4/5 rounded-[20px]' />
                                    <p className='text-center md:text-start text-[14px] md:w-1/2 text-primary dark:text-tertiary float-left'>{proj.des}</p>
                                </div>
                                <div className='h-1/5 w-full flex flex-col md:flex-row gap-3 md:justify-between'>
                                    <div className='w-full flex flex-wrap gap-3 justify-center md:justify-normal'>
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
                                    <a href={proj.gitLink} target='_blank' className='m-auto md:right-2 md:bottom-2 md:h-[60px] md:w-[60px] h-[50px] w-[50px] flex justify-center items-center' >
                                        <img src={github} alt="" className='rounded-full md:h-[50px] md:w-[50px] h-[40px] w-[40px] hover:h-[50px] hover:w-[50px] transform duration-100 md:hover:h-[60px] md:hover:w-[60px]' />
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