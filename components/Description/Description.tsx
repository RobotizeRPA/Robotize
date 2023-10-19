import Image from "next/image";
import Banner from "../../assets/robotize.svg";

export default function Description(){
    return(
        <>
            <article className="flex flex-row justify-center items-center text-center gap-6 w-2/3 mx-auto text-white max-sm:flex-col max-sm:w-full">
            <p className="max-sm:text-sm">
              <h1 className="text-6xl font-bold py-6 text-white max-sm:text-4xl">ROBOTIZE</h1>
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
        </>)
}