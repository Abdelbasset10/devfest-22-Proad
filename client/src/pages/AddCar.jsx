import React from 'react'
import Navbar from '../components/Navbar'
import NavMobile from '../components/NavMobile'
import emp from '../images/emp.png'

const AddCar = () => {
  return (
    <div className='w-screen' >
        <div className='flex' >
          <NavMobile />
            <div className='hidden sm:block	 flex-[2]' >
                <Navbar />
            </div>
            <div className='py-8 px-2 sm:px-10 flex-[10]'>
                <h2 className=' text-4xl font-bold mb-10'>Add Car</h2>
                <div className='flex flex-col-reverse lg:flex-row lg:justify-between items-center'>
                    <div className='w-full' >
                        <form className='flex flex-col gap-4' >
                            <div className='flex flex-col gap-2' >
                                <label>car name</label>
                                <input type="text" className='w-full border-2 shadow-lg outline-none h-[40px]' />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label>matricule</label>
                                <input type="text"  className='w-full border-2 shadow-lg outline-none h-[40px]' />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label className='w-fit' >category</label>
                                <select  className='w-full border-2 shadow-lg outline-none text-black'>
                                    <option value="ambulance">ambulance</option>
                                    <option value="fireTrack">fireTrack</option>
                                    <option value="airTrack">airTrack</option>
                                </select>
                            </div>
                             <button className='bg-[#9E55FE] text-white w-full py-2 px-4 justify-self-end self-end'>Add</button>
                        </form>

                    </div>
                    <div className='hidden lg:block' >
                        <img src={emp} alt="ambilanceImg" className='w-full' />

                    </div>

                </div>
            </div>
        </div>

    </div>
  )
}

export default AddCar