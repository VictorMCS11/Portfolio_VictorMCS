import { useContext } from "react";
import { DarkModeContext } from "../Contexts/DarkModeContext";

export default function useDarkMode() {

    const context = useContext(DarkModeContext);

    if (!context) {
        throw new Error('useDarkMode debe usarse dentro de un DarkModeProvider');
    }else{
        context.applyDarkMode(context.darkMode)
    }

    const { darkMode, applyDarkMode } = context

    const handleChangeDarkMode = (e: React.ChangeEvent<HTMLInputElement>) =>{
        const isDark = e.target.checked
        applyDarkMode(isDark)
    }

    return { darkMode, handleChangeDarkMode }

}