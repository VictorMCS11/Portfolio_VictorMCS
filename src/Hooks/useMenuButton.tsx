import { useState } from "react";

export default function useMenuButton(){

    const [menuOpened, setMenuOpened] = useState<boolean>(false)

    const handleChangeMenuButton = (e: React.ChangeEvent<HTMLInputElement>) =>{
        const newMenuButton: boolean = e.target.checked
        setMenuOpened(newMenuButton)
    }

    return { menuOpened, handleChangeMenuButton }
}