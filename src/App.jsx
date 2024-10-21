import { useState } from 'react'

// import './App.css'
import { Route,Routes } from 'react-router-dom'
import Homepage from './Pages/Homepage'
import Userdetails from './Pages/Userdetails'
import Userslist from './Pages/Userslist'

function App() {
  return (
    <>
    <Routes>
         <Route path='/' element={<Homepage />} />
         <Route path='/search/:user' element={<Userslist/>}/>
         <Route path='/users/:userName' element={<Userdetails/>} />

    </Routes>
      
    </>
  )
}

export default App
