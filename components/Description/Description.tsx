export default function Description() {
  return (
    <>
      <article className="h-full flex flex-row justify-center items-center gap-6 mx-auto text-white max-sm:flex-col max-sm:w-full bg-filtro">
        <div className="flex flex-col justify-center items-center text-center gap-6 w-2/3 mx-auto max-sm:flex-col max-sm:w-full max-sm:px-2">
          <h1 className="text-6xl font-bold  max-sm:text-4xl">ROBOTIZE</h1>
          <p className="max-sm:text-sm">
            La <strong>Automatización Robótica de Procesos</strong> (RPA) es una
            tecnología ya suficientemente madura para los desafíos de empresas
            de todo tipo y tamaño.
            <br /> A diferencia de crear un software desde cero, implementar un
            proyecto <strong>RPA</strong> significa crear un software robot para
            imitar las acciones que una persona realiza en los sistemas
            existentes, ejecutando cualquier proceso.
            <br />
            Cuanto más repetitivo sea el proceso, mejor será el beneficio y
            mayor será el éxito en la implementación del <strong>RPA</strong>.
          </p>
          {/* <Image src={Banner} alt="Banner" width={500} height={250} className="rounded-tl rounded-tr" /> */}
        </div>
      </article>
    </>)
}