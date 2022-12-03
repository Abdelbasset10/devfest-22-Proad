import React, {useState} from 'react'
import home from '../images/home.png'
import plus1 from '../images/plus1.png'

import bar from '../images/bar.png'

import { Link } from 'react-router-dom'

import navLinks from '../constants/navLink'

const NavMobile = () => {
    const [isNav,setIsNav] = useState(false)
  return (
    <div className='block sm:hidden absolute top-2 right-4 z-10' >
        <img src={bar} alt="navPhoto" onClick={()=>setIsNav(!isNav)} className='w-[4rem]' />
        {isNav && (
            
            <ul className='absolute top-14 right-4 bg-[#9747FF] py-2 px-4 w-[200px] rounded-[12px]' >
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
            <Link to='/add' >
            <div className=' flex items-center gap-2 justify-center  py-2 w-full bg-white rounded-[12px]' >
                <img src={plus1} alt="plusImg"/>
                <p className='text-gray font-bold' >Add </p>
            </div>
            </Link>
        </ul>
        )}
        

    </div>
  )
}

export default NavMobile