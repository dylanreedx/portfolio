import React from "react"
import styled from "styled-components"

import Project from "../../components/Project"
import { recentProject1, recentProject2 } from "../../projects"

const RecentProjectsSection = () => {
  return (
    <StyledProjectSection>
      <div className="title">
        <h2>Recent Projects</h2>
        <p className="desc">
          Here are a few of my recent projects. I’ve been learning and gaining
          expirence with both personal and client based projects.
        </p>
      </div>
      <div className="projects">
        <Project {...recentProject1} />
        <Project {...recentProject2} />
      </div>
    </StyledProjectSection>
  )
}

const StyledProjectSection = styled.section`
  padding: 1em;
  margin: 0 2em;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media only screen and (min-width: 1040px) {
    margin: 0 10em;
  }
  @media only screen and (min-width: 1280px) {
    margin: 0 15em;
  }
  @media only screen and (min-width: 1500px) {
    margin: 0 22em;
  }
  @media only screen and (min-width: 1920px) {
    margin: 0 35em;
  }

  h2 {
    padding: 0.5em 0;
  }

  .projects {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2em;
    width: 100%;
  }
`

export default RecentProjectsSection
