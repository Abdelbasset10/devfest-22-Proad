import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import NavMobile from '../components/NavMobile'

import emp from '../images/emp.png'
import eurgence from '../images/eurgence.png'
const Add = () => {
  return (
    <div className='flex' >
        <NavMobile />
            <div className='hidden sm:block	 flex-[2]' >
                <Navbar />
            </div>
        <div className='py-8 px-2 sm:px-10 flex-[10]' >
            <h1 className=' text-4xl font-bold mb-10'>Add</h1>
            <div className='flex flex-col gap-8' >
                <div className='py-4 px-10 flex flex-col w-fit md:flex-row gap-4 border-2 shadow-lg'>
                    <div className='flex flex-col gap-2'>
                        <h1>Add a vehicule</h1>
                        <p>Add an ambulance, a fire truck or an aircraft to the serie of vehicules</p>
                        <Link to='/add/car'>
                            <button className='bg-[#9E55FE] text-white w-fit py-2 px-4' >Add</button>
                        </Link>
                    </div>
                    <img src={eurgence} alt="eurgenceImg" className='md:w-[10rem] lg:w-[15rem] h-[12rem]' />
                </div>
                
                <div className='py-4 px-10 flex flex-col w-fit md:flex-row gap-4 border-2 shadow-lg'>
                    <div className='flex flex-col gap-2'>
                        <h1>Add a employer</h1>
                        <p>Add an ambulance, a fire truck or an aircraft to the serie of employers</p>
                        <Link to='/add/employe' >
                        <button className='bg-[#9E55FE] text-white w-fit py-2 px-4' >Add</button>
                        </Link>
                    </div>
                    <img src={emp} alt="empImg" className='md:w-[10rem] lg:w-[15rem] h-[12rem]' />
                </div>
                <div>

                </div>

                

            </div>
        </div>

    </div>
  )
}

export default Add