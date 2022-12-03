import React from 'react'


const InfosRight = () => {
  return (
    <div className='pt-4 px-0 lg:pt-10 lg:px-10' >
         <p>search an Ambulance with it matricule</p>
                <form className='flex gap-2 p-4 border-2 shadow-xl rounded-[12px]	w-fit' >
                    <input type="text" className='p-2  outline-none bg-[#D9D9D959] w-[3rem] h-[3rem]' />
                    <input type="text" className=' outline-none w-[3rem] p-2 bg-[#D9D9D959] h-[3rem]' />
                    <input type="text" className='  outline-none w-[3rem] p-2 bg-[#D9D9D959] h-[3rem]' />
                    <input type="text" className=' outline-none w-[3rem] p-2 bg-[#D9D9D959] h-[3rem]' />
                    <input type="text" className=' outline-none w-[3rem] p-2 bg-[#D9D9D959] h-[3rem]' />
        </form>
    </div>
  )
}

export default InfosRight