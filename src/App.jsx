import React from 'react'
import { Routes, Route } from 'react-router-dom';
import './App.css'

import Trumps from './pages/Trumps'

function App() {

  return (
    <>
      <h1>Superhero Clash</h1>

      <Trumps />

      {/* <Routes>
        <Route path="/">
          <Route index element={<Homepage />} />
          <Route path="/all" element={<ViewAll />} />
          <Route path="/play" element={<Trumps />} />
        </Route>
      </Routes> */}

    </>
  )
}

export default App
