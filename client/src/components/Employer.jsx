import React from 'react'


const Employer = ({employer}) => {
  return (
    <div className='flex flex-col gap-4 px-8 py-2 border-2 shadow-xl cursor-pointer' >
      <div key={employer.id} className='flex gap-4 items-center'>
            <img src={employer.img} alt="employerImg" className='w-[6rem] h-[6rem] object-cover rounded-[50%] p-2 bg-[#9747FF]	' />
            <div>
              <p>{employer.title}</p>
              <p>{employer.cartId}</p>
            </div>
          </div>
    </div>
  )
}

export default Employer