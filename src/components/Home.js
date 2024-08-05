import React from 'react'
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name="home" className='w-full h-screen bg-white'>
      
      {/** Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-black'>Hello, I am</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-black'>Anais Zulfequar</h1>
        <h2 className='text-blue-700 font-bold py-4 max-w-[700px]'>I'm a full stack developer with an interest in
          AI/Machine learning. I have experience developing many web and mobile apps and with several languages and frameworks.
          I always take the time to learn new skills and expand my knowledge. 
        </h2>

        <div>
        <button className='text-black border-4 border-black px-6 py-3 my-2 flex items-center hover:bg-black hover:text-white'> 
        <Link to='experience' smooth={true} duration={500}>
                  Continue
                  </Link>
          </button>
      </div>
        
      </div>

    
    </div>
  )
}

export default Home
