import React from "react"
import styled from "styled-components"
import Button from "../../../components/Button"
import { Section } from "../../../styles"
import Step from "./Step"

// Data
import { step1, step2, step3 } from "./stepsData"

const index = () => {
  return (
    <StyledStepsSection>
      <h2>The Steps For The Highest Quality Applications</h2>
      <Step {...step1} />
      <Step {...step2} />
      <Step {...step3} />
      <Button primary>Learn More</Button>
    </StyledStepsSection>
  )
}

const StyledStepsSection = styled(Section)`
  margin: 5em 2em 0 2em;
`

export default index
