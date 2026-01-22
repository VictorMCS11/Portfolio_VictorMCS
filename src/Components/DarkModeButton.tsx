import useDarkMode from "../hooks/useDarkMode"

export default function DarkModeButton(){

    const { darkMode, handleChangeDarkMode } = useDarkMode()

    return(
        <>
            <input type="checkbox" id="dark_mode" checked={darkMode} hidden onChange={handleChangeDarkMode} />
            <label htmlFor="dark_mode">
                <div className='w-[50px] h-[25px] hover:cursor-pointer rounded-full transform duration-300 border-[3px] border-primary bg-tertiary dark:border-tertiary dark:bg-primary'>
                    <div className='w-[50%] h-full rounded-full -ms-[1px] transform duration-300 border-2 border-secondary bg-primary dark:bg-tertiary dark:ms-[23px]'></div>
                </div>
            </label>
        </>
    )
}