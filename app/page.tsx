// 'use client'
import Navbar from "@/components/Navbar/Navbar";
// import {useState,useEffect} from 'react'
import Footer from "@/components/Footer/Footer";
import Description from "@/components/Description/Description";
import Benefits from "@/components/Benefits/Benefits";
import Quotes from "@/components/Quotes/Quotes";
import Proyects from "@/components/Proyects/Proyects";

export default function Home() {
  // const [scroll,setScroll] = useState(false)

  //   useEffect(()=>{
  //       window.addEventListener("scroll",()=>{
  //        if(window.scrollY > 0) setScroll(true)
  //        else setScroll(false)
  //       })
  //   },[])
  
  return (
    <>
      <div className="w-full border-[#441eae] border-b-2 shadow-xl sticky top-0 bg-white">
      {/* <div className={scroll ? "w-full border-[#441eae] border-b-2 shadow-xl sticky top-0 bg-white" : "w-full border-b-2"}> */}
        <Navbar />
      </div>
      <main className="w-full mx-auto">
        <section className="bg-[#441eae] pt-40 pb-20 max-sm:px-2 max-sm:pt-20">
          <Description/>
        </section>
        <article className="text-center w-2/3 mx-auto border-t-2 py-20 max-sm:px-2 max-sm:w-full">
            <Benefits/>
        </article>
        <section className="bg-[#441eae] py-20 border-t-2 max-sm:px-2">
          <Quotes/>
        </section>
        <article className="text-center w-2/3 mx-auto border-t-2 py-20 flex flex-col gap-20 justify-center items-center max-sm:w-full max-sm:px-2">
          <Proyects/>
        </article>
        <Footer/>
      </main>
    </>
  );
}
