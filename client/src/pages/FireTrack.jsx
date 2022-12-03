import React from 'react'
import Navbar from '../components/Navbar'
import NavMobile from '../components/NavMobile'
import PersonsWork from '../components/PersonsWork'

const FireTrack = () => {
  return (
<div className='w-screen' >
        <div className='flex' >
          <NavMobile />
            <div className='hidden sm:block	 flex-[2]' >
                <Navbar />
            </div>
            <div className='flex-[10]' >
                <PersonsWork title='Fire-Track' />
            </div>
        </div>

    </div>
  )
}

export default FireTrack