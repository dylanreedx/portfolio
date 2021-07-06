import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

import blob1 from "../Assets/images/blob1.svg"

import Button from "./Button"
import { useScroll } from "./useScroll"
import { fade, slideRightAnim } from "../animation"

const Project = ({ img, title, cta, url, desc, tech }) => {
  const [element, controls] = useScroll()
  return (
    <StyledProject variants={slideRightAnim} animate={controls} ref={element}>
      <img src={img} loading="lazy" alt="a recent project" className="cover" />
      <div className="details">
        <h3 className="project-title"> {title} </h3>
        <p className="desc"> {desc} </p>
        <p className="tech"> {tech} </p>
        <div className="cta">
          <Button to={url} round>
            {cta}
          </Button>
        </div>
      </div>
      <img className="blob" src={blob1} alt="a decorative blob" />
    </StyledProject>
  )
}

const StyledProject = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 50vh;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.02),
    0 6.7px 5.3px rgba(0, 0, 0, 0.028), 0 12.5px 10px rgba(0, 0, 0, 0.035),
    0 22.3px 17.9px rgba(0, 0, 0, 0.042), 0 41.8px 33.4px rgba(0, 0, 0, 0.05),
    0 100px 80px rgba(0, 0, 0, 0.07);
  border-radius: 1em;

  &::after {
    content: "";
    width: 100%;
    background: rgb(239, 239, 239);
    background: linear-gradient(
      180deg,
      rgba(239, 239, 239, 0.5) 0%,
      rgba(0, 0, 0, 0) 25%
    );
    height: 100%;
    position: absolute;
    top: 0;
    z-index: 1;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;

    &::after {
      background: rgb(239, 239, 239);
      background: linear-gradient(
        0deg,
        rgba(239, 239, 239, 1) 0%,
        rgba(0, 0, 0, 0) 65%
      );
      z-index: 1;
    }
  }

  .cover {
    max-width: 100%;
    overflow: hidden;
    object-fit: contain;
    position: relative;
    transition: 300ms;
    transform-origin: center;
    z-index: 1;

    &:hover {
      transform: scale(1.25);
    }

    @media screen and (min-width: 768px) {
      max-width: 50%;
    }
  }

  .details {
    text-align: center;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    padding: 4em;
    z-index: 2;

    @media screen and (min-width: 768px) {
      text-align: left;
      align-items: flex-start;

      .tech {
        width: 100%;
      }
    }

    .project-title {
      font-size: 2.625em;
      font-weight: 600;
      line-height: 1.325;

      @media screen and (min-width: 768px) {
        padding-top: 1em;
      }
    }

    .desc {
      padding: 2em 0;
    }
  }

  .cta {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2em 0;

    @media screen and (min-width: 768px) {
      justify-content: flex-start;
    }
  }

  .blob {
    position: absolute;
    top: -10em;
    left: 0;
    z-index: 0;
    max-width: 100%;

    @media screen and (min-width: 768px) {
      top: -20em;
      max-width: 50%;
    }
  }
`
// Adjust width

export default Project
