import React from 'react'
import Home from './pages/Home'

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Ambulance from './pages/Ambulance'
import FireTrack from './pages/FireTrack'
import AirCraft from './pages/AirCraft'
import Employers from './pages/Employers'
import Add from './pages/Add'
import AddCar from './pages/AddCar'
import AddEmploye from './pages/AddEmploye'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/ambulance' element={<Ambulance />} />
          <Route path='/fire-track' element={ <FireTrack />}/>
          <Route path='/air-craft' element={ <AirCraft />}/>
          <Route path='/employers' element={ <Employers />}/>
          <Route path='/add' element={ <Add />}/>
          <Route path='/add/car' element={ <AddCar />}/>
          <Route path='/add/employe' element={ <AddEmploye />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
