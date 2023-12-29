import { IBlog } from "@/types"
import BlogCard from "./BlogCard"

interface Props {
    data: IBlog[]
}

export default function BlogBody({data}: Props){
    return(<section className="w-2/3 mx-auto">
        {
            data.map(e => {
                return <BlogCard key={e._id} title={e.title} img={e.img} subtitle={e.subtitle} date={e.date}/>
            })
        }
    </section>)
}