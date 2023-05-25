import React from 'react'
import { Routes, Route } from 'react-router-dom';
import './App.css'
import { HomePage, ViewAll, Trumps } from './pages'
import { NavBar } from './components'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<NavBar/>}>
          <Route index element={<HomePage />} />

          <Route path="/superheros" element={<ViewAll />} />
          <Route path="/play" element={<Trumps />} />
          
        </Route>
      </Routes>
      <h1>Superhero Clash</h1>
    </>
  )
}

export default App
