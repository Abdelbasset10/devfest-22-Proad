import React from 'react'
import InfosCenter from '../components/InfosCenter'
import Navbar from '../components/Navbar'
import NavMobile from '../components/NavMobile'

const Home = () => {
  return (
    <div className='w-screen' >
        <div className='flex' >
          <NavMobile />
            <div className='hidden sm:block	 flex-[2]' >
                <Navbar />
            </div>
            <div className='flex-[10]' >
                <InfosCenter />
            </div>
        </div>

    </div>
  )
}

export default Home