import { IBlog } from "@/types"
import BlogCard from "./BlogCard"

interface Props {
    data: IBlog[]
}

export default function BlogBody({data}: Props){
    return(<section className="w-2/3 mx-auto max-sm:w-full max-sm:p-2">
        {
            data.map(e => {
                return <BlogCard key={e._id} title={e.title} img={e.img} subtitle={e.content} date={e.date}/>
            })
        }
    </section>)
}