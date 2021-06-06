import React, { useState } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"

import Theme from "./Theme"

// Components
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"

//Pages
import Home from "./pages/Home"

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div className="app">
      <Theme>
        <Router>
          <Sidebar toggle={toggle} isOpen={isOpen} />
          <Navbar toggle={toggle} isOpen={isOpen} />
          <Home />
        </Router>
      </Theme>
    </div>
  )
}

export default App
