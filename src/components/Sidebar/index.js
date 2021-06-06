import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import Socials from "../Socials"

const index = ({ isOpen, toggle }) => {
  return (
    <StyledSidebar isOpen={isOpen} toggle={toggle}>
      <StyledLinks>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/portfolio">Portfolio</StyledLink>
        <StyledLink to="/about">About</StyledLink>
        <StyledLink to="/contact">Contact</StyledLink>
      </StyledLinks>
      <Socials isOpen={isOpen} />
    </StyledSidebar>
  )
}

const StyledSidebar = styled.div`
  position: fixed;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "100%")};
  width: 100%;
  height: 100%;
  background-color: rgba(0, 163, 228, 0.85);
  transition: 300ms;
  display: flex;
  align-items: center;
  flex-direction: column;
  z-index: 5;

  a {
    padding: 0 1em;
  }

  .top-close {
    display: flex;
    justify-content: flex-end;
    padding: 2em;
    background: ${(p) => p.theme.colors.accBlue};
    width: 100%;
  }
`

const StyledLinks = styled.ul`
  display: flex;
  margin-top: 5em;
  flex-direction: column;
  width: 100%;
  padding: 2em 5em;
  text-align: center;

  @media screen and (min-width: 524px) {
    padding: 3em 10em;
  }
`

const StyledLink = styled(Link)`
  text-decoration: none;
  font-weight: 700;
  font-size: 2em;
  color: ${(p) => p.theme.colors.mainWhite};
  margin: 0.5em 0;
  position: relative;
  transition: 300ms;

  &:hover {
    transform: translateX(5px);
    color: #cacaca;

    &::after {
      transform: scaleX(2);
    }
  }

  &::after {
    content: "";
    width: 4px;
    height: 100%;
    border-radius: 1em;
    background-color: ${(p) => p.theme.colors.mainWhite};
    position: absolute;
    top: 0;
    left: 0;
    transition: 300ms;
  }
`

export default index
