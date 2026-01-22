// Contexts/DarkModeContext.tsx
import { createContext, useState, useEffect } from "react";

type ContainerProps = {
    children: React.ReactNode
}

type DarkModeContextPropsType = {
    darkMode: boolean,
    setDarkMode: React.Dispatch<React.SetStateAction<boolean>>,
    applyDarkMode: (isDark: boolean) => void
}

const initialDarkMode: boolean = window.localStorage.getItem('darkMode') === 'dark' ? true : false

const bodyElement: HTMLBodyElement | null = document.querySelector('body')

const OscureModeContextProps: DarkModeContextPropsType = {
    darkMode: initialDarkMode,
    setDarkMode: () => {},
    applyDarkMode: () => {}
}

export const DarkModeContext = createContext<DarkModeContextPropsType>(OscureModeContextProps)

export function DarkModeProvider({children}: ContainerProps){
    const [darkMode, setDarkMode] = useState<boolean>(initialDarkMode)

    // Aplicar el modo oscuro cuando el componente se monta
    useEffect(() => {
        if(bodyElement){
            if(darkMode){
                bodyElement.classList.add('dark')
                window.localStorage.setItem('darkMode', 'dark')
            }else{
                bodyElement.classList.remove('dark')
                window.localStorage.setItem('darkMode', '')
            }
        }
    }, [darkMode]) // Esto se ejecuta cuando darkMode cambia

    const applyDarkMode = (isDark: boolean) => {
        setDarkMode(isDark)
        // La aplicación de clases y localStorage se maneja en el useEffect
    }
    
    return(
        <DarkModeContext.Provider value={{
            darkMode,
            setDarkMode,
            applyDarkMode
        }}>
            {children}
        </DarkModeContext.Provider>
    )
}