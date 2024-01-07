import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Description from "@/components/Description/Description";
import Benefits from "@/components/Benefits/Benefits";
import Quotes from "@/components/Quotes/Quotes";
import Proyects from "@/components/Proyects/Proyects";

export default function Home() {
 
  return (
    <>
      <div className="w-full border-robotize border-b-2 shadow-xl sticky top-0 bg-white">
        <Navbar />
      </div>
      <main className="w-full mx-auto">
        <section className="bg-robotize h-70 max-sm:h-60 bg-no-repeat bg-cover bg-bannerBg">
          <Description/>
        </section>
        <article className="text-center w-2/3 mx-auto border-t-2 py-20 max-sm:px-2 max-sm:w-full">
            <Benefits/>
        </article>
        <section className="bg-robotize py-20 border-t-2 max-sm:px-2">
          <Quotes/>
        </section>
        <article className="text-center w-2/3 mx-auto border-t-2 py-20 flex flex-col gap-20 justify-center items-center max-sm:w-full max-sm:px-2">
          <Proyects/>
        </article>
        <div className="border-t-2">
        <Footer/>
        </div>
      </main>
    </>
  );
}
