import React from "react"
import styled from "styled-components"
import { pageAnimation } from "../../animation"
import About from "../../components/About"
import { Section } from "../../styles"

const index = () => {
  return (
    <StyledAboutPage
      initial="hidden"
      variants={pageAnimation}
      animate="show"
      className="intro"
      className="about-wrapper"
    >
      <About />
    </StyledAboutPage>
  )
}

const StyledAboutPage = styled(Section)`
  min-height: 100vh;
`

export default index
