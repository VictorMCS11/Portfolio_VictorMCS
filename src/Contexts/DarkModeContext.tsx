import { createContext, useState } from "react";

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

    const applyDarkMode = (isDark: boolean) =>{
        if(bodyElement){
            if(isDark){
                bodyElement.classList.add('dark')
                window.localStorage.setItem('darkMode', 'dark')
            }else{
                bodyElement.classList.remove('dark')
                window.localStorage.setItem('darkMode', '')
            }
        }
        setDarkMode(isDark)
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