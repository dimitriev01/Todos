import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Navbar } from './components/Navbar/Navbar'
import { Router } from './components/Router/Router'

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Router />
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
