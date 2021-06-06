import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"

import Theme from "./Theme"

// Components
import Navbar from "./components/Navbar"

//Pages
import Home from "./pages/Home"

function App() {
  return (
    <div className="app">
      <Theme>
        <Router>
          <Navbar />
          <Home />
        </Router>
      </Theme>
    </div>
  )
}

export default App
