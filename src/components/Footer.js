import React from "react"
import styled from "styled-components"

import Button from "./Button"
import Socials from "./Socials"

import logo from "../Assets/images/carbondesigned_logo01_transparent_black.svg"

const Footer = () => {
  return (
    <StyledFooter>
      <div className="socials">
        <Socials />
      </div>
      <div className="pages">
        <Button to="/">Home</Button>
        <Button to="/portfolio">Portfolio</Button>
        <Button to="/about">About</Button>
        <Button to="/contact">Contact</Button>
      </div>
      <div className="author">
        <p>
          designed <span>creatively</span> by Dylan Reed
        </p>
        <img className="logo" src={logo} alt="" />
      </div>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2em;
  text-align: center;

  .pages {
    display: flex;
  }

  .author {
    span {
      color: ${(p) => p.theme.colors.accBlue};
    }

    .logo {
      padding: 1em 0;
      max-width: 50%;
    }
  }
`

export default Footer
