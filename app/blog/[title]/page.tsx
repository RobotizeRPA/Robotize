import { Metadata } from "next";
import { getBlogNote } from "../service/blog.service";
import Navbar from "@/components/Navbar/Navbar";
import Article from "@/components/Blog/Article/Article";

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
      <Article data={data}/>
    </>
  );
}
