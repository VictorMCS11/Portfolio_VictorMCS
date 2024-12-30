import { Link } from "react-router-dom"
import DarkModeButton from "./DarkModeButton"
import MenuButton from "./MenuButton"

export default function Menu(){

    return(
        <nav className="h-[80px] w-full px-10">
            <div className="mx-auto h-full max-w-screen-lg flex flex-row items-center  justify-between">
                <h1 className="text-primary font-bold dark:text-tertiary">VictorMCS</h1>
                <div className="h-[60px] w-max bg-primary dark:bg-tertiary rounded-[20px] hidden md:flex flex-row items-center gap-3 px-3 text-[23px] text-tertiary dark:text-primary font-bold">
                    <Link to="/" className="menu_link">Inicio</Link>
                    <Link to="/cv" className="menu_link">CV</Link>
                    <Link to="/proyectos" className="menu_link">Proyectos</Link>
                    <Link to="/contacto" className="menu_link">Contacto</Link>
                </div>
                <DarkModeButton />
                <MenuButton />
            </div>
        </nav>
    )
}