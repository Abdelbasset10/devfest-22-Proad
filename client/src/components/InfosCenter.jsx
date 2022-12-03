import React, {useEffect, useState} from 'react'
import { getAllAirCrafts, getAllAmbilance, getAllDrivers, getAllFireTracks } from '../api'
import fireTruck from '../images/FireTruck.png'
import amb from '../images/Ambulance(1).png'
import fireFighter from '../images/Firefighter (1).png'
import siren from '../images/Siren.png'
import infos from '../constants/Infos'
import AvailbleCard from './AvailbleCard'
import CardMap from './CardMap'


import InfosRight from './InfosRight'

const Infos = () => {
    const[ambilance,setAmbilance] = useState([])
    const[fireTrack,setFireTrack] = useState([])
    const[airCraft,setAirCraft] = useState([])
    const[drivers,setDrivers] = useState([])


    useEffect(()=>{
        const getVehicules = async () => {
            try {
                const {data} = await getAllAmbilance()
                setAmbilance(data.data)
            } catch (error) {
                console.log(error)
            }
        }
        const getFireTracks = async () => {
            try {
                const {data} = await getAllFireTracks()
                setFireTrack(data.data)
            } catch (error) {
                console.log(error)
            }
        }
        const getAirCrafts = async () => {
            try {
                const {data} = await getAllAirCrafts()
                setAirCraft(data.data)
            } catch (error) {
                console.log(error)
            }
        }
        const getDrivers = async () => {
            try {
                const {data} = await getAllDrivers()
                console.log(data);
                setDrivers(data.data)
            } catch (error) {
                console.log(error)
            }
        }
        getVehicules()
        getFireTracks()
        getAirCrafts()
        getDrivers()
    },[])
    
  return (
    <div className='pt-10 px-2 xl:px-10 flex flex-col items-start lg:items-center gap-4' >
        <div className='flex flex-col-reverse  items-start justify-start lg:flex-row	gap-4 lg:items-end ' >
            <div className='flex justify-start flex-wrap gap-4 flex-[1]'>
            <div key={ambilance.id} className='flex items-center cursor-pointer gap-4 py-2 px-4 w-[150px] lg:w-[180px] xl:w-[200px] rounded-[12px] bg-white rounder-[12px] shadow-lg		border-2' >
                <img src={amb} alt="ambilanceImage" className='w-[2rem] h-[2rem]' />
                <div className='text-[#363636BF]' >
                    <p className='font-bold ' >ambilance</p>
                    <p className='text-[#9747FF]'>{ambilance.length}</p>
                </div> 
            </div>
            <div key={fireTrack.id} className='flex items-center cursor-pointer gap-4 py-2 px-4 w-[150px] lg:w-[180px] xl:w-[200px] rounded-[12px] bg-white rounder-[12px] shadow-lg		border-2' >
                <img src={fireTruck} alt="fireTrackImage" className='w-[2rem] h-[2rem]' />
                <div className='text-[#363636BF]' >
                    <p className='font-bold ' >fireTrack</p>
                    <p className='text-[#9747FF]'>{fireTrack.length}</p>
                </div> 
            </div>
            <div key={drivers.id} className='flex items-center cursor-pointer gap-4 py-2 px-4 w-[150px] lg:w-[180px] xl:w-[200px] rounded-[12px] bg-white rounder-[12px] shadow-lg		border-2' >
                <img src={fireFighter} alt="driversImage" className='w-[2rem] h-[2rem]' />
                <div className='text-[#363636BF]' >
                    <p className='font-bold '>drivers</p>
                    <p className='text-[#9747FF]'>{drivers.length}</p>
                </div> 
            </div>
            <div key={airCraft.id} className='flex items-center cursor-pointer gap-4 py-2 px-4 w-[150px] lg:w-[180px] xl:w-[200px] rounded-[12px] bg-white rounder-[12px] shadow-lg		border-2' >
                <img src={amb} alt="airCraftImage" className='w-[2rem] h-[2rem]' />
                <div className='text-[#363636BF]' >
                    <p className='font-bold '>airCraft</p>
                    <p className='text-[#9747FF]'>{airCraft.length}</p>
                </div> 
            </div>
            </div>
            <div className='flex-[1]' >
                <InfosRight />
            </div>
        </div>

        <div className='flex flex-col gap-4 md:gap-0 md:flex-row justify-between w-full px-2' >
            <div className='flex-[1]' >
                <CardMap />
            </div>
            <div className='flex-[1]' >
                <AvailbleCard />
            </div>
        </div>
    </div>
  )
}

export default Infos