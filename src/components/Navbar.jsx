import React from 'react'



const Navbar = () => {
  
  return (
    <section className='navbar'>
      <nav className='  container py-10 lg:py-[10px] px-10 md:px-20 lg:px-40 mb-12 lg:mb-0 mx-auto flex justify-between '>
        <h1 className=' text-xl font-burtons'>Kamal Al-Zumair</h1>
        <ul className=' flex items-center'>
          <li><button className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 lg:py-1 rounded-md ml-8' href="#/">Resume</button></li>
        </ul>
      </nav>
    </section>
  )
}

export default Navbar
