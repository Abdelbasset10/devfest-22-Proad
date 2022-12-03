import React, {useEffect, useState} from 'react'
import { getAvailbleDrivers, getMissionDrivers, getOutDrivers } from '../api'

import personn from '../images/person.png'

import infoImg from '../images/info.png'
import CardMap from './CardMap'

const PersonsWork = ({title}) => {
    const [availble,setAvailble] = useState([])
    const [mission,setMission] = useState([])
    const [out,setOut] = useState([])

    useEffect(()=>{
        const availbleVehicule = async () => {
            try {
                const {data} = await getAvailbleDrivers()
                setAvailble(data.data)
            } catch (error) {
                console.log(error);
            }
        }
        const missionVehicule = async () => {
            try {
                const {data} = await getMissionDrivers()
                setMission(data.data)
            } catch (error) {
                console.log(error);
            }
        }
        const outVehicule = async () => {
            try {
                const {data} = await getOutDrivers()
                setOut(data.data)
            } catch (error) {
                console.log(error);
            }
        }
        availbleVehicule()
        missionVehicule()
        outVehicule()
        
        
    },[])

  return (
    <div className='px-2 sm:px-10 py-8' >
        <div className='flex lg:flex-row flex-col-reverse gap-4 ' >
            <div className='lg:w-[55%]' >
            <h1 className='font-bold text-5xl mb-8' >{title}</h1>
            <div className='flex flex-col gap-4' >
                {availble.map((person)=> {
                    return(
                        <div key={person.id} className='flex justify-between' >
                            <p className={`w-[90px] text-center rounded-[12px] py-2 px-4 
                            ${person.state === 'available'&& 'bg-[#3399035C] text-[#339903]'}
                            ${person.state === 'mission'&& 'bg-[#000AFF42] text-[#000AFF80]'}
                            ${person.state === 'out'&& 'bg-[#FF000024] text-[#FF000080]'}
                            `}>
                            {person.state==='available'&&'availble'}
                            {person.state==='mission'&&'mission'}
                            {person.state==='out'&&'out'}</p>
                            <img src={personn} alt="userImg" className='rounded-[50%]' />
                            <p className='w-[100px]'>{person.matricule}</p>
                            <img src={infoImg} alt="infoImg" className='w-[1.5rem] h-[1.5rem] cursor-pointer' />
                        </div>
                    )
                })}
            </div>

            <div className='flex flex-col gap-4 my-4' >
                {mission.map((person)=> {
                    return(
                        <div key={person.id} className='flex justify-between' >
                            <p className={`w-[90px] text-center rounded-[12px] py-2 px-4 
                            ${person.state === 'available'&& 'bg-[#3399035C] text-[#339903]'}
                            ${person.state === 'mission'&& 'bg-[#000AFF42] text-[#000AFF80]'}
                            ${person.state === 'out'&& 'bg-[#FF000024] text-[#FF000080]'}
                            `}>
                            {person.state==='available'&&'availble'}
                            {person.state==='mission'&&'mission'}
                            {person.state==='out'&&'out'}</p>
                            <img src={personn} alt="userImg" className='rounded-[50%]' />
                            <p className='w-[100px]'>{person.matricule}</p>
                            <img src={infoImg} alt="infoImg" className='w-[1.5rem] h-[1.5rem] cursor-pointer' />
                        </div>
                    )
                })}
            </div>

            <div className='flex flex-col gap-4' >
                {out.map((person)=> {
                    return(
                        <div key={person.id} className='flex justify-between' >
                            <p className={`w-[90px] text-center rounded-[12px] py-2 px-4 
                            ${person.state === 'available'&& 'bg-[#3399035C] text-[#339903]'}
                            ${person.state === 'mission'&& 'bg-[#000AFF42] text-[#000AFF80]'}
                            ${person.state === 'out'&& 'bg-[#FF000024] text-[#FF000080]'}
                            `}>
                            {person.state==='available'&&'availble'}
                            {person.state==='mission'&&'mission'}
                            {person.state==='out'&&'out'}</p>
                            
                            <img src={personn} alt="userImg" className='rounded-[50%] ' />
                            
                            <p className='w-[100px]' >{person.matricule}</p>
                            <img src={infoImg} alt="infoImg" className='w-[1.5rem] h-[1.5rem] cursor-pointer' />
                        </div>
                    )
                })}
            </div>


            </div>
            <div className='lg:w-[45%] mt-10   px-0 lg:px-10 ' >
                <CardMap />
            </div>
        </div>
    </div>
  )
}

export default PersonsWork