import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

import profileP from "../../Assets/images/avi.png"
import Button from "../../components/Button"

const Hero = () => {
  return (
    <StyledHeroSection>
      <div className="intro">
        <img src={profileP} alt="Dylan Reed" className="profile-p" />
        <div className="headline">
          <h1>Hey</h1>
          <h4>My name is Dylan and I am a front end engineer</h4>
          <Button to="/contact" primary>
            Let's Work Together
          </Button>
        </div>
      </div>
    </StyledHeroSection>
  )
}

const StyledHeroSection = styled.section`
  width: 100%;
  padding: 5em 2em;

  .intro {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media only screen and (min-width: 768px) {
      flex-direction: row;
      text-align: left;
    }

    img {
      max-width: 35%;
      max-height: 35vh;
      border-radius: 1em;
      box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.051),
        0 6.7px 5.3px rgba(0, 0, 0, 0.073), 0 12.5px 10px rgba(0, 0, 0, 0.09),
        0 22.3px 17.9px rgba(0, 0, 0, 0.107),
        0 41.8px 33.4px rgba(0, 0, 0, 0.129), 0 100px 80px rgba(0, 0, 0, 0.18);
      cursor: pointer;
      transition: 300ms;

      &:hover {
        transform: scale(1.025);
        box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.056),
          0 6.7px 5.3px rgba(0, 0, 0, 0.081), 0 12.5px 10px rgba(0, 0, 0, 0.1),
          0 22.3px 17.9px rgba(0, 0, 0, 0.119),
          0 41.8px 33.4px rgba(0, 0, 0, 0.144), 0 100px 80px rgba(0, 0, 0, 0.2);
      }
    }

    .headline {
      text-align: center;

      @media only screen and (min-width: 768px) {
        text-align: left;
        padding: 0 2em;
      }

      h1 {
        font-size: clamp(4em, 3vw, 6em);
      }

      h4 {
        max-width: 15em;
        padding-bottom: 2em;
        font-weight: 500;
        font-size: clamp(1.125em, 3vw, 1.3125em);
      }
    }
  }
`

export default Hero
