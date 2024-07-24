import React from 'react'


const Home = () => {
  return (
    <div name="name" className='w-full h-screen bg-white'>
      
      {/** Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-red-500'>Hello, I am</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-black'>Anais</h1>
        <h2 className='text-blue-700 py-4 max-w-[700px]'>I'm a full stack developer who specialize in building web and mobile apps with an interest 
          AI/ml learning
        </h2>

        <div>
        <button className='text-black border-4 border-black px-6 py-3 my-2 flex items-center hover:bg-black hover:text-white'> Continue</button>
      </div>
        
      </div>

    
    </div>
  )
}

export default Home
