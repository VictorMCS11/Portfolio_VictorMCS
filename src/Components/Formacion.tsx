export default function Formacion(){

    type Formacion = {
        fecha: string;
        formacion: string;
        centro: string;
    };
    
    const formaciones: Formacion[] = [
        {
            fecha: "2008-2014",
            formacion: "Educación Primaria Obligatoria (EPO)",
            centro: "Colegio Poeta Plá y Beltrán (Ibi-Alicante)"
        },
        {
            fecha: "2014-2018",
            formacion: "Educación Secundaria Obligatoria (ESO)",
            centro: "IES Fray Ignacio Barrachina (Ibi-Alicante)"
        },
        {
            fecha: "2019-2021",
            formacion: "Ciclo Medio de Informática",
            centro: "Colegio San Roque (Alcoy-Alicante)"
        },
        {
            fecha: "2022-2024",
            formacion: "Cursando Ciclo Superior de Desarrollo de aplicaciones Web",
            centro: "IFP Centro de Innovación de formación profesional"
        }
    ];

    return(
        <div className='flex flex-col gap-[30px]'>
            {
                formaciones.length > 0?(
                    formaciones.map(formacion =>(
                        <div key={formacion.formacion} className='w-full h-max flex gap-2 md:gap-[50px] md:pl-[100px]'>
                            <h2 className='w-[25%] md:w-[15%] text-primary dark:text-tertiary'>{formacion.fecha}</h2>
                            <div className='w-full flex flex-col'>
                                <h3 className='bg-white dark:bg-tertiary rounded-[10px] bg-opacity-30 dark:bg-opacity-5 px-2 text-secondary font-bold'>{formacion.formacion}<br />
                                <span className='text-primary dark:text-tertiary font-normal'>{formacion.centro}</span></h3>
                            </div>
                        </div>
                    ))
                ):(
                    <h1>No hay formaciones</h1>
                )
            }
        </div>
    )
}