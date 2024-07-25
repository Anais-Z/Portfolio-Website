import React from 'react'
import herbMateImage from '../assets/HerbMate_img.png'

const Projects = () => {
  return (
    <div name="projects" className='w-full h-screen bg-white text-black'>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col h-full space-y-8'>
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-black">Projects</h2>
        </div>

      {/** Project 1 */}

        <div className='flex flex-row gap-10'>
          <img src={herbMateImage} className='w-60 h-30'/>


          
          <div className='flex flex-col gap-4'>
               <div>Herb Mate</div>

               <div className='flex flex-row gap-10'>
                    <div>Github</div>
                    <div>Youtube</div>
               </div>

               <div>
                    <p>Description</p>
               </div>

               <div className='flex flex-row gap-2'>
                    <p> React Native</p>
                    <p> Flask</p>
                    <p> Firebase</p>
                    <p> AWS</p>
                   
               </div>
               
               
          </div>

          
       </div>

       {/** Project 2 */}
       <div className='flex flex-row gap-10'>
          <img src={herbMateImage} className='w-60 h-30'/>


          
          <div className='flex flex-col gap-4'>
               <div>Herb Mate</div>

               <div className='flex flex-row gap-10'>
                    <div>Github</div>
                    <div>Youtube</div>
               </div>

               <div>
                    <p>Description</p>
               </div>

               <div className='flex flex-row gap-2'>
                    <p> React Native</p>
                    <p> Flask</p>
                    <p> Firebase</p>
                    <p> AWS</p>
                   
               </div>
               
               
          </div>

          
       </div>

       {/** Project 3 */}
       <div className='flex flex-row gap-10'>
          <img src={herbMateImage} className='w-60 h-30'/>


          
          <div className='flex flex-col gap-4'>
               <div>Herb Mate</div>

               <div className='flex flex-row gap-10'>
                    <div>Github</div>
                    <div>Youtube</div>
               </div>

               <div>
                    <p>Description</p>
               </div>

               <div className='flex flex-row gap-2'>
                    <p> React Native</p>
                    <p> Flask</p>
                    <p> Firebase</p>
                    <p> AWS</p>
                   
               </div>
               
               
          </div>

          
       </div>

      {/** Project 4 */}
       <div className='flex flex-row gap-10'>
          <img src={herbMateImage} className='w-60 h-30'/>


          
          <div className='flex flex-col gap-4'>
               <div>Herb Mate</div>

               <div className='flex flex-row gap-10'>
                    <div>Github</div>
                    <div>Youtube</div>
               </div>

               <div>
                    <p>Description</p>
               </div>

               <div className='flex flex-row gap-2'>
                    <p> React Native</p>
                    <p> Flask</p>
                    <p> Firebase</p>
                    <p> AWS</p>
                   
               </div>
               
               
          </div>

          
       </div>

      </div>
    </div>
  )
}

export default Projects
