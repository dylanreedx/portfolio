import React from "react"
import styled from "styled-components"

const Step = ({ img, title, desc }) => {
  return (
    <StyledStep>
      <img src={img} className="icon" />
      <div className="desc">
        <h3 className="title"> {title} </h3>
        <p> {desc} </p>
      </div>
    </StyledStep>
  )
}

const StyledStep = styled.div`
  margin: 5em;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;

  h3 {
    padding-bottom: 0.5em;
  }

  .desc {
    text-align: left;
    max-width: 50ch;
  }

  img {
    max-width: 100%;
    max-height: 25vh;
    padding: 1em;
  }
`

export default Step
