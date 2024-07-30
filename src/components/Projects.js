import React from 'react'
import herbMateImage from '../assets/HerbMate_img.png'
import accessSheridan from '../assets/access_sheridan_img.png'
import oneShop from '../assets/oneshopimg.png'


const Projects = () => {

  const url="https://google.com"


  return (
    <div name="projects" className='w-full h-auto bg-white text-black py-16'>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col h-full space-y-10 pt-16 sm:pt-32'>
        <div className='mt-16 sm:mt-32'>
          <h2 className="text-2xl sm:text-3xl font-bold text-black">Projects</h2>
        </div>

        <div className='flex flex-col gap-10'>
  {/* Project 1 */}
  <div className='flex flex-row gap-10 items-center'>
    <img src={herbMateImage} className='w-40 h-40 hidden md:block' />

    <div className='flex flex-col gap-4'>
      <div className='text-xl font-bold'>Herb Mate</div>

      <div className='flex flex-row gap-4'>
        <p className='border-4 border-blue-500 bg-blue-500 rounded-md text-sm text-white text-center px-2'>
          <a href="https://github.com/MobinAkhter/herballife" target="_blank" rel="noopener noreferrer">GitHub</a>
          </p>
      </div>

      <div>
        <p className='font-bold'>
          A mobile app for finding natural remedies. It offers navigation through various systems, a search function, an A-Z herb directory, personal notes, bookmarks, and social sharing. The app uses machine learning to recommend herbs based on user responses and includes a text-to-speech option for accessibility. It also supports user engagement through in-app donations.
        </p>
      </div>

      <div className='flex flex-row gap-2 text-white'>
        <p className='border-4 border-purple-600 bg-purple-600 rounded-md text-sm text-center px-2'>React Native</p>
        <p className='border-4 border-purple-600 bg-purple-600 rounded-md text-sm text-center px-2'>Flask</p>
        <p className='border-4 border-purple-600 bg-purple-600 rounded-md text-sm text-center px-2'>Firebase</p>
        <p className='border-4 border-purple-600 bg-purple-600 rounded-md text-sm text-center px-2'>AWS</p>
      </div>
    </div>
  </div>

  {/* Project 2 */}
  <div className='flex flex-row gap-10 items-center'>
    <img src={oneShop} className='w-40 h-40 hidden md:block'/>

    <div className='flex flex-col gap-4'>
      <div className='text-xl font-bold'>One Shop</div>

      <div className='flex flex-row gap-4'>
        <p className='border-4 border-blue-500 bg-blue-500 rounded-md text-sm text-white text-center px-2'>
        <a href="https://github.com/MobinAkhter/OneShop" target="_blank" rel="noopener noreferrer">GitHub</a>
        </p>
        
      </div>

      <div>
        <p className='font-bold'>
          An e-commerce app enabling users to sign up, log in, select products, add items to a cart, and view store locations. Features include Firebase-based authentication, session management, and persistent cart storage. Users can view products, use geocoding, access a map view, and log out.
        </p>
      </div>

      <div className='flex flex-row gap-2 text-white'>
        <p className='border-4 border-purple-600 bg-purple-600 rounded-md text-sm text-center px-2'>SwiftUI</p>
        <p className='border-4 border-purple-600 bg-purple-600 rounded-md text-sm text-center px-2'>WatchOS</p>
        <p className='border-4 border-purple-600 bg-purple-600 rounded-md text-sm text-center px-2'>Core Location</p>
        <p className='border-4 border-purple-600 bg-purple-600 rounded-md text-sm text-center px-2'>Firebase</p>
      </div>
    </div>
  </div>

  {/* Project 3 */}
  <div className='flex flex-row gap-10 items-center'>
    <img src={accessSheridan} className='w-40 h-40 hidden md:block' />

    <div className='flex flex-col gap-4'>
      <div className='text-xl font-bold'>Access Sheridan 2.0</div>

      <div className='flex flex-row gap-4'>
         <p className='border-4 border-blue-500 bg-blue-500 rounded-md text-sm text-white text-center px-2'>
         <a href="https://github.com/MobinAkhter/Access-Sheridan-2.0" target="_blank" rel="noopener noreferrer">GitHub</a>
         </p>
      </div>

      <div>
        <p className='font-bold'>
          A comprehensive app providing access to Sheridan's resources and services. Features include user authentication, resource management, and interactive tools for students and staff.
        </p>
      </div>

      <div className='flex flex-row gap-2 text-white'>
        <p className='border-4 border-purple-600 bg-purple-600 rounded-md text-sm text-center px-2'>C#</p>
        <p className='border-4 border-purple-600 bg-purple-600 rounded-md text-sm text-center px-2'>DOT.NET</p>
        <p className='border-4 border-purple-600 bg-purple-600 rounded-md text-sm text-center px-2'>HTML</p>
        <p className='border-4 border-purple-600 bg-purple-600 rounded-md text-sm text-center px-2'>SCSS</p>
        <p className='border-4 border-purple-600 bg-purple-600 rounded-md text-sm text-center px-2'>JavaScript</p>
        
      </div>
    </div>
  </div>
</div>
      </div>
    </div>
  )
}

export default Projects
