import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home'
import App1 from './App1'
import App2 from './App2'
import App3 from './App3'
import App4 from './App4'
import App5 from './App5'
import App6 from './App6'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route index path='/' element={<Home />}></Route>
        <Route path='/record-keeping' element={<App1 />}></Route>
        <Route path='/useState-hook' element={<App2 />}></Route>
        <Route path='/temperature-color' element={<App3 />}></Route>
        <Route path='/search-app' element={<App4 />}></Route>
        <Route path='/simple-form' element={<App5 />}></Route>
        <Route path='/simple-quiz' element={<App6 />}></Route>
      </Routes>
    </Router>
  )
}

export default App