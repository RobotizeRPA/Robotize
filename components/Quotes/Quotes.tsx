import {LiaHandshake} from 'react-icons/lia'
import {BsCircle, BsCheck2All} from 'react-icons/bs'

export default function Quotes(){
    return(
        <>
            <article className="text-center text-white w-2/3 mx-auto max-sm:w-full">
            {/* <h2>No es magia, es RPA.</h2> */}
            <h2 className="text-3xl font-bold py-6 text-white max-sm:text-lg">Algunos datos a tener en cuenta:</h2>
            <div className="grid grid-cols-3 py-10 gap-10 max-sm:grid-cols-1">
              <div className="flex flex-col justify-center items-center gap-4">
                {/* <Image src={Reduce} alt='Reduce' width={100} height={100} /> */}
                <LiaHandshake className='text-[100px]'/>
                <p className="font-bold text-white">MANO A MANO</p>
                <p className="text-sm max-sm:text-xs">Los robots software no sustituyen a los humanos, sino que les ayudan en las tareas más repetitivas para que ellos puedan centrarse en tareas más importantes.</p>
              </div>
              <div className="flex flex-col justify-center items-center gap-4">
                <BsCircle className='text-[100px]'/>
                <p className="font-bold text-white">ÁGIL, RÁPIDO Y TRANSPARENTE</p>
                <p className="text-sm max-sm:text-xs">Realizamos la implantación de robots software de una manera rápida, sencilla y sin interferir en los sistemas o programas que ya estás utilizando.</p>
              </div>
              <div className="flex flex-col justify-center items-center gap-4">
                <BsCheck2All className='text-[100px]'/>
                <p className="font-bold text-white">SEGURO Y FIABLE</p>
                <p className="text-sm max-sm:text-xs">Trabajar con robots software no solo es fiable, sino que además proporciona más seguridad en procesos susceptibles de provocar errores.</p>
              </div>
            </div>
          </article>
        </>)
}