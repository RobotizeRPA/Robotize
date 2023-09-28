'use client'
import Image from 'next/image'
import LOGO from '../../assets/imagenPerfilLimpio.png'


export default function Navbar(){

    return(
        <nav className='flex justify-between items-center w-2/3 mx-auto'>
            <div>
                <Image src={LOGO} alt='RoboitzeLogo' width={100} height={100}/>
            </div>
            <div className='flex flex-row justify-center items-center gap-6'>
                <p>Nosotros</p>
                <p>¿Por que RPA?</p>
                <button className='bg-[#441eae] border-none border-2 px-6 py-2 rounded-md text-white'>Demo</button>
            </div>
        </nav>)
}