import React from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
const Navbar = () => {
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-slate-900 text-white'>
        <div>
            <p style={{width: '90px'}}>Anais</p>
        </div>

        {/* main menu */}
        <div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Experience</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
        </div>

        {/* hamburger */}
        <div> </div>

         {/* mobile menu */}
         <div> </div>

          {/* social media icons */}
          <div> </div>
      
    </div>
  )
}

export default Navbar
