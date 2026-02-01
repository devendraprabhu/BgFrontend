import React from 'react'
import Nav from './components/Nav.jsx'
import Bodytext from './components/Bodytext.jsx'
import Para from './components/Para.jsx'
import Backend from './Backend.jsx'
import Footer from './components/Footer.jsx'
import RippleGrid from './components/RippleGrid.jsx'
import { Routes, Route } from 'react-router-dom'
import Privacy from './pages/Privacy.jsx'
import Terms from './pages/Terms.jsx'
const App = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Nav />
      <div className='flex-grow'>
      <Routes>
        <Route path='/' element={
          <div className='relative overflow-hidden'>
            <div className='absolute inset-0 -z-10'>
                <RippleGrid />
            </div>
            <Bodytext />
            <Para />
          </div>
        } />
        <Route path='/upload' element={<Backend />} />
        <Route path='/privacy' element={<Privacy />} />
        <Route path='/terms' element={<Terms />} />
      </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App