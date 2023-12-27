"use client";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import { useEffect, useState } from "react";
import './style.css'

export default function Nosotros() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) setScroll(true);
      else setScroll(false);
    });
  }, []);

  return (
    <>
      <div
        className={
          scroll
            ? "w-full border-[#441eae] border-b-2 shadow-xl sticky top-0 bg-white z-10"
            : "w-full border-b-2 bg-white z-10"
        }
      >
        <Navbar />
      </div>
      <main className="w-full mx-auto">
        <section className="text-white flex justify-center items-center gap-20 bg-robotize py-20 h-60 max-sm:h-60 bg-no-repeat bg-cover bg-transparent-image">
          <div className="w-2/3 mx-auto max-sm:w-full max-sm:px-4">
            <h2 className="text-2xl border-b-2 font-bold">Historia</h2>
            <p className="py-4 max-sm:text-sm">
              Robotize, establecida hace dos años, nació de la visión de
              expertos en Automatización Robótica de Procesos (RPA). Esta
              empresa surgió como respuesta a la necesidad de optimizar recursos
              en el entorno empresarial, centrando su enfoque en la
              automatización de tareas repetitivas mediante el uso de robots.
              Esto libera a los empleados para concentrarse en actividades de
              mayor valor agregado. Con una filosofía orientada hacia la
              innovación y el liderazgo en la revolución de la automatización,
              Robotize busca ofrecer soluciones a empresas de diversos tamaños,
              facilitando así una ventaja competitiva sostenible en el mercado.
            </p>
          </div>
        </section>
        <section className="w-2/3 mx-auto grid grid-cols-2 gap-20 py-10 max-sm:grid-cols-1 max-sm:w-full max-sm:px-4">
          {/* <div className="border-2 p-2 rounded"> */}
          <div>
            <h2 className="text-2xl border-b-2 text-[#441eae] font-bold">Misión</h2>
            <p className="py-4">
              Impulsar la productividad y reducir costos mediante la
              implementación de soluciones RPA personalizadas que automatizan
              tareas repetitivas, liberando así el potencial de los equipos para
              centrarse en actividades estratégicas y creativas.
            </p>
          </div>
          {/* <div className="border-2 p-2 rounded"> */}
          <div>
            <h2 className="text-2xl border-b-2 text-[#441eae] font-bold">Objetivos</h2>
            <p className="py-4">
              Mejorar la precisión y la calidad de los datos a través de la
              automatización con RPA (Automatización Robótica de Procesos),
              aprovechando la menor tasa de errores en comparación con el
              trabajo humano y una mayor indagación objetiva.
            </p>
          </div>
          {/* <div className="border-2 p-2 rounded"> */}
          <div>
            <h2 className="text-2xl border-b-2 text-[#441eae] font-bold">Visión</h2>
            <p className="py-4">
              Nuestra visión es liderar la revolución de la automatización, al
              permitir que las empresas de todos los tamaños aprovechen la
              tecnología para lograr una ventaja competitiva sostenible. Vemos
              un futuro en el que la automatización de procesos sea la norma, y
              trabajamos incansablemente para llevar a nuestros clientes hacia
              esa visión.
            </p>
          </div>
          {/* <div className="border-2 p-2 rounded"> */}
          <div>
            <h2 className="text-2xl border-b-2 text-[#441eae] font-bold">Expriencia</h2>
            <p className="py-4">
              Robotize es una empresa innovadora de automatización de procesos
              empresariales que ha estado revolucionando la forma en que las
              organizaciones operan desde su fundación hace dos años. Con un
              equipo de expertos apasionados y una profunda experiencia en la
              automatización de procesos, hemos establecido una reputación de
              excelencia en la industria.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
