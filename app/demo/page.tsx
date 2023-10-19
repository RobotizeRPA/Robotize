'use client'
import Footer from "@/components/Footer/Footer"
import Navbar from "@/components/Navbar/Navbar"
import { useEffect, useState, useRef } from "react"
import { Resend } from 'resend';
import emailjs from '@emailjs/browser';

export default function Demo(){
    const [scroll,setScroll] = useState(false)
    const [email,setEmail] = useState({
        nombre:"",
        correo:"",
        numero:"",
        empresa:"",
        mensaje:""
    })
    
    const form: any = useRef()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail({
            ...email,
            [e.target.name]: e.target.value
        })
    }

    const handleChangeTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setEmail({
            ...email,
            mensaje: e.target.value
        })
    }

    useEffect(()=>{
        window.addEventListener("scroll",()=>{
         if(window.scrollY > 0) setScroll(true)
         else setScroll(false)
        })
    },[])
    
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            await emailjs.sendForm('service_u2l19t6', 'template_m5h4eob', form.current, 'o0-m09IJitZ6xktML')
            setEmail({
                nombre:"",
                correo:"",
                numero:"",
                empresa:"",
                mensaje:"" 
            })
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <>
            <div className={scroll ? "w-full border-[#441eae] border-b-2 shadow-xl sticky top-0 bg-white" : "w-full border-b-2"}>
                <Navbar />
            </div>
            <main className="w-full mx-auto bg-[#441eae]">
                <form className="pt-10 pb-20 w-2/3 mx-auto text-center min-h-[70vh] grid grid-cols-2 gap-4 max-sm:w-full max-sm:px-2 max-sm:grid-cols-1" ref={form} onSubmit={(e) => handleSubmit(e)}>
                    <h2 className="grid grid-cols-1 text-center col-start-1 col-end-3 text-white text-2xl py-4 max-sm:text-lg">Escribinos asi agendamos una demo gratuita!</h2>    
                    <div className="grid grid-cols-1 text-left">
                        <label className="text-white">Nombre:</label>
                        <input type="text" name='nombre' value={email.nombre} required onChange={handleChange}/>
                    </div>
                    <div className="grid grid-cols-1 text-left">
                        <label className="text-white">Correo Electronico:</label>
                        <input type="email" name='correo' value={email.correo} required onChange={handleChange}/>
                    </div>
                    <div className="grid grid-cols-1 text-left">
                        <label className="text-white">Telefono:</label>
                        <input type="number" name='numero' value={email.numero} required onChange={handleChange}/>
                    </div>
                    <div className="grid grid-cols-1 text-left">
                        <label className="text-white">Empresa:</label>
                        <input type="text" name='empresa' value={email.empresa} required onChange={handleChange}/>
                    </div>
                    <div className="grid grid-cols-1 text-left col-start-1 col-end-3">
                        <label className="text-white">Mensaje:</label>
                        <textarea cols={50} rows={10} name='mensaje' value={email.mensaje} required onChange={handleChangeTextArea} />
                    </div>
                    <button className="bg-white border-none border-2 rounded-md col-span-2" type="submit">Enviar Mensaje</button>
                </form>
            </main>
            <Footer/>
        </>)
}