import React from 'react'
import navLinks from '../constants/navLink'
import {Link} from 'react-router-dom'

import plus1 from '../images/plus.png'

const Navbar = () => {
  return (
    <div className='bg-[#9747FF] sticky h-screen top-0 rounded-r-[24px] relative' >
        <div className='pt-10 px-10 flex flex-col gap-4' >
            {navLinks.map((navLink)=>{
                return(
                    <Link to={`/${navLink.link}`} key={navLink.id} >
                    <div  className='flex gap-4 items-center py-2 px-4 cursor-pointer' >
                        <img src={navLink.img} alt="navPhoto" />
                        <p className=' text-[#F8F8F8] font-bold' >{navLink.title}</p>
                    </div>
                    </Link>
                )
            })}
            <Link to='/add'>
            <div className='absolute left-4 bottom-10 flex items-center gap-2 justify-center w-[80%] py-2 w-full bg-white rounded-[12px]' >
                <img src={plus1} alt="plusImg"/>
                <p className='text-gray font-bold' >Add </p>
            </div>
            </Link>

        </div>
    </div>
  )
}

export default Navbar