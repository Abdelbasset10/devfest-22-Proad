import React from 'react'
import Employer from '../components/Employer'
import Navbar from '../components/Navbar'
import NavMobile from '../components/NavMobile'
import employers from '../constants/Employers'

import search from '../images/search.png'

const Employers = () => {
  return (
    <div >
        <div className='flex' >
        <NavMobile />
            <div className='hidden sm:block	 flex-[2]' >
                <Navbar />
            </div>
            <div className='flex flex-col gap-4 w-full py-10 px-4 sm:p-10 md:p-20' >
                <div className='flex  flex-col sm:flex-row gap-4 sm:items-center sm:justify-between w-full ' >
                    <h1 className='font-bold text-4xl' >Empoyers</h1>
                    <form className='relative sm:w-[80%] w-[100%] md:w-[40%]'>
                        <input type="text" placeholder='Search' className='border-2 p-2 outline-none w-full' />
                        <img src={search} alt="searchIcon" className='absolute top-2 right-2 cursor-pointer' />
                    </form>
                </div>
                <div className='flex flex-col  gap-4  md:w-[70%] sm:w-[100%] m-auto' >
                {employers.map((employer)=>{
                    return (
                        <div className='w-full' key={employer.id} >
                            <Employer employer={employer} />
                        </div>
                    
                )
                })}
                </div>
            </div>
        </div>

    </div>
  )
}

export default Employers