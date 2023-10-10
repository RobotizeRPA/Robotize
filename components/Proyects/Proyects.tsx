import Image from 'next/image'
import RobotizeNews from '../../assets/robotizeNews.png'
import Vuelos from '../../assets/vuelos.png'
import Arrendamiento from '../../assets/arrendamiento.png'


export default function Proyects(){
    return( 
        <>
          <h2 className="text-3xl font-bold py-8 text-robotize">Algunos de nuestros proyectos</h2>
          <div className="grid grid-cols-2 items-center gap-4 max-sm:grid-cols-1">
            <div>
              <h4 className="text-robotize font-semibold text-2xl py-2 text-left max-sm:text-center">Noticias Robotize</h4>
              <p className="text-left py-2 max-sm:text-center">RobotizeWeb es un diario virtual actualizado. Utiliza el sistema de "Web Scrapping" para obtener noticias de ultimo momento y las filtra a traves de Chat GPT para modificarlas y crear su propio formato.</p>
              <button className="text-center border-2 border-[#441eae] px-2 rounded-lg">Ver video</button>
            </div>
            <Image src={RobotizeNews} alt='RobotizeNews' width={450} height={150} className="border-2 border-[#441eae]"/>
          </div>
          <div className="grid grid-cols-2 justify-items-center px-4 items-center gap-4 max-sm:grid-cols-1">
            <Image src={Vuelos} alt='RobotizeFlight' width={450} height={150} className="border-2 border-[#441eae] max-sm:hidden"/>
            <div>
              <h4 className="text-robotize font-semibold text-2xl py-2 text-right max-sm:text-center">Vuelos Robotize</h4>
              <p className="text-right py-2 max-sm:text-center">Vuelos Robotize se ejecuta cada treinta minutos, entra a la pagina donde se ven reflejados todos los vuelos de la empresa y chequea si hay nuevos vuelos agregados para asi notificarselo a los pilotos. De esta manera cada piloto puede estar al tanto y sacar el maximo provecho.</p>
              <button className="text-center border-2 border-[#441eae] px-2 rounded-lg">Ver video</button>
            </div>
            <Image src={Vuelos} alt='RobotizeFlight' width={450} height={150} className="border-2 border-[#441eae] hidden max-sm:flex"/>
          </div>
          <div className="grid grid-cols-2 items-center gap-4 max-sm:grid-cols-1">
            <div>
              <h4 className="text-robotize font-semibold text-2xl py-2 text-left max-sm:text-center">Arrendamiento Robotize</h4>
              <p className="text-left py-2 max-sm:text-center">Arrendamiento Robotize es un bot que todos los dias a las 15:30 agarra le Indice de Arrendamiento y los guarda en un archivo EXCEL. A fin de mes utiliza ese mismo archivo para obtener estadisticas y plasmarlo en una grilla ANUAL.</p>
              <button className="text-center border-2 border-[#441eae] px-2 rounded-lg">Ver video</button>
            </div>
            <Image src={Arrendamiento} alt='RobotizeNews' width={450} height={150} className="border-2 border-[#441eae]"/>
          </div>
        </>)
}