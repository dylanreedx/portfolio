import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

import Button from "./Button"

const Project = ({ img, title, cta, url }) => {
  return (
    <StyledProject>
      <Link to={url}>
        <img src={img} alt="a recent project" className="cover" />
      </Link>
      <div className="details">
        <h3> {title} </h3>
        <Button to="/portfolio" primary>
          {cta}
        </Button>
      </div>
    </StyledProject>
  )
}

const StyledProject = styled.div`
  padding: 2em 0;
  transition: 300ms;

  &:hover,
  &:focus {
    transform: scale(1.025);

    img {
      box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.02),
        0 6.7px 5.3px rgba(0, 0, 0, 0.028), 0 12.5px 10px rgba(0, 0, 0, 0.035),
        0 22.3px 17.9px rgba(0, 0, 0, 0.042),
        0 41.8px 33.4px rgba(0, 0, 0, 0.05), 0 100px 80px rgba(0, 0, 0, 0.07);
    }
  }

  img {
    max-width: 100%;
    max-height: 50vh;
    border-radius: 1em;
    position: relative;
    transition: 300ms;
  }

  .details {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    z-index: 1;

    h3 {
      padding-right: 1em;
    }
  }
`

export default Project
