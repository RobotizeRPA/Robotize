'use client'
import Link from 'next/link'
import {AiOutlineClose} from 'react-icons/ai'
import { useRouter } from 'next/navigation'

interface Props {
    setSidebar: any
    sidebar: boolean
}

export default function SideBar({setSidebar, sidebar}: Props){
    const router = useRouter()
    
    return(
        <div className='absolute left-0 top-0 w-full  h-[100vh] bg-lightBlack animate-slide-right z-10'>
            <div className='w-[240px] h-[100vh] bg-white px-2 border-r-2 border-[#441eae]'>
            <div className='flex justify-between py-4'>
                <h2 className='text-2xl sm:hidden'>Robotize</h2>
                <AiOutlineClose onClick={() => setSidebar(false)} className='cursor-pointer text-2xl text-robotize'/>
            </div>
            <ul className='flex flex-col gap-4'>
                <li><Link href='/nosotros' className='font-bold text-lg'>Nosotros</Link></li>
                {/* <li><Link href='/politica' className='font-bold text-lg'>¿Por que RPA?</Link></li> */}
                <button className='bg-robotize border-none border-2 px-6 py-2 rounded-md text-white' onClick={() => router.push('/demo')}>Demo</button>
            </ul>
            </div>
        </div>

    )
}