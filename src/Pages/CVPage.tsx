import face from '../Assets/face_cv.png'
import Formacion from '../Components/Formacion'
import Tecnologias from '../Components/Tecnologias'
import Experiencia from '../Components/Experiencia'
import OpenPDF from '../Components/OpenPDF'
import { useState } from 'react'
import check from '../Assets/check.svg'

export default function CVPage(){

    const [pass, setPass] = useState(false)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()

        if(e.target.key.value === '1234.'){
            setPass(true)
        }else{
            setPass(false)
        }
    }

    return(
        <>
        {pass?(<OpenPDF />):(null)}

                <form className='w-max h-[20px] mx-auto flex justify-center items-center gap-2 mt-2' onSubmit={handleSubmit}>
                {
                    pass?(
                            <img src={check} alt="" className='absolute mx-auto h-[50px]' />
                    ):(
                        <>
                        <button className='h-full rounded-[5px] px-1 border-1 border-secondary dark:bg-tertiary bg-primary text-[13px] dark:text-primary text-tertiary transform duration-200 hover:text-primary dark:hover:bg-secondary hover:bg-secondary'>Insertar clave</button>
                        <input className='rounded-[5px] w-[220px] h-[20px] bg-white dark:text-primary text-tertiary px-1 text-[13px] outline-none placeholder:text-[12px]' type="password" name='key' placeholder='Inserta clave para ver más información'/>
                        </>
                    )
                }
                </form>

        <div className='min-h-[865px] max-w-screen-lg mx-auto flex flex-col gap-y-[50px] mt-[50px] md:p-0 transform duration-[.3s]'>
            <div className='w-full h-max md:p-[30px] md:border-4 border-primary dark:border-tertiary flex flex-col md:flex-row items-center justify-around md:bg-white md:bg-opacity-30 md:dark:bg-primary md:dark:bg-opacity-90 rounded-[20px]'>
                <div className="w-max flex flex-col justify-center items-center">
                    <div className='h-[100px] w-[100px] md:h-[150px] md:w-[150px] rounded-full overflow-hidden border-4 border-primary dark:border-tertiary'>
                        <img src={face} alt="" className='h-full rounded-full scale-110' />
                    </div>
                    <h1 className='text-secondary dark:text-secondary text-[20px] md:text-[25px] font-bold'>
                        Victor {pass?('Manuel'):('******')}
                    </h1>
                    <h2 className='text-primary dark:text-tertiary text-[20px] md:text-[25px]'>
                    {pass?('Calambas Suárez'):('******** ******')}
                    </h2>
                </div>
                <div className="w-full md:w-max mt-[20px] md:mt-0 md:p-0">
                    <ol className='flex flex-col items-left justify-center gap-2 md:gap-5'>
                        <li>
                            <h3 className='cv_perfil_info'>FECHA DE NACIMIENTO: 
                            {pass?
                            (<span className='text-secondary font-bold'>26/09/2002</span>)
                            :
                            (<span className='text-secondary font-bold'>**********</span>)}
                            </h3>
                        </li>
                        <li>
                            <h3 className='cv_perfil_info'>DNI: 
                            {pass?
                            (<span className='text-secondary font-bold'>29213351Q</span>)
                            :
                            (<span className='text-secondary font-bold'>*********</span>)}
                            </h3>
                        </li>
                        <li>
                            <h3 className='cv_perfil_info'>C/ 
                            {pass?
                            (<span className='text-secondary font-bold'>Gustavo Adolfo Bécquer</span>)
                            :
                            (<span className='text-secondary font-bold'>*********************</span>)}
                            </h3>
                        </li>
                        <li>
                            <h3 className='cv_perfil_info'>CÓDIGO POSTAL: 
                                <span className='text-secondary font-bold'>03440</span>
                            </h3>
                        </li>
                        <li>
                            <h3 className='cv_perfil_info'>TELÉFONO: 
                                {pass?
                                (<span className='text-secondary font-bold'>675411153</span>)
                                :
                                (<span className='text-secondary font-bold'>*********</span>)}
                            </h3>
                        </li>
                        <li>
                            <h3 className='cv_perfil_info'>CORREO ELECTRÓNICO: 
                                <span className='text-secondary font-bold'>VictorMCS11@gmail.com</span>
                            </h3>
                        </li>
                    </ol>
                </div>
            </div>
            <div className='w-full h-max'>
                <hr className='border-1 border-primary dark:border-secondary' />
                <h1 className='mt-[50px] mb-[50px] text-primary dark:text-tertiary text-[25px] font-bold'>Formación</h1>
                <Formacion />
            </div>
            <div className='w-full h-max'>
                <hr className='border-1 border-primary dark:border-secondary' />
                <h1 className='mt-[50px] mb-[50px] text-primary dark:text-tertiary text-[25px] font-bold'>Tecnologías</h1>
                <Tecnologias />
            </div>
            <div className='w-full h-max'>
                <hr className='border-1 border-primary dark:border-secondary' />
                <h1 className='mt-[50px] mb-[50px] text-primary dark:text-tertiary text-[25px] font-bold'>Experiencia</h1>
                <Experiencia />
            </div>
            <div className='w-full h-max mb-[50px]'>
                <hr className='border-1 border-primary dark:border-secondary' />
                <h1 className='mt-[50px] mb-[50px] text-primary dark:text-tertiary text-[25px] font-bold'>Objectivo</h1>
                <h2 className='text-primary dark:text-tertiary ml-[80px] bg-white dark:bg-tertiary rounded-[10px] bg-opacity-30 dark:bg-opacity-5 px-2'>Estudiante joven con el objetivo de iniciarse en un empleo dispuesto a ampliar sus conocimientos , aprender y así mejorar en el sector.</h2>
            </div>
        </div>
        </>
    )
}