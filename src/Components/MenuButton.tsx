import { Link } from "react-router-dom"
import useDarkMode from "../Hooks/useDarkMode"
import useMenuButton from "../Hooks/useMenuButton"
import menu_button_open from '../assets/menu_button_open.svg'
import menu_button_open_dark from '../assets/menu_button_open_dark.svg'
import menu_button_close from '../assets/menu_button_close.svg'
import menu_button_close_dark from '../assets/menu_button_close_dark.svg'

type MenuButtonProps = {
    currentPath: string;
};

export default function MenuButton({ currentPath }: MenuButtonProps ){

    const { menuOpened, handleChangeMenuButton, handleClick } = useMenuButton()

    const { darkMode } = useDarkMode()

    return(
        <>
            <input 
                type="checkbox" 
                id="menu_button" 
                hidden 
                onChange={handleChangeMenuButton}
                checked={`${menuOpened ? "checked" : ""}`} 
            />
            <label htmlFor="menu_button" className="md:hidden z-30">
                {
                    darkMode ?(
                        <img 
                        src={menuOpened? menu_button_close: menu_button_open} 
                        alt="" 
                        className="h-[35px] hover:cursor-pointer md:hidden" />
                    ):(
                        <img 
                        src={menuOpened? menu_button_close_dark: menu_button_open_dark} 
                        alt="" 
                        className="h-[35px] hover:cursor-pointer md:hidden" />
                    )
                }
            </label>
            <div className={`absolute z-20 bg-tertiary dark:bg-primary opacity-95 transform duration-200 inset-0 ${menuOpened? '': 'translate-x-full'} flex flex-row justify-end text-black dark:text-white md:hidden`}>
                <div className="relative h-full w-max bg-white dark:bg-black flex flex-col items-center gap-[10px] px-3 py-[80px]">
                    <Link to="/" 
                    onClick={(e) => handleClick(e, currentPath)} className={`${currentPath === "/" ? "menu_link_open_active" : "menu_link_open"}`}>
                        Inicio
                    </Link>
                    <Link to="/cv" 
                    onClick={(e) => handleClick(e, currentPath)} className={`${currentPath === "/cv" ? "menu_link_open_active" : "menu_link_open"}`}>
                        CV
                    </Link>
                    <Link to="/proyectos" 
                    onClick={(e) => handleClick(e, currentPath)} className={`${currentPath === "/proyectos" ? "menu_link_open_active" : "menu_link_open"}`}>
                        Proyectos
                    </Link>
                    <Link to="/contacto" 
                    onClick={(e) => handleClick(e, currentPath)} className={`${currentPath === "/contacto" ? "menu_link_open_active" : "menu_link_open"}`}>
                        Contacto
                    </Link>
                </div>
            </div>
        </>
    )
}