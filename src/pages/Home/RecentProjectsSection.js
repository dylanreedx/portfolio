import React from "react"
import styled from "styled-components"

import Project from "../../components/Project"
import { recentProject1, recentProject2 } from "../../projects"
import { Section } from "../../styles"

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

const StyledProjectSection = styled(Section)`
  padding: 1em;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

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
