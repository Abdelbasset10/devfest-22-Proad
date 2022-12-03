import React from 'react'

import map from '../images/map.png'
import green from '../images/green.png'
import red from '../images/red.png'

const CardMap = () => {
  return (
    <div>
                <img src={map} alt="mapPhoto" className='w-full h-[15rem] object-cover	' />
                <div className='flex justify-between px-2 xl:px-4 pt-8 pb-4 shadow-lg rounded-[12px] -mt-4	border-2' >
                    <div className='flex items-center gap-4' >
                        <img src={green} alt="greenPhoto"/>
                        <p>in Job</p>
                    </div> 
                    <div className='flex  items-center gap-4'>
                        <img src={red} alt="greenPhoto"/>
                        <p>out of Job</p>
                    </div>
                </div>
            </div>
  )
}

export default CardMap