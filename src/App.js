import React, { useState } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import Theme from "./Theme"

import { AnimatePresence } from "framer-motion"

// Components
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import Footer from "./components/Footer"

//Pages
import Home from "./pages/Home"
import Portfolio from "./pages/Portfolio"
import PortfolioDetails from "./pages/ProjectDetails"
import AboutPage from "./pages/AboutPage"
import Contact from "./pages/Contact"
import styled from "styled-components"
import Button from "./components/Button"

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div className="app">
      <Theme>
        <AnimatePresence exitBeforeEnter>
          <Router>
            <Sidebar toggle={toggle} isOpen={isOpen} />
            <Navbar toggle={toggle} isOpen={isOpen} />
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/portfolio" exact>
                <Portfolio />
              </Route>
              <Route path="/portfolio/:id">
                <PortfolioDetails />
              </Route>
              <Route path="/about">
                <AboutPage />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
            </Switch>
            <Footer />
          </Router>
        </AnimatePresence>
      </Theme>
    </div>
  )
}

export default App
