import React from "react"
import styled, { keyframes } from "styled-components"
import { Link } from "react-router-dom"
import Socials from "../Socials"

const index = ({ toggle, isOpen }) => {
  return (
    <StyledNav>
      <StyledLogo className="logo">Dylan Reed</StyledLogo>
      <StyledLinks>
        <Socials />
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/portfolio">Portfolio</StyledLink>
        <StyledLink to="/about">About</StyledLink>
        <StyledLink to="/contact">Contact</StyledLink>
      </StyledLinks>
      <StyledHamburger isOpen={isOpen} onClick={toggle} className="hamburger">
        <div isOpen={isOpen} className="line line1"></div>
        <div isOpen={isOpen} className="line line2"></div>
        <div isOpen={isOpen} className="line line3"></div>
      </StyledHamburger>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2em 2em;
  font-size: 0.9em;
`
const Anim = keyframes`
  0% {
    transform: translateX(-10px);
  }
  20% {
    transform: translateX(-8px) scaleX(1.5);
  }
  60% {
    transform: translateX(-2px) ;
    
  }
  80% {
    transform: translateX(-5px) scaleX(0.95);
    
  }
  100% {
    transform: translateX(-10px) scaleX(1);
  }
`

const StyledLogo = styled.div`
  font-weight: 800;
  font-size: 1.625em;
`

const StyledHamburger = styled.div`
  width: 1.75em;
  height: 1.25em;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  cursor: pointer;
  z-index: 10;

  @media only screen and (min-width: 768px) {
    display: none;
  }

  .line {
    width: 100%;
    height: 4px;
    background-color: ${(p) => p.theme.colors.accBlue};
    border-radius: 1em;
    transition: 300ms;
    background-color: ${({ isOpen }) => (isOpen ? "#fff" : "#353535")};
  }

  .line1 {
    transform: ${({ isOpen }) =>
      isOpen ? "rotate(45deg) translate(0px, 10px)" : "0"};
  }
  .line2 {
    opacity: ${({ isOpen }) => (isOpen ? "0" : "1")};
  }
  .line3 {
    transform: ${({ isOpen }) =>
      isOpen ? "rotate(-45deg) translate(0px, -10px)" : "0"};
  }
`

const StyledLinks = styled.ul`
  display: none;

  @media only screen and (min-width: 768px) {
    display: flex;
    align-items: center;
  }
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${(p) => p.theme.colors.darkGray};
  list-style: none;
  padding: 0.5em 1.5em;
  transition: 500ms;
  transition-delay: 100ms;
  font-weight: 600;

  &:nth-child(2) {
    margin-left: 4em;
  }

  &:hover,
  &:focus {
    background-color: rgba(53, 53, 53, 0.25);
    border-radius: 10em;
  }
`

export default index
