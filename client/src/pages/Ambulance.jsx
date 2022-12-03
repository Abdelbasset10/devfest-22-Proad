import React from 'react'
import Navbar from '../components/Navbar'
import NavMobile from '../components/NavMobile'
import PersonsWork from '../components/PersonsWork'

const Ambulance = () => {
  return (
    <div className='w-screen' >
        <div className='flex' >
          <NavMobile />
            <div className='hidden sm:block	 flex-[2]' >
                <Navbar />
            </div>
            <div className='flex-[10]' >
                <PersonsWork title='Ambulance' />
            </div>
        </div>

    </div>
  )
}

export default Ambulance