import Link from "next/link";
import {AiOutlineTwitter, AiFillLinkedin, AiFillMail} from 'react-icons/ai'

export default function Footer(){
    return(
        <footer className="w-2/3 mx-auto flex max-sm:flex-col max-sm:gap-4 justify-between p-4 text-center items-center border-t-2">
            <div className="flex flex-col gap-2 max-sm:hidden">
                
                <Link href='/politica'>Nosotros</Link>
                <Link href='/deportes'>¿Por que RPA?</Link>
            </div>
            <div>
            <h2 className="text-3xl py-2 text-[#441eae]">ROBOTIZE</h2>
            <span className="text-sm">Automatizamos tareas empresariales<br/> duplicando la rentabilidad 🤖🚀</span>
            </div>
            <div className="text-center flex justify-center gap-2">
                <Link href='https://www.linkedin.com/in/robotize-rpa-4177ab287/' target="_blank"><AiFillLinkedin className='text-2xl'/></Link>
                <Link href='https://twitter.com/AutoDolar' target="_blank"><AiOutlineTwitter className='text-2xl'/></Link>
                <AiFillMail className='text-2xl'/>
            </div>
        </footer>)
}