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
                <Contact>
                  <form
                    name="contact"
                    className="form"
                    method="POST"
                    data-netlify="true"
                    onSubmit="submit"
                  >
                    {" "}
                    <input type="hidden" name="form-name" value="contact" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Name"
                      required
                    />
                    <input
                      type="text"
                      id="email"
                      name="email"
                      placeholder="Email"
                      required
                    />
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      placeholder="Subject"
                    />
                    <textarea
                      id="content"
                      name="content"
                      placeholder="Content"
                      required
                    />
                    <SubmitBtn>
                      <button type="submit" className="submit">
                        Send
                      </button>
                      <Button to={"/"} style={{ padding: "0" }}>
                        Return back home
                      </Button>
                    </SubmitBtn>{" "}
                  </form>
                </Contact>
              </Route>
            </Switch>
            <Footer />
          </Router>
        </AnimatePresence>
      </Theme>
    </div>
  )
}

const SubmitBtn = styled.div`
  .submit {
    padding: 1em 2em;
    background: ${(p) => p.theme.colors.accBlue};
    color: #fff;
    outline: 0;
    border: none;
    border-radius: 0.5em;
    cursor: pointer;
    transition: 300ms;
    font-weight: 700;
    font-size: 1.125em;
    text-transform: uppercase;
    font-family: "Poppins", sans-serif;

    &:hover,
    &:focus {
      box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.051),
        0 6.7px 5.3px rgba(0, 0, 0, 0.073), 0 12.5px 10px rgba(0, 0, 0, 0.09),
        0 22.3px 17.9px rgba(0, 0, 0, 0.107),
        0 41.8px 33.4px rgba(0, 0, 0, 0.129),
        0 100px 80px rgba(0, 163, 228, 0.2);
      background: #008ac0;
    }
  }
`

export default App
