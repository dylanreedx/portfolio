import React from "react"
import { motion } from "framer-motion"
import styled, { keyframes, css } from "styled-components"
import { Link } from "react-router-dom"
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos"

// Animations

import { pageAnimation, slideLeftAnim } from "../../animation"

import blobAvi from "../../Assets/images/blob-avi.png"
import heroWave from "../../Assets/images/wave.svg"
import Button from "../../components/Button"

const Hero = () => {
  return (
    <StyledHeroSection>
      <motion.div
        initial="hidden"
        variants={pageAnimation}
        animate="show"
        className="intro"
      >
        <img src={blobAvi} alt="Dylan Reed" className="profile-p" />
        <div className="hero-main">
          <motion.div
            initial="hidden"
            animate="show"
            variants={slideLeftAnim}
            className="headline"
          >
            <h2>Frontend Developer</h2>
            <h1>
              My name is Dylan. I am a frontend developer and I create a great
              user experience through the web.
            </h1>
          </motion.div>
          <motion.div
            initial="hidden"
            animate="show"
            variants={slideLeftAnim}
            className="buttons"
          >
            <Button to="/contact" primary>
              Let's Work Together
              <ArrowMove fontSize="small" style={{ zIndex: "0" }} />
            </Button>
            <Button to="/portfolio">View Work</Button>
          </motion.div>
        </div>
      </motion.div>
      <img className="wave" src={heroWave} alt="background wave" />
    </StyledHeroSection>
  )
}

const ArrowAnim = keyframes`
  0% {
    transform: translateX(5px);
  }
  20% {
    transform: translateX(8px)
  }
  60% {
    transform: translateX(2px);
    
  }
  80% {
    transform: translateX(8px);
    
  }
  100% {
    transform: translateX(5px);
  }
`

const ArrowMove = styled(ArrowForwardIosIcon)`
  animation: ${ArrowAnim} infinite 2s;
`

const StyledHeroSection = styled(motion.section)`
  width: 100%;
  padding: 5em 2em;

  .wave {
    position: absolute;
    object-fit: cover;
    width: 100%;
    z-index: -1;
    top: 0;
    left: 0;
  }

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
      max-width: 50%;
      max-height: 35vh;
      cursor: pointer;
      transition: 300ms;

      &:hover {
        transform: scale(1.025);
      }
    }

    .headline {
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 2em 0;

      @media only screen and (min-width: 768px) {
        text-align: left;
        padding: 0 2em;
        align-items: flex-start;
      }

      h1 {
        font-size: clamp(2em, 3vw, 2.625em);
        font-weight: 400;
        width: 100%;
        max-width: 15ch;
        line-height: 1.5;
        padding-bottom: 1em;
      }

      h2 {
        font-weight: 400;
        font-size: clamp(1.125em, 3vw, 1.3125em);
        color: ${(p) => p.theme.colors.midGray};
        letter-spacing: 0.25em;
      }
    }

    .buttons {
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: center;
    }

    .hero-main {
      display: flex;
      flex-direction: column;
    }
  }
`

export default Hero
