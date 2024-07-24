import React from 'react'

const Projects = () => {
  return (
    <div name="projects" className='w-full h-screen bg-white text-black' >
      
      <div className='flex flex-col justify-center items-center'>
        <p>Projects</p>

        <div className='pt-3 grid grid-cols-3 gap-20'>

            <div class="border-4 border-indigo-600 p-10">
                 <p>HerbMate </p>
            </div>

            <div class="border-4 border-indigo-600 p-10">
                 <p> OneShop </p>
            </div>

            <div class="border-4 border-indigo-600 p-10">
                 <p>AMA</p>
            </div>

            <div class="border-4 border-indigo-600 p-10">
                 <p>Access Sheridan Clone</p>
            </div>

            <div class="border-4 border-indigo-600 p-10">
                 <p>Health App</p>
            </div>
            
            <div class="border-4 border-indigo-600 p-10">
                 <p>Portfolio Website</p>
            </div>

            
        </div>
        
      </div>
    </div>
  )
}

export default Projects
