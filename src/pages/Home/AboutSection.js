import React from "react"
import styled from "styled-components"
import Button from "../../components/Button"
import { Section } from "../../styles"

const AboutSection = () => {
  return (
    <StyledAboutSection>
      <h2>A Little About Me</h2>
      <p className="desc">
        I enjoy designing and developing websites! I have been creatively
        designing for 4+ years focusing on photo editing and video editing. I am
        currently in college, in a web development program.
      </p>
      <div className="cta">
        <Button primary to="/about">
          Learn More
        </Button>
        <Button>View Resume</Button>
      </div>
    </StyledAboutSection>
  )
}

const StyledAboutSection = styled(Section)`
  margin-top: 2em;
  margin-bottom: 5em;

  h2 {
    padding-bottom: 0.5em;
    align-self: flex-start;
  }

  .desc {
    padding-bottom: 2em;
  }

  .cta {
    display: flex;
    justify-content: flex-start;
    width: 100%;
  }
`

export default AboutSection
