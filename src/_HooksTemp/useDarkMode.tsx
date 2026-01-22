import { useContext } from "react";
import { DarkModeContext } from "../contexts/DarkModeContext";

export default function useDarkMode() {
    const context = useContext(DarkModeContext);

    if (!context) {
        throw new Error('useDarkMode debe usarse dentro de un DarkModeProvider');
    }
    
    // ELIMINAR ESTA LÍNEA - causa el error
    // context.applyDarkMode(context.darkMode)

    const { darkMode, applyDarkMode } = context;

    const handleChangeDarkMode = (e: React.ChangeEvent<HTMLInputElement>) => {
        const isDark = e.target.checked;
        applyDarkMode(isDark);
    };

    return { darkMode, handleChangeDarkMode };
}