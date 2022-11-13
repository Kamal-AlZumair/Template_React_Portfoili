import React from 'react'
import deved from '../assets/dev-ed-wave.png'

const Header = () => {
  return (
    <section className=' relative overflow-hidden header'>
        <div className=' absolute   left-[-10rem]  top-[2rem] bg-teal-500 w-[300px] h-[300px] rounded-full opacity-10  filter blur-3xl'/>
        <div className=' absolute   right-[-10rem] top-[20rem]  bg-cyan-400 w-[300px] h-[300px] rounded-full opacity-10  filter blur-3xl'/>
    <div className='container mx-auto  py-10 md:py-1 px-10 md:px-20 lg:px-40'>
      <div className='  text-center py-10 md:py-2'>
        <h2 className=' text-4xl py-2 text-teal-600 font-medium md:text-6xl'>Kamal Al-Zumair</h2>
        <h3 className='text-2xl md:text-3xl py-2'>Developer and Designer</h3>
        <p className=' text-md md:text-xl py-5 leading-8 text-gray-800 max-w-lg mx-auto'>Freelancer providing services  for <br className=' sm:block hidden'/> programming  and  design contents needs. <br className=' sm:block hidden'/>Hire me and let's get cracking!</p>
      </div>
      {/* <div className=' text-5xl flex justify-center gap-16 py-3 md:py-1 text-gray-600'>
        <AiFillTwitterCircle/>
        <AiFillLinkedin/>
        <AiFillInstagram/>
      </div> */}
      <div className=' relative mt-20 lg:mt-[10px] mx-auto bg-gradient-to-b from-teal-500  rounded-full w-80 h-80 overflow-hidden md:h-96 md:w-96'>
        <img src={deved} alt='' className='h-[100%] object-cover'/>
      </div>
    </div>
    </section>
  )
}

export default Header
