import React from 'react'
import design from '../assets/design.png'
import code from '../assets/code.png'

const Services = () => {
  return (
    <section className='services'>

      <div className='container mx-auto py-10 px-10 md:px-20 lg:px-40'>
        <div>
          <h3 className='text-3xl py-1'>Services I offer</h3>
          <p className=' text-md py-2 leading-8 text-gray-500'>
          I offer from a wide range of services, including brand design,
              programming and UI/UX design.
          </p>
        </div>

        <div className='cards lg:flex  flex-col lg:flex-row gap-10 '>
          <div className=' flex-1 text-center  shadow-lg p-10 rounded-xl my-10'>
            <img src={design} alt="" className='w-[100px h-[100px] mx-auto'/>
            <h3 className=' text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
            <p className=' py-2'>Creating elegant designs suited for your needs following core
                design theory.
            </p>
            <h4 className='py-4 text-teal-600 '>Design Tools I use</h4>
            <ul className=' list-none'>
              <li className=' text-gray-800 py-1'>Photoshop</li>
              <li className=' text-gray-800 py-1'>Illustrator</li>
              <li className=' text-gray-800 py-1'>InDesign</li>
              <li className=' text-gray-800 py-1'>Adobe XD</li>
              <li className=' text-gray-800 py-1'>Figma</li>
            </ul>
          </div>
          <div className=' flex-1 text-center  shadow-lg p-10 rounded-xl my-10'>
            <img src={code} alt="" className='w-[100px h-[100px] mx-auto'/>
            <h3 className=' text-lg font-medium pt-8 pb-2'>Clean Code</h3>
            <p className=' py-2'>Using the latest technologies to build frontend for websites
            </p>
            <h4 className='py-4 text-teal-600 '>Tech Tools I use</h4>
            <ul className=' list-none'>
              <li className=' text-gray-800 py-1'>HTML</li>
              <li className=' text-gray-800 py-1'>CSS/ Tailwind CSS</li>
              <li className=' text-gray-800 py-1'>JavaScript/ ReactJS</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Services
