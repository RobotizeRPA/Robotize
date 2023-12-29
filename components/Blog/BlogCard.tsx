import Image from "next/image";
import Logo from '../../assets/imagenPerfilLimpio.png'
import { changeDate } from "./helper/blog.helper";
import { CardSubTitle } from "./helper/blog.react";

interface Props {
    img: string;
    title: string;
    subtitle: string;
    date: string;
}

export default function BlogCard({img,title,subtitle,date}: Props){
    const newDate = changeDate(date)


    return(
        <div className="grid grid-cols-2 w-2/3 mx-auto my-2 border-2">
            <Image src={img} alt={title} width={500} height={500}/>
            <div className="flex flex-col justify-between py-4">
                <div className="grid grid-cols-2 w-2/3 place-items-center">
                    <Image src={Logo} alt={title} width={75} height={75}/>
                    <div className="text-xs">
                        <p>Robotize RPA</p>
                        <p>{newDate}</p>
                    </div>
                </div>
                <h4 className="pl-2 text-sm">{title}</h4>
                {/* <p className="text-xs">{subtitle}</p> */}
                <CardSubTitle subtitle={subtitle}/>
            </div>
        </div>)
}