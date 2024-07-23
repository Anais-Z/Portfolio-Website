import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'

const Navbar = () => {

    const [nav,setNav] = useState(false)

    const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-slate-900 text-white'>
        <div>
            <p style={{width: '90px'}}>Anais</p>
        </div>

        {/* main menu */}
        
            <ul className='hidden md:flex'>
                <li>Home</li>
                <li>About</li>
                <li>Experience</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
        

        {/* hamburger */}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars/> : <FaTimes/>}
         </div>

         {/* mobile menu */}
         
         <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-slate-800 flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'>Home</li>
                <li className='py-6 text-4xl' >About</li>
                <li className='py-6 text-4xl'>Experience</li>
                <li className='py-6 text-4xl'>Projects</li>
                <li className='py-6 text-4xl'>Contact</li>
            </ul>
           

          {/* social media icons */}
          <div className='hidden'> </div>
      
    </div>
  )
}

export default Navbar
