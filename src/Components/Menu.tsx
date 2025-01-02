import { Link, useLocation } from "react-router-dom"
import DarkModeButton from "./DarkModeButton"
import MenuButton from "./MenuButton"

export default function Menu(){

    const location = useLocation()
    const currentPath: string = location.pathname

    return(
        <nav className="h-[80px] w-full">
            <div className="mx-auto h-full max-w-screen-lg flex flex-row items-center  justify-between">
                <h1 className="text-primary font-bold dark:text-tertiary">VictorMCS</h1>
                <div className="h-[60px] w-max bg-primary dark:bg-tertiary rounded-[20px] hidden md:flex flex-row items-center gap-3 px-3 text-[23px] text-tertiary dark:text-primary font-bold">
                    <Link to="/" 
                    className={`${currentPath === "/" ? "menu_link_active" : "menu_link"}`}>
                        Inicio
                    </Link>
                    <Link to="/cv" 
                    className={`${currentPath === "/cv" ? "menu_link_active" : "menu_link"}`}>
                        CV
                    </Link>
                    <Link to="/proyectos" 
                    className={`${currentPath === "/proyectos" ? "menu_link_active" : "menu_link"}`}>
                        Proyectos
                    </Link>
                    <Link to="/contacto" 
                    className={`${currentPath === "/contacto" ? "menu_link_active" : "menu_link"}`}>
                        Contacto
                    </Link>
                </div>
                <DarkModeButton />
                <MenuButton currentPath={currentPath} />
            </div>
        </nav>
    )
}