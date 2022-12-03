import React from 'react'
import availble from '../constants/availble'

const AvailbleCard = () => {
  return (
    <div className='md:px-10'>
        <div>
            <div className='flex justify-between mb-4' >
                <p>Type</p>
                <p>Location</p>
                <p>Mat</p>
            </div>
            <div className='flex flex-col gap-4' >
            {availble.map((a)=>{
                return(
                    <div key={a.id} className='flex justify-between'  >
                        <p className='font-bold' >{a.type}</p>
                        <p>{a.location}</p>
                        <p>{a.mat}</p>
                    </div>
                )
            })}
            </div>

            <div className='flex justify-center ' >
                <button className='mt-4 px-4 py-2 text-white bg-[#9747FF] rounded-[12px]' >More</button>
            </div>


        </div>
        

    </div>
  )
}

export default AvailbleCard