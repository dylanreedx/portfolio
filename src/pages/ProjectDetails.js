import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import { useHistory } from "react-router-dom"
import { ProjectState } from "../projectState"

import Tech from "../components/Tech"

import { fade } from "../animation"

import LinkIcon from "@material-ui/icons/Link"
import { pageAnimation, slideAnim, slideRightAnim } from "../animation"
import { useScroll } from "../components/useScroll"

const ProjectDetails = ({ light }) => {
  const history = useHistory()
  const url = history.location.pathname
  const [projects, setProjects] = useState(ProjectState)
  const [project, setProject] = useState(null)

  useEffect(() => {
    const currentProject = projects.filter(
      (stateProject) => stateProject.url === url
    )
    setProject(currentProject[0])
  }, [projects, url])

  const isLight = () => {
    if (project.isLight) {
      return true
    } else {
      return false
    }
  }
  const [element, controls] = useScroll()
  return (
    <>
      {project && (
        <>
          <StyledHeader
            initial="hidden"
            variants={pageAnimation}
            animate="show"
            className="intro"
            className="header"
          >
            <img
              src={project.headerCover}
              alt="project header mockup"
              className="headerMockup"
            />
            <StyledIntro
              initial="hidden"
              variants={slideAnim}
              animate="show"
              className="intro"
              light={isLight}
              className="intro"
            >
              <div className="desc">
                <h2 className="project-title"> {project.title} </h2>
                <p className="project-desc"> {project.desc} </p>
                <div className="website">
                  <a href={project.website} target="_blank" rel="noreferrer">
                    <LinkIcon fontSmall="small" /> View Website
                  </a>
                </div>
              </div>
            </StyledIntro>
          </StyledHeader>
          <StyledDetails>
            <StyledTech
              variants={fade}
              animate={controls}
              ref={element}
              className="technologies"
            >
              <h2 className="detail-title tech">
                {project.details.tech.title}
              </h2>
              <div className="main">
                <Tech>
                  <div className="tech-title">
                    {project.details.tech.tech1.title}
                  </div>
                  <div className="desc">{project.details.tech.tech1.desc}</div>
                </Tech>
                <Tech>
                  <div className="tech-title">
                    {project.details.tech.tech2.title}
                  </div>
                  <div className="desc">{project.details.tech.tech2.desc}</div>
                </Tech>
                <Tech>
                  <div className="tech-title">
                    {project.details.tech.tech3.title}
                  </div>
                  <div className="desc">{project.details.tech.tech3.desc}</div>
                </Tech>
              </div>
            </StyledTech>
            <div className="design">
              <h2> {project.details.design.title} </h2>
              <p> {project.details.design.p1} </p>
            </div>
            <StyledMidMockup
              bg={project.mockup1}
              className="mid-mockup"
            ></StyledMidMockup>

            <StyledStory>
              <h2> {project.story.title} </h2>
              <p> {project.story.p1} </p>
            </StyledStory>
            <StyledFeatures className="features">
              <StyledFeatureMockup className="mockup">
                <img
                  src={project.features.featuresMockup}
                  alt="project mockup"
                  className="features-mockup"
                />
                <img
                  src={project.features.featuresMockup2}
                  alt="project mockup"
                  className="features-mockup"
                />
                <img
                  src={project.features.featuresMockup3}
                  alt="project mockup"
                  className="features-mockup"
                />
              </StyledFeatureMockup>
            </StyledFeatures>
          </StyledDetails>
        </>
      )}
    </>
  )
}

const StyledHeader = styled(motion.div)`
  width: 100%;
  height: 75vh;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  .headerMockup {
    max-width: 100%;
    flex: 1;
    object-fit: cover;

    @media screen and (min-width: 768px) {
      max-width: 50%;
    }
  }

  @media screen and (min-width: 768px) {
    flex-direction: row-reverse;
    flex: 0.5;
  }
`

const StyledIntro = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${(p) => p.theme.colors.darkGrey};
  height: 100%;
  flex: 2;

  @media screen and (min-width: 768px) {
    flex-direction: row-reverse;
  }

  .desc {
    z-index: 1em;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
    padding: 5em;
    flex: 2;

    @media screen and (min-width: 768px) {
      text-align: left;
      align-items: flex-start;
    }

    .project-title {
      text-transform: uppercase;
      font-size: clamp(1.75em, 5vw, 6em);
      line-height: 1.2;
      max-width: 15ch;
    }

    .project-desc {
      max-width: 45ch;
    }
  }

  .website {
    display: flex;
    padding: 2em 0;

    a {
      display: flex;
      align-items: center;
      color: ${(p) => p.theme.colors.accBlue};
    }
  }
`

const StyledDetails = styled(motion.section)`
  padding: 6em 2em;
  margin: 0 2em;

  h2 {
    position: relative;
    padding-bottom: 1em;
    font-size: clamp(2.425em, 5vw, 4.125em);
  }

  h2::after {
    content: "";
    height: 1em;
    width: 1em;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: -0.5em;
    background-color: ${(p) => p.theme.colors.accBlue};
    z-index: -1;
  }

  p {
    max-width: 75ch;
  }
`

const StyledTech = styled(motion.section)`
  display: flex;
  flex-direction: column;
  margin: 4em 0;

  .main {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5em;
  }
`

const StyledMidMockup = styled(motion.div)`
  display: grid;
  place-items: center;
  width: 100%;
  margin: 0;
  margin: 5em 0;
  height: 75vh;
  background-image: url(${(p) => p.bg});
  background-size: cover;
  background-position: center;
  border-radius: 1em;
`
const StyledStory = styled(motion.section)``

const StyledFeatures = styled(motion.section)`
  width: 100%;
`

const StyledFeatureMockup = styled(motion.div)`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(800px, 1fr));
  margin: 5em 0;
  gap: 1em;

  .features-mockup {
    max-width: 100%;
    max-height: 50vh;
    object-fit: cover;
  }
`
export default ProjectDetails
