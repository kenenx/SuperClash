import React from 'react'
import { Routes, Route } from 'react-router-dom';
import './App.css'
import { HomePage, ViewAll, Trumps } from './pages'
import { NavBar } from './components'

import Trumps from './pages/Trumps'

function App() {

  return (
    <>
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
