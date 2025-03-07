import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaDev} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { Link } from 'react-scroll';

const Navbar = () => {

    const [nav,setNav] = useState(false)

    const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-black text-white'>
        <div>
            <p>Anais Zulfequar </p>
        </div>

        {/* main menu */}
        
            <ul className='hidden md:flex'>
                <li>
                <Link to='home' smooth={true} duration={500}>
                  Home
                  </Link>
                  </li>
                
                <li>
                  <Link to='experience' smooth={true} duration={500}>
                  Experience
                  </Link>
                  </li>
                <li>
                <Link to='projects' smooth={true} duration={500}>
                  Projects
                  </Link>
                  </li>
            </ul>
        

        {/* hamburger */}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars/> : <FaTimes/>}
         </div>

         {/* mobile menu */}
         
         <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-slate-800 flex flex-col justify-center items-center'}>
                <li  className='py-6 text-4xl'>
                <Link onClick={handleClick} to='home' smooth={true} duration={500}>
                  Home
                  </Link>
                </li>

                <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to='experience' smooth={true} duration={500}>
                  Experience
                  </Link>
                </li>

                <li className='py-6 text-4xl'>
                  <Link onClick={handleClick} to='projects' smooth={true} duration={500}>
                  Projects
                  </Link>
                </li>
            </ul>
           

          {/* social media icons */}
          <div className='hidden lg:flex fixed flex-col top-[35%] left-0'> 
            <ul>
              <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                <a className='flex justify-between items-center w-full text-white' 
                  href='https://www.linkedin.com/in/anais-zulfequar/'>
                    LinkedIn <FaLinkedin size={30}/>
                </a>
              </li>

              <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300  bg-slate-950'>
                <a className='flex justify-between items-center w-full text-white' 
                  href='https://github.com/Anais-Z'>
                    Github <FaGithub size={30}/>
                </a>
              </li>

              <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300  bg-slate-700'>
                <a className='flex justify-between items-center w-full text-white' 
                  href='https://devpost.com/anaiszed447?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav'>
                    Devpost <FaDev size={30}/>
                </a>
              </li>

              
            </ul>
          </div>
      
    </div>
  )
} 

export default Navbar
