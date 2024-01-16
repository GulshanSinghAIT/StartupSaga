import React from 'react'
import cloud1 from '../assets/home/cloud1.svg'
import cloud2 from '../assets/home/cloud2.svg'
import cloud3 from '../assets/home/cloud3.svg'
import mount1 from '../assets/home/mount1.svg'
import mount2 from '../assets/home/mount2.svg'
import base from '../assets/home/base.svg'
import sun from '../assets/home/sun.svg'
import baseboard from '../assets/home/baseboard.svg'
import cacleft from '../assets/home/cacleft.svg'
import cacright from '../assets/home/cacright.svg'









const Home = () => {
    return (
        <>
        <div className='flex justify-center top-[5em] md:top-[7em]  mx-2 relative'>
            <div className='relative pt-[8em] bg-[#85C19C] px-12  overflow-hidden rounded-2xl w-[87em] h-[36em] md:h-[43em]'>
                <img className='mx-auto w-[48em]' src={sun} alt="" />
                <img className='w-[35em] lg:w-[65em] absolute cloud1' src={cloud1} alt="" />
                <img className='w-[35em] lg:w-[42em] absolute hidden md:block cloud2' src={cloud2} alt="" />
                <img className='w-[16em] md:w-[28em] absolute cloud3' src={cloud3} alt="" />
                <img src={mount1} className='w-[25em] lg:w-[36em] absolute hidden md:block mount1' alt="" />
                <img src={mount2} className='md:w-[25em] lg:w-[36em] sm:w-[36em] absolute  mount2' alt="" />

                <div className='w-[110%] h-[8em] rounded-xl absolute bg-[#280C05] base'>
                    <img className='w-[9.5em] md:w-[12em] absolute baseboard' src={baseboard} alt="" />
                    <img className='w-[17em] md:w-[22em]   absolute cacleft' src={cacleft} alt="" />
                    <img className='w-[22em] hidden md:block absolute cacright' src={cacright} alt="" />
                    

                </div>
            </div>
        </div>
        <div className='w-[45em] lg:w-[63em] hidden md:block h-[7em] relative  top-[3.8em] rounded-xl shadow-lg shadow-black mx-auto  bg-white'>

        </div>
        </>
    )
}

export default Home