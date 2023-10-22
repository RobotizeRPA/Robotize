import Image from 'next/image'
import Link from 'next/link'

export default function Proyects(){
    return( 
        <>
          <h2 className="text-3xl font-bold py-8 text-robotize">Algunos de nuestros proyectos</h2>
          <div className="grid grid-cols-2 items-center gap-4 max-sm:grid-cols-1">
            <div>
              <h4 className="text-robotize font-semibold text-2xl py-2 text-left max-sm:text-center">Noticias Robotize</h4>
              <p className="text-left py-2 max-sm:text-center">RobotizeWeb es un diario digital que emplea técnicas de "Web Scraping" para capturar noticias recientes. Luego, con la ayuda de Chat GPT, las procesa y reformula para presentarlas en un formato único y personalizado.</p>
              <Link href='https://robotize-web.vercel.app/home' className="text-center border-2 border-[#441eae] px-2 rounded-lg">Ver pagina</Link>
            </div>
            <Image src='https://res.cloudinary.com/vuelosflights/image/upload/v1697926871/robotizenews_voibbf.png' alt='RobotizeNews' width={450} height={150} className="border-2 border-[#441eae]"/>
          </div>
          <div className="grid grid-cols-2 justify-items-center px-4 items-center gap-4 max-sm:grid-cols-1">
            <Image src='https://res.cloudinary.com/vuelosflights/image/upload/v1697926901/vuelos_wfaxcu.png' alt='RobotizeFlight' width={450} height={150} className="border-2 border-[#441eae] max-sm:hidden"/>
            <div>
              <h4 className="text-robotize font-semibold text-2xl py-2 text-right max-sm:text-center">Vuelos Robotize</h4>
              <p className="text-right py-2 max-sm:text-center">El bot Vuelos Robotize opera cada treinta minutos, accediendo a la página que muestra todos los vuelos de la empresa. Verifica si se han añadido nuevos vuelos y, de ser así, notifica inmediatamente a los pilotos. Esto permite que cada piloto esté siempre informado y pueda aprovechar al máximo las oportunidades.</p>
              <Link href='https://youtu.be/BthnuG38yuU' className="text-center border-2 border-[#441eae] px-2 rounded-lg">Ver video</Link>
            </div>
            <Image src='https://res.cloudinary.com/vuelosflights/image/upload/v1697926901/vuelos_wfaxcu.png' alt='RobotizeFlight' width={450} height={150} className="border-2 border-[#441eae] hidden max-sm:flex"/>
          </div>
          <div className="grid grid-cols-2 items-center gap-4 max-sm:grid-cols-1">
            <div>
              <h4 className="text-robotize font-semibold text-2xl py-2 text-left max-sm:text-center">Arrendamiento Robotize</h4>
              <p className="text-left py-2 max-sm:text-center">Arrendamiento Robotize es un bot programado para capturar el Índice de Arrendamiento diariamente a las 15:30 y almacenarlo en un archivo Excel. Al concluir el mes, utiliza ese archivo para generar estadísticas que luego incorpora en una grilla anual.</p>
              <button className="text-center border-2 border-[#441eae] px-2 rounded-lg">Ver video</button>
            </div>
            <Image src='https://res.cloudinary.com/vuelosflights/image/upload/v1697926909/arrendamiento_auitip.png' alt='RobotizeNews' width={450} height={150} className="border-2 border-[#441eae]"/>
          </div>
        </>)
}
