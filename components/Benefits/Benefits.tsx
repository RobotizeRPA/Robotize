import Image from "next/image";
import Reduce from '../../assets/reduce.png'
import Security from '../../assets/security.png'
import Rapidez from '../../assets/speed.png'
import Brain from '../../assets/brain.png'
import Replication from '../../assets/replication.png'
import Employe from '../../assets/employee.png'

export default function Benefits(){
    return(
        <>
            <h2 className="text-3xl font-bold py-8 text-robotize max-sm:text-lg">Beneficios de la implementacion de RPA en tu empresa</h2>
            <p className="max-sm:text-sm">
              Al ser tecnología que simula con seguridad acciones del mouse,
              escritura en sistemas, accede a bases de datos, verifica contenidos
              en pantalla, navega por sitios web, manipula correos electrónicos y
              además se integra con otros sistemas en la red y en la nube a través
              de APIs. <strong className="text-robotize">RPA</strong> te permite:
            </p>
            <div className="grid grid-cols-3 py-10 gap-10 max-sm:grid-cols-2">
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
        </>)
}