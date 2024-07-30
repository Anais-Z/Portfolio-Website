import React from 'react'


const Experience = () => {
  return (
    <div name='about' className='w-full h-auto bg-white text-black py-16'>
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col h-full space-y-16'>


        <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-black"> Experience </h2>
        </div>
        <div >
            <p className="text-lg font-bold text-blue-700">
                Full Stack Developer - Sheridan College (S-Sense Platform)</p>
            <p className='font-bold'>January 2023 - August 2023</p>

            <div className='flex flex-row gap-2 text-white mt-2'>
                <p className='border-4 border-black bg-black rounded-md text-sm text-center px-2'>C#</p>
                <p className='border-4 border-black bg-black rounded-md text-sm text-center px-2'>ASP.NET</p>
                <p className='border-4 border-black bg-black rounded-md text-sm text-center px-2'>Xamarin</p>
                <p className='border-4 border-black bg-black rounded-md text-sm text-center px-2'>MongoDB</p>
            </div>

            
            <ul class="list-disc ml-5 mt-6 space-y-4 font-bold">
                <li> Developed and deployed a robust Web API using the .NET framework, seamlessly integrated with MongoDB to optimize data management and enhance system efficiency </li>               
                <li> Refactored and debugged critical issues within app functionalities, ensuring proper user experience and app features working as designed</li>
                <li> Implemented dynamic font sizing, voice control, and haptic feedback functionalities, enhancing the app's accessibility </li>
                <li> Participated in testing and implementing feedback based on bug fixes and feature updates</li>
            </ul>

            
            
        </div>

        <div>
            <p class="text-lg font-bold text-blue-700">Web Developer - Oakville Film Festival</p>
            <p className='font-bold'>May 2022 - August 2022</p>

            <div className='flex flex-row gap-2 text-white mt-2'>
                <p className='border-4 border-black bg-black rounded-md text-sm text-center px-2'>HTML</p>
                <p className='border-4 border-black bg-black rounded-md text-sm text-center px-2'>CSS</p>
                <p className='border-4 border-black bg-black rounded-md text-sm text-center px-2'>JavaScript</p>
            </div>

            <ul class="list-disc ml-5 mt-6 space-y-4  font-bold">
                <li> Collaborated with a team to create a web application prototype using FIGMA, ensuring alignment with project objectives and user needs</li>
                <li> Crafted a service path for the film festival customers, incorporating user feedback to enhance the customer experience</li>
                
            </ul>
        </div>

        </div>
      
    </div>
  )
}

export default Experience
