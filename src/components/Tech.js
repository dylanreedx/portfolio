import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

import bg from "../Assets/images/contact-header.svg"
import { useScroll } from "./useScroll"
import { fade, slideRightAnim } from "../animation"

const Tech = ({ children }) => {
  const [element, controls] = useScroll()
  return (
    <>
      <StyledTechComp
        variants={slideRightAnim}
        animate={controls}
        ref={element}
        bg={bg}
      >
        {children}
      </StyledTechComp>
    </>
  )
}

const StyledTechComp = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 2em;
  background-image: url(${(p) => p.bg});
  background-size: cover;
  background-color: #fff;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.02),
    0 6.7px 5.3px rgba(0, 0, 0, 0.028), 0 12.5px 10px rgba(0, 0, 0, 0.035),
    0 22.3px 17.9px rgba(0, 0, 0, 0.042), 0 41.8px 33.4px rgba(0, 0, 0, 0.05),
    0 100px 80px rgba(0, 0, 0, 0.07);
  border-radius: 1em;
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    width: 100%;
    background: rgb(239, 239, 239);
    background: linear-gradient(
      180deg,
      rgba(239, 239, 239, 0.25) 0%,
      rgba(0, 0, 0, 0) 50%
    );
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
  }

  @media screen and (min-width: 768px) {
    width: 50%;

    &::after {
      content: "";
      width: 100%;
      background: rgb(239, 239, 239);
      background: linear-gradient(
        0deg,
        rgba(239, 239, 239, 1) 0%,
        rgba(0, 0, 0, 0) 50%
      );
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
    }
  }

  &:nth-child(odd) {
    align-items: flex-end;
    align-self: flex-end;

    .desc,
    .tech-title {
      text-align: right;
    }
  }

  .tech-title {
    font-size: 2.725em;
    font-weight: 700;
    padding: 0.5em 0;
    position: relative;
    width: 100%;
    z-index: 2;

    &::after {
      content: "";
      width: 100%;
      height: 0.1em;
      border-radius: 1em;
      background: ${(p) => p.theme.colors.accBlue};
      position: absolute;
      left: 0;
      bottom: 0;
    }
  }

  .desc {
    max-width: 60ch;
    padding: 0.5em 0;
    z-index: 2;
  }
`
export default Tech
