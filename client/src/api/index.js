import axios from 'axios'

const API = axios.create({baseURL:'http://localhost:8000'})

export const getAllAmbilance = () => API.get('/api/ambulance')
export const getAllFireTracks = () => API.get('/api/firetruck')
export const getAllAirCrafts = () => API.get('/api/aircraft')
export const getAllDrivers = () => API.get('/api/drivers/all')

export const getAvailbleDrivers = () => API.get('/api/availableVehicule')
export const getMissionDrivers = () => API.get('/api/missionVehicule')
export const getOutDrivers = () => API.get('/api/outVehicule')



