import { IBlog } from "@/types"
import Logo from '../../../assets/imagenPerfilLimpio.png'
import Image from "next/image"
import Link from "next/link"
import { IoMdArrowRoundBack } from "react-icons/io";

interface Props {
    data: IBlog
}

export default function Article({data}: Props){
    return(
        <article className="border-2 w-2/3 mx-auto my-4 rounded-lg p-24 max-sm:w-full max-sm:p-2">
            <Link href='/blog'><IoMdArrowRoundBack className="text-2xl text-robotize"/></Link>
            <div className="flex justify-center items-center gap-10 pb-4 max-sm:gap-4">
            <Image src={Logo} alt={data.title} width={75} height={75}/>
            <p className="max-sm:text-xs">Robotize RPA - {data.date}</p>
            </div>
            <h2 className="text-center text-xl font-bold pb-10 max-sm:text-base">{data.title}</h2>
            <Image src={data.img} alt={data.title} width={2000} height={2000} className="object-cover w-full"/>
            <p className="pt-10 max-sm:text-sm" dangerouslySetInnerHTML={{ __html: data.content }}></p>
        </article>)
}