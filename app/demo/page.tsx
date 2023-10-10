'use client'
import Footer from "@/components/Footer/Footer"
import Navbar from "@/components/Navbar/Navbar"
import { useEffect, useState } from "react"


export default function Demo(){
    const [scroll,setScroll] = useState(false)

    useEffect(()=>{
        window.addEventListener("scroll",()=>{
         if(window.scrollY > 0) setScroll(true)
         else setScroll(false)
        })
    },[])
    
    return(
        <>
            <div className={scroll ? "w-full border-[#441eae] border-b-2 shadow-xl sticky top-0 bg-white" : "w-full border-b-2"}>
                <Navbar />
            </div>
            <main className="w-full mx-auto bg-[#441eae]">
                <form className="pt-10 pb-20 w-2/3 mx-auto text-center min-h-[70vh] grid grid-cols-2 gap-4 max-sm:w-full max-sm:px-2 max-sm:grid-cols-1">
                    <h2 className="grid grid-cols-1 text-center col-start-1 col-end-3 text-white text-2xl py-4 max-sm:text-lg">Escribinos asi agendamos una demo gratuita!</h2>    
                    <div className="grid grid-cols-1 text-left">
                        <label className="text-white">Nombre:</label>
                        <input type="text" required/>
                    </div>
                    <div className="grid grid-cols-1 text-left">
                        <label className="text-white">Correo Electronico:</label>
                        <input type="email" required/>
                    </div>
                    <div className="grid grid-cols-1 text-left">
                        <label className="text-white">Telefono:</label>
                        <input type="text" required/>
                    </div>
                    <div className="grid grid-cols-1 text-left">
                        <label className="text-white">Empresa:</label>
                        <input type="text" required/>
                    </div>
                    <div className="grid grid-cols-1 text-left col-start-1 col-end-3">
                        <label className="text-white">Mensaje:</label>
                        <textarea cols={50} rows={10} required/>
                    </div>
                    <button className="bg-white border-none border-2 rounded-md col-span-2">Enviar Mensaje</button>
                </form>
            </main>
            <Footer/>
        </>)
}