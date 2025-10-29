import emailjs from '@emailjs/browser';
import { useState } from 'react';

export default function ContactPage(){
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const sendEmail = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        try {
            await emailjs.send(
                'service_6rhl1am',
                'template_gndzyil',
                formData,
                'ig5BlAG_BjtsZKVrS'
            )
            alert('Correo enviado correctamente.')
            setFormData({ name: '', email: '', message: '' }) // Limpiar formulario
        } catch (error) {
            console.error('Error al enviar el correo:', error)
            alert('Hubo un problema al enviar el correo.')
        } finally {
            setIsSubmitting(false)
        }
    }

    return(
        <div className='min-h-[865px] max-w-screen-lg mx-auto transform duration-[.3s] flex flex-col gap-[20px] py-[30px] md:py-[50px]'>
            <h1 className="text-center mx-auto text-[25px] dark:text-tertiary text-primary font-bold">
                Contáctame por correo electrónico
            </h1>
            <form 
                onSubmit={sendEmail} 
                className="mx-auto h-max w-full bg-opacity-0 md:max-w-md md:dark:bg-primary md:bg-tertiary rounded-[20px] md:border-4 dark:border-tertiary border-primary flex flex-col gap-[30px] md:px-7 md:py-12"
            >
                <div>
                    <label htmlFor="name" className="ml-2 text-[17px] dark:text-tertiary text-primary">
                        Nombre *
                    </label>
                    <input 
                        type="text" 
                        id="name"
                        name="name" 
                        value={formData.name}
                        onChange={handleChange} 
                        required
                        className="mt-1 rounded-[15px] w-full h-[35px] dark:bg-tertiary bg-primary px-4 dark:text-primary text-tertiary outline-none" 
                    />
                </div>
                <div>
                    <label htmlFor="email" className="ml-2 text-[17px] dark:text-tertiary text-primary">
                        Email *
                    </label>
                    <input 
                        type="email" 
                        id="email"
                        name="email" 
                        value={formData.email}
                        onChange={handleChange} 
                        required
                        className="mt-1 rounded-[15px] w-full h-[35px] dark:bg-tertiary bg-primary px-4 dark:text-primary text-tertiary outline-none" 
                    />
                </div>
                <div>
                    <label htmlFor="message" className="ml-2 text-[17px] dark:text-tertiary text-primary">
                        Mensaje *
                    </label>
                    <textarea 
                        id="message"
                        rows={5} 
                        name="message" 
                        value={formData.message}
                        onChange={handleChange} 
                        required
                        className="mt-1 rounded-[15px] w-full h-[200px] dark:bg-tertiary bg-primary p-4 dark:text-primary text-tertiary outline-none resize-none" 
                    />
                </div>
                <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="mx-auto w-max rounded-[15px] px-4 py-2 border-2 border-secondary dark:bg-tertiary bg-primary font-bold dark:text-primary text-tertiary transform duration-200 hover:text-primary dark:hover:bg-secondary hover:bg-secondary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isSubmitting ? 'Enviando...' : 'Enviar'}
                </button>
            </form>
        </div>
    )
}