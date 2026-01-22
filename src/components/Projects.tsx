import html from '../assets/html_logo.png'
import css from '../assets/css_logo.png'
import js from '../assets/js_logo.png'
import ts from '../assets/ts_logo.png'
import react from '../assets/react_logo.png'
import tanstack from '../assets/tanstack_logo.png'
import tailwind from '../assets/tailwind_logo.png'
import next from '../assets/next_logo.png'
import figma from '../assets/figma_logo.png'
import ps from '../assets/ps_logo.png'
import github from '../assets/github-logo_2.png'
import node from '../assets/nodejs_logo.png'
import express from '../assets/express_logo.png'
// import sql from '../assets/sql_logo.png'
import mongodb from '../assets/mongodb_logo.png'
// import chatgpt from '../assets/chatgpt_logo.png'
import cardstore from '../assets/cardstore_proj.jpg'
// import booktalks from '../assets/booktalks_proj.jpg'
// import portfolio from '../assets/portfolio_proj.jpg'
// import traductor from '../assets/traductor_proj.jpg'
import kiosco from '../assets/kiosco_proj.jpg'
import uptask from '../assets/uptask_proj.jpg'

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
        // {
        //     img: portfolio,
        //     titulo: 'Portafolio VictorMCS',
        //     des: 'Mi portafolio web personal responsive diseñado para mostrar mis habilidades y proyectos de desarrollo. Diseñado desde cero y desarrollado con typescript además de con frameworks como React y tailwind', 
        //     technologies: [ react, ts, tailwind, ps, figma ],
        //     webLink: "https://github.com/VictorMCS11/Portfolio_VictorMCS",
        //     gitLink: 'https://github.com/VictorMCS11/Portfolio_VictorMCS'
        // },
        {
            img: uptask,
            titulo: 'UpTask - Gestor de Proyectos Colaborativo',
            des: `<p>Aplicación web Fullstack para la gestión y colaboración en proyectos, desarrollada con tecnologías modernas que abarcan tanto el frontend como el backend.</p>

            <p>Frontend construido con <strong>React y TypeScript</strong>, utilizando <strong>Chakra UI</strong> para una interfaz de usuario limpia y accesible. Implementé <strong>React Hook Form</strong> para validación eficiente de formularios y <strong>TanStack Query</strong> (useQuery/useMutation) para gestión de datos, evitando useContext para un mejor rendimiento.</p>

            <p>Integré la dependencia <strong>@dnd-kit/core</strong> para un sistema visual de <strong>arrastrar y soltar</strong> que permite organizar tareas entre diferentes estados de progreso de manera intuitiva.</p>

            <p>Backend robusto gracias a una API RESTful desarrollada con <strong>Node.js, Express y TypeScript</strong>, con <strong>MongoDB y Mongoose</strong> para persistencia de datos. Sistema de autenticación seguro con <strong>JWT y confirmación por email</strong> mediante Nodemailer.</p>`,
            technologies: [ react, tanstack, ts, tailwind, node, express, mongodb ],
            webLink: "https://up-task-frontend-six-sigma.vercel.app/",
            gitLink: 'https://github.com/VictorMCS11/UpTask_Frontend'
        },
        {
            img: kiosco, // Asegúrate de importar la imagen adecuada
            titulo: 'Kiosco Digital - Sistema de Gestión de Pedidos',
            des: `<p>Aplicación web Fullstack desarrollada con <strong>Next.js, TypeScript y Prisma ORM</strong> que simula un sistema de gestión para kiosco/restaurante con roles diferenciados.</p>

            <p>Incluye una <strong>página para clientes</strong> con catálogo interactivo por categorías y carrito de compras dinámico gestionado con <strong>Zustand</strong>, que calcula precios en tiempo real. Los usuarios ingresan su nombre para confirmar pedidos que se almacenan automáticamente.</p>

            <p>Panel de administrador con <strong>tres pestañas</strong>:
            <ul>
                <li><strong>"Órdenes"</strong>: Visualización de pedidos pendientes con botón para marcarlos como completados</li>
                <li><strong>"Productos"</strong>: CRUD completo con creación, edición, listado y <strong>buscador integrado</strong></li>
                <li><strong>"Ver Kiosco"</strong>: Vista previa en tiempo real del catálogo cliente</li>
            </ul>
            </p>

            <p>Historial de <strong>pedidos completados</strong> en tercera página separada. Demuestra habilidades en desarrollo Fullstack, gestión de estado, operaciones CRUD, modelado de datos con Prisma y diseño de UI/UX responsiva.</p>`,
            technologies: [ next, ts, tailwind ], // Ajusta según las tecnologías que uses
            webLink: "https://quiosco-de-comida-con-next-js-14-se.vercel.app/", // Añade tu link de deploy aquí
            gitLink: 'https://github.com/VictorMCS11/Quiosco-de-Comida-con-Next.js-14-Server-Actions-App-Router-TypesScript-Prisma-ZOD' // Añade tu link de GitHub aquí
        },
        {
            img: cardstore,
            titulo: 'CardStore - Tienda de Cartas',
            des: `<p>Aplicación web Frontend que simula una tienda online especializada en cartas coleccionables. Desarrollada completamente con tecnologías nativas (<strong>HTML5</strong>, <strong>CSS3</strong>, <strong>JavaScript ES6+</strong>), el proyecto demuestra capacidad para implementar funcionalidades complejas de e-commerce sin dependencia de frameworks externos.</p>

            <p>Incluye un sistema completo de carrito de compras interactivo, menú de navegación responsive con transiciones animadas, carrusel automático de productos y galería de imágenes con lightbox personalizado. Todas las animaciones y transiciones fueron implementadas manualmente mediante <strong>JavaScript</strong> y <strong>CSS</strong>.</p>

            <p>Destacan funcionalidades como formularios, modales dinámicos con mensajes personalizados, efectos de scroll que modifican la interfaz según la posición, y un sistema que prioriza la usabilidad y accesibilidad, con diseño <strong>responsive</strong>, además de buenas prácticas en manipulación del DOM, gestión de eventos y organización modular de funcionalidades.</p>`,
            technologies: [ html, css, js, ps, figma ],
            webLink: "https://card-store-cyan.vercel.app/",
            gitLink: 'https://github.com/VictorMCS11/CardStore'
        },
        // {
        //     img: booktalks,
        //     titulo: 'BookTalks',
        //     des: 'Proyecto final de DAW que consiste en una app web responsive creada con React y css nativo donde los usuarios pueden crear su cuenta, participar en discusiones dentro de los foros disponibles, buscar libros mediante un buscador integrado, escribir reseñas y asignar puntuaciones a los libros. La aplicación se conecta con una API externa para obtener información sobre los libros.',
        //     technologies: [ css, react, node, express, sql, ps, figma ],
        //     webLink: "http://booktalks.es/",
        //     gitLink: 'https://github.com/VictorMCS11/BookTalks_FrontEnd'
        // },
    ]

    const handleGitHubClick = (e: React.MouseEvent, gitLink: string) => {
        e.stopPropagation(); // Evita que el click se propague al card
        window.open(gitLink, '_blank');
    };

    return(
        <>
            {
                projects.length > 0 ?
                (
                    projects.map(proj =>(
                        <div 
                            key={proj.des}
                            className='w-full h-max bg-white bg-opacity-30 dark:bg-primary border-4 border-primary dark:border-tertiary rounded-[20px] p-2 transform duration-200 hover:shadow-md hover:shadow-primary dark:hover:shadow-md dark:hover:shadow-tertiary flex flex-col gap-2 hover:cursor-pointer'
                            onClick={() => window.open(proj.webLink, '_blank')}
                        >
                            <div className='h-4/5 flex flex-col gap-2 items-center lg:flex-row lg:items-start'>
                                <img src={proj.img} alt="" className='w-3/4 lg:w-5/12 lg:h-full rounded-[20px]' />
                                <div>
                                    <h2 className='font-bold text-[17px] text-center lg:text-start text-secondary'>{proj.titulo}</h2>
                                <div 
                                    className='text-center lg:text-start text-[13px] text-primary dark:text-tertiary'
                                    dangerouslySetInnerHTML={{ __html: proj.des }}
                                />
                                </div>
                            </div>
                            <div className='h-1/5 w-full flex flex-col lg:flex-row gap-3 lg:justify-between'>
                                <div className='w-full flex flex-wrap gap-3 justify-center lg:justify-normal lg:items-end'>
                                {
                                    proj.technologies.length > 0 
                                    ?(
                                        proj.technologies.map(tech =>(
                                            <img src={tech} alt="" className='h-[25px]' key={tech} />
                                        ))
                                    ):(
                                        <h1>No hay tecnologias</h1>
                                    )
                                }
                                </div>
                                <button 
                                    onClick={(e) => handleGitHubClick(e, proj.gitLink)}
                                    className='m-auto lg:right-2 lg:bottom-2 lg:h-[60px] lg:w-[65px] h-[50px] w-[50px] flex justify-center items-center bg-transparent border-none'
                                >
                                    <img
                                        src={github} 
                                        alt="GitHub" 
                                        className='rounded-full lg:h-[50px] lg:w-[50px] h-[40px] w-[40px] hover:h-full hover:w-full transform duration-100' 
                                    />
                                </button>
                            </div>
                        </div>
                    ))
                ):(
                    <h1>No se han encontrado proyectos</h1>
                )
            }
        </>
    )
}