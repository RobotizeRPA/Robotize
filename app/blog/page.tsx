import Navbar from "@/components/Navbar/Navbar";
import { getBlog } from "./service/blog.service";
import BlogBody from "@/components/Blog/BlogBody";

export const revalidate = 200;

export default async function Vlog() {
    const data = await getBlog(1)

  return (
    <>
      <div className={"w-full border-b-2 bg-white z-10"}>
        <Navbar />
      </div>
      <BlogBody data={data}/>
    </>
  );
}
