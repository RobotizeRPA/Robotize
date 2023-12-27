'use client'
import Image from 'next/image'
import LOGO from '../../assets/imagenPerfilLimpio.png'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { HiOutlineBars3 } from 'react-icons/hi2'
import SideBar from '../Sidebar/Sidebar'

export default function Navbar(){
    const router = useRouter()
    const [sidebar,setSidebar] = useState(false)

    return(
        <nav className='flex justify-between items-center w-2/3 mx-auto max-sm:w-full max-sm:px-4'>
            <div onClick={() => router.push('/')}>
                <Image src={LOGO} alt='RoboitzeLogo' width={100} height={100} className='cursor-pointer'/>
            </div>
            <HiOutlineBars3 className='text-3xl text-[#441eae] sm:hidden' onClick={() => setSidebar(true)}/>
            <div className='flex flex-row justify-center items-center gap-6 max-sm:hidden'>
                <p className='cursor-pointer' onClick={() => router.push('/nosotros')}>Nosotros</p>
                {/* <p>¿Por que RPA?</p> */}
                <button className='bg-[#441eae] border-none border-2 px-6 py-2 rounded-md text-white' onClick={() => router.push('/demo')}>Demo</button>
            </div>
            {
                sidebar && <SideBar setSidebar={setSidebar} sidebar={sidebar}/>
            }
        </nav>)
}