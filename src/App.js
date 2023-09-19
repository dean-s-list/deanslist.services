import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import HowToJoin from './pages/HowToJoin'
import HowToPartner from './pages/HowToPartner'
import HowToHire from './pages/HowToHire'
import TopNav from './components/TopNav'
import './App.css'
import Footer from './components/Footer'

function App() {
  return (
    // <Router>
    <div className="App">
      <TopNav />
      <div style={{ paddingTop: '70px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/join-us" element={<HowToJoin />} />
          <Route path="/partner-with-us" element={<HowToPartner />} />
          <Route path="/hire-us" element={<HowToHire />} />
        </Routes>
        <Footer />
      </div>
    </div>
    // </Router>
  )
}

export default App
