import { Metadata } from "next";
import { getBlogNote } from "../service/blog.service";
import Navbar from "@/components/Navbar/Navbar";
import Article from "@/components/Blog/Article/Article";
import Footer from "@/components/Footer/Footer";

type Props = {
  params: { title: string; seccion: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const dataTitle = await getBlogNote(params.title, "rpa");
  return {
    title: dataTitle.title,
  };
}

export default async function BlogNote({ params }: Props) {
  const data = await getBlogNote(params.title, "rpa");


  return (
    <>
      <div className={"w-full border-b-2 bg-white z-10"}>
        <Navbar />
      </div>
      <section className="px-2">
        <Article data={data}/>
      </section>
      <div className="w-full border-t-2">
      <Footer/>
      </div>
    </>
  );
}
