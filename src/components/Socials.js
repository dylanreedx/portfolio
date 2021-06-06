import React from "react"
import styled from "styled-components"

//Icons
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import InstagramIcon from "@material-ui/icons/Instagram"
import GitHubIcon from "@material-ui/icons/GitHub"
import TwitterIcon from "@material-ui/icons/Twitter"

const Socials = ({ isOpen }) => {
  return (
    <StyledSocials isOpen={isOpen}>
      <a href="https://www.linkedin.com/in/dylan-reed-210394142/">
        <LinkedInIcon
          fontSize="small"
          style={isOpen ? { fontSize: 35 } : { fontSize: 15 }}
        />
      </a>
      <a href="https://github.com/carbondesigned">
        <GitHubIcon
          fontSize="small"
          style={isOpen ? { fontSize: 35 } : { fontSize: 15 }}
        />
      </a>
      <a href="https://www.instagram.com/carbondesigned/">
        <InstagramIcon
          fontSize="small"
          style={isOpen ? { fontSize: 35 } : { fontSize: 15 }}
        />
      </a>
      <a href="https://twitter.com/carbondesigned">
        <TwitterIcon
          fontSize="small"
          style={isOpen ? { fontSize: 35 } : { fontSize: 15 }}
        />
      </a>
    </StyledSocials>
  )
}

const StyledSocials = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    padding: 0 0.5em;
    color: ${({ isOpen }) => (isOpen ? "#fff" : "#353535")};
  }
`

export default Socials
