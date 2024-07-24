import React from 'react'


const Experience = () => {
  return (
    <div name='about' className='w-full h-screen bg-white text-black'>
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col h-full space-y-16'>


        <div>
            <h2 class="text-2xl sm:text-3xl font-bold text-black"> Experience </h2>

        </div>
        <div >
            <p class="text-lg font-bold text-black">
                Full Stack Developer - Sheridan College (S-Sense Platform)</p>
            <p>January 2023 - August 2023</p>

            
            <ul class="list-disc ml-5 mt-6 space-y-4">
                <li> Developed a REST API using the .NET framework with MongoDB to optimize data management to enhance system efficiency </li>               
                <li> Reported and assisted with the development of new and existing features</li>
                <li> Followed internal processes and procedures for versioning and documentation of code</li>
                <li> Participated in testing and implementing feedback based on bug fixes and feature updates</li>
            </ul>
            
        </div>

        <div>
            <p class="text-lg font-bold text-black">Web Developer - Oakville Film Festival</p>
            <p>May 2022 - August 2022</p>

            <ul class="list-disc ml-5 mt-6 space-y-4">
                <li> Collaborated with a team to create a web application prototype using FIGMA, ensuring alignment with project objectives and user needs</li>
                <li> Crafted a service path for the film festival customers, incorporating user feedback to enhance the customer experience</li>
                
            </ul>
        </div>

        </div>
      
    </div>
  )
}

export default Experience
