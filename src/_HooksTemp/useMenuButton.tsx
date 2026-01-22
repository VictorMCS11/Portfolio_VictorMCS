import { useState } from "react";

export default function useMenuButton(){

    const [menuOpened, setMenuOpened] = useState<boolean>(false)

    const handleChangeMenuButton = (e: React.ChangeEvent<HTMLInputElement>) =>{
        const newMenuButton: boolean = e.target.checked
        setMenuOpened(newMenuButton)
    }

    const handleClick = ( e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>,
        currentPath: string): void =>{
        const closeMenu = e.currentTarget.innerHTML=== currentPath ?  menuOpened : !menuOpened
        setMenuOpened(closeMenu)
    }

    return { menuOpened, handleChangeMenuButton, handleClick }
}