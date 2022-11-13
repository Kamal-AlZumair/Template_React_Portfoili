import React from 'react'
import pic1 from '../assets/pic1.png'
import pic2 from '../assets/pic2.png'
import pic3 from '../assets/pic3.jpg'
import pic4 from '../assets/pic4.png'
import pic5 from '../assets/pic5.jpg'
import pic6 from '../assets/pic6.png'

const Portfolio = () => {
  return (
    <section className='portfolio'>
      <div className='container py-10 px-10 md:px-20 lg:px-40'>
        <div>
          <h3 className=' text-3xl py-1'>Portfolio</h3>
          <p className=' py-2'>Creating elegant designs suited for your needs following core
                design theory.
            </p>
        </div>

        <div className=' flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
          <div className=' shadow-lg basis-1/3 flex-1'>
            <img src={pic1} alt="" className='w-[100%] h-[100%] rounded-lg object-cover'/>
          </div>
          <div className='shadow-lg basis-1/3 flex-1'>
            <img src={pic2} alt="" className='w-[100%] h-[100%] rounded-lg object-cover'/>
          </div>
          <div className='shadow-lg basis-1/3 flex-1'>
            <img src={pic3} alt="" className='w-[100%] h-[100%] rounded-lg object-cover'/>
          </div>
          <div className='shadow-lg basis-1/3 flex-1'>
            <img src={pic4} alt="" className='w-[100%] h-[100%] rounded-lg object-cover'/>
          </div>
          <div className='shadow-lg basis-1/3 flex-1'>
            <img src={pic5} alt="" className='w-[100%] h-[100%] rounded-lg object-cover'/>
          </div>
          <div className='shadow-lg basis-1/3 flex-1'>
            <img src={pic6} alt="" className='w-[100%] h-[100%] rounded-lg object-cover'/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
