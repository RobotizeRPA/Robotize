'use client'
import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";
import Banner from "../assets/robotize.svg";
import Reduce from '../assets/reduce.png'
import Security from '../assets/security.png'
import Rapidez from '../assets/speed.png'
import Brain from '../assets/brain.png'
import Replication from '../assets/replication.png'
import Employe from '../assets/employee.png'
import {useState,useEffect} from 'react'
import {LiaHandshake} from 'react-icons/lia'
import {BsCircle, BsCheck2All} from 'react-icons/bs'
import Footer from "@/components/Footer/Footer";
import RobotizeNews from '../assets/robotizeNews.png'
import Vuelos from '../assets/vuelos.png'
import Arrendamiento from '../assets/arrendamiento.png'

export default function Home() {
  const [scroll,setScroll] = useState(false)

    useEffect(()=>{
        window.addEventListener("scroll",()=>{
         if(window.scrollY > 0) setScroll(true)
         else setScroll(false)
        })
    },[])
  
  return (
    <>
      <div className={scroll ? "w-full border-[#441eae] border-b-2 shadow-xl sticky top-0 bg-white" : "w-full border-b-2"}>
        <Navbar />
      </div>
      <main className="w-full mx-auto">
        <section className="bg-[#441eae] pt-40 pb-20">
          <article className="flex flex-row justify-center items-center text-center gap-6 w-2/3 mx-auto text-white">
            <p>
              <h1 className="text-6xl font-bold py-6 text-white">ROBOTIZE</h1>
              La <strong className="text-white">Automatización Robótica de Procesos</strong> (RPA) es una
              tecnología ya suficientemente madura para los desafíos de empresas
              de todo tipo y tamaño.
              <br /> A diferencia de crear un software desde cero, implementar un
              proyecto <strong className="text-white">RPA</strong> significa crear un software robot para
              imitar las acciones que una persona realiza en los sistemas
              existentes, ejecutando cualquier proceso.
              <br />
              Cuanto más repetitivo sea el proceso, mejor será el beneficio y
              mayor será el éxito en la implementación del <strong className="text-white">RPA</strong>.
            </p>
            <Image src={Banner} alt="Banner" width={500} height={250} />
          </article>
        </section>
        <article className="text-center w-2/3 mx-auto border-t-2 py-20">
            <h2 className="text-3xl font-bold py-8 text-robotize">Beneficios de la implementacion de RPA en tu empresa</h2>
            <p>
              Al ser tecnología que simula con seguridad acciones del mouse,
              escritura en sistemas, accede a bases de datos, verifica contenidos
              en pantalla, navega por sitios web, manipula correos electrónicos y
              además se integra con otros sistemas en la red y en la nube a través
              de APIs. <strong className="text-robotize">RPA</strong> te permite:
            </p>
            <div className="grid grid-cols-3 py-10 gap-10">
              <div className="flex flex-col justify-center items-center gap-4">
                <Image src={Reduce} alt='Reduce' width={100} height={100} />
                <p className="text-sm">Reducir los costes de gestión administrativos</p>
              </div>
              <div className="flex flex-col justify-center items-center gap-4">
                <Image src={Security} alt='Reduce' width={100} height={100} />
                <p className="text-sm">Asegurar la seguridad de los datos y optimizar recursos</p>
              </div>
              <div className="flex flex-col justify-center items-center gap-4">
                <Image src={Rapidez} alt='Reduce' width={100} height={100} />
                <p className="text-sm">Mejorar la rapidez en la gestión de los datos</p>
              </div>
              <div className="flex flex-col justify-center items-center gap-4">
                <Image src={Brain} alt='Reduce' width={100} height={100} />
                <p className="text-sm">Liberar tiempo del personal para tareas más estratégicas</p>
              </div>
              <div className="flex flex-col justify-center items-center gap-4">
                <Image src={Replication} alt='Reduce' width={100} height={100} />
                <p className="text-sm">Mejorar la rapidez en la gestión de los datos</p>
              </div>
              <div className="flex flex-col justify-center items-center gap-4">
                <Image src={Employe} alt='Reduce' width={100} height={100} />
                <p className="text-sm">Mejorar la rapidez en la gestión de los datos</p>
              </div>
            </div>
        </article>
        <section className="bg-[#441eae] py-20 border-t-2">
          <article className="text-center text-white w-2/3 mx-auto">
            {/* <h2>No es magia, es RPA.</h2> */}
            <h2 className="text-3xl font-bold py-6 text-white">Algunos datos a tener en cuenta:</h2>
            <div className="grid grid-cols-3 py-10 gap-10">
              <div className="flex flex-col justify-center items-center gap-4">
                {/* <Image src={Reduce} alt='Reduce' width={100} height={100} /> */}
                <LiaHandshake className='text-[100px]'/>
                <p className="font-bold text-white">MANO A MANO</p>
                <p className="text-sm">Los robots software no sustituyen a los humanos, sino que les ayudan en las tareas más repetitivas para que ellos puedan centrarse en tareas más importantes.</p>
              </div>
              <div className="flex flex-col justify-center items-center gap-4">
                <BsCircle className='text-[100px]'/>
                <p className="font-bold text-white">ÁGIL, RÁPIDO Y TRANSPARENTE</p>
                <p className="text-sm">Realizamos la implantación de robots software de una manera rápida, sencilla y sin interferir en los sistemas o programas que ya estás utilizando.</p>
              </div>
              <div className="flex flex-col justify-center items-center gap-4">
                <BsCheck2All className='text-[100px]'/>
                <p className="font-bold text-white">SEGURO Y FIABLE</p>
                <p className="text-sm">Trabajar con robots software no solo es fiable, sino que además proporciona más seguridad en procesos susceptibles de provocar errores.</p>
              </div>
            </div>
          </article>
        </section>
        <article className="text-center w-2/3 mx-auto border-t-2 py-20 flex flex-col gap-20 justify-center items-center">
          <h2 className="text-3xl font-bold py-8 text-robotize">Algunos de nuestros proyectos</h2>
          <div className="grid grid-cols-2 items-center gap-4">
            <div>
              <h4 className="text-robotize font-semibold text-2xl py-2 text-left">Noticias Robotize</h4>
              <p className="text-left py-2">RobotizeWeb es un diario virtual actualizado. Utiliza el sistema de "Web Scrapping" para obtener noticias de ultimo momento y las filtra a traves de Chat GPT para modificarlas y crear su propio formato.</p>
              <button className="text-center border-2 border-[#441eae] px-2 rounded-lg">Ver video</button>
            </div>
            <Image src={RobotizeNews} alt='RobotizeNews' width={450} height={150} className="border-2 border-[#441eae]"/>
          </div>
          <div className="grid grid-cols-2 justify-items-center px-4 items-center gap-4">
            <Image src={Vuelos} alt='RobotizeFlight' width={450} height={150} className="border-2 border-[#441eae]"/>
            <div>
              <h4 className="text-robotize font-semibold text-2xl py-2 text-right">Vuelos Robotize</h4>
              <p className="text-right py-2">Vuelos Robotize se ejecuta cada treinta minutos, entra a la pagina donde se ven reflejados todos los vuelos de la empresa y chequea si hay nuevos vuelos agregados para asi notificarselo a los pilotos. De esta manera cada piloto puede estar al tanto y sacar el maximo provecho.</p>
              <button className="text-center border-2 border-[#441eae] px-2 rounded-lg">Ver video</button>
            </div>
          </div>
          <div className="grid grid-cols-2 items-center gap-4">
            <div>
              <h4 className="text-robotize font-semibold text-2xl py-2 text-left">Arrendamiento Robotize</h4>
              <p className="text-left py-2">Arrendamiento Robotize es un bot que todos los dias a las 15:30 agarra le Indice de Arrendamiento y los guarda en un archivo EXCEL. A fin de mes utiliza ese mismo archivo para obtener estadisticas y plasmarlo en una grilla ANUAL.</p>
              <button className="text-center border-2 border-[#441eae] px-2 rounded-lg">Ver video</button>
            </div>
            <Image src={Arrendamiento} alt='RobotizeNews' width={450} height={150} className="border-2 border-[#441eae]"/>
          </div>
        </article>
        <Footer/>
      </main>
    </>
  );
}
