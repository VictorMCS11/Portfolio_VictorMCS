import emailjs from '@emailjs/browser';
import { useState } from 'react';

export default function ContactPage(){

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
        console.log(formData)
    }

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault()

        emailjs.send(
            'service_6rhl1am',    // ID del servicio configurado en EmailJS
            'template_05xwyvc',   // ID de la plantilla configurada en EmailJS
            formData,             // Datos a enviar
            'ig5BlAG_BjtsZKVrS'     // Clave pública obtenida de EmailJS
        ).then(
            (result) => {
                console.log('Correo enviado:', result.text)
                alert('Correo enviado correctamente.')
            },
            (error) => {
                console.error('Error al enviar el correo:', error.text)
                alert('Hubo un problema al enviar el correo.')
            }
        )
    }

    return(
        <div className='min-h-[865px] max-w-screen-lg mx-auto transform duration-[.3s] flex flex-col gap-[20px] py-[30px] sm:py-[50px]'>
            <h1 className="mx-auto text-[35px] dark:text-tertiary text-primary font-bold">Contáctame por correo electrónico</h1>
            <form onSubmit={sendEmail} className="mx-auto h-max w-full bg-opacity-0 sm:max-w-md sm:dark:bg-primary sm:bg-tertiary rounded-[20px] sm:border-4 dark:border-tertiary border-primary flex flex-col gap-[30px] px-7 sm:py-12">
                <div>
                    <label htmlFor="" className="ml-2 text-[17px] dark:text-tertiary text-primary">Nombre</label>
                    <input type="text" name='name' onChange={handleChange} className="mt-1 rounded-[15px] w-full h-[35px] dark:bg-tertiary bg-primary px-4 dark:text-primary text-tertiary outline-none" />
                </div>
                <div>
                    <label htmlFor="" className="ml-2 text-[17px] dark:text-tertiary text-primary">Email</label>
                    <input type="text" onChange={handleChange} name='email' className="mt-1 rounded-[15px] w-full h-[35px] dark:bg-tertiary bg-primary px-4 dark:text-primary text-tertiary outline-none" />
                </div>
                <div>
                    <label htmlFor="" className="ml-2 text-[17px] dark:text-tertiary text-primary">Mensaje</label>
                    <textarea type="textarea" rows="5" cols="60" name='message' onChange={handleChange} className="mt-1 rounded-[15px] w-full h-[200px] dark:bg-tertiary bg-primary p-4 dark:text-primary text-tertiary outline-none" />
                </div>
                <button type='submit' className="mx-auto w-max rounded-[15px] px-4 py-2 border-2 border-secondary dark:bg-tertiary bg-primary font-bold dark:text-primary text-tertiary transform duration-200 hover:text-primary dark:hover:bg-secondary hover:bg-secondary">Enviar</button>
            </form>
        </div>
    )
}