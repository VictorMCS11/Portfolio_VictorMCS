export default function Experiencia(){

    type Experiencia = {
        fecha: string;
        trabajo: string;
        funcion: string;
    };
    
    const experiencias: Experiencia[] = [
        {
            fecha: "2021",
            trabajo: "AIJU Instituto Tecnológico",
            funcion: "Ayudante auxiliar de programación (4 meses)"
        },
        {
            fecha: "2024",
            trabajo: "Sistemas Informáticos Integrales (Prácticas)",
            funcion: "Programador (4 meses)"
        }
    ];

    return(
        <div className='flex flex-col gap-[30px]'>
            {
                experiencias.length > 0?(
                    experiencias.map(exp =>(
                        <div key={exp.trabajo} className='w-full h-max flex gap-2 md:gap-[50px] md:pl-[100px]'>
                            <h2 className='w-[25%] md:w-[15%] text-primary dark:text-tertiary'>{exp.fecha}</h2>
                            <div className='w-full flex flex-col'>
                                <h3 className='bg-white dark:bg-tertiary rounded-[10px] bg-opacity-30 dark:bg-opacity-5 px-2 text-secondary font-bold'>{exp.trabajo}<br />
                                <span className='text-primary dark:text-tertiary font-normal'>{exp.funcion}</span></h3>
                            </div>
                        </div>
                    ))
                ):(
                    <h1>No hay experiencias</h1>
                )
            }
        </div>
    )
}