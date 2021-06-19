import React from "react"
import styled from "styled-components"

const About = () => {
  return (
    <div>
      <StyledParagraph className="p">
        <h2 className="title">About Me</h2>
        <p>
          I enjoy desinging and developing websites! I have been creatively
          designing for 4+ years focusing on photo editing and video editing. I
          am currently in college, in a web development program.
        </p>
      </StyledParagraph>
      <StyledParagraph className="p">
        <h2 className="title">My Journey</h2>
        <p>
          When thinking about what I wanted my career to be, I always knew it
          would be something related to computers. I've tried to get into
          programming in general many times throughout the past few years,
          though never dove deep into web development where I finally understood
          what I wanted to do. A thing that pushed me was finding the perfect
          program in college. I was already planning on learning the art of
          programming before finding this program, but when I notice the program
          it seemed perfect.
        </p>
      </StyledParagraph>
      <StyledParagraph className="p">
        <h2 className="title">Career Path</h2>
        <p>
          After enrolling into the program for college, I took learning more
          seriously. Then I finally realized that the program could be a lot
          more than just learning, it would be really useful for networking into
          the industry. Now it sounds obvious, though I made a decision to learn
          and getting experience as much as I can before school starts. By this,
          I will already have learned and I can just work on meeting new people.
        </p>
      </StyledParagraph>
    </div>
  )
}

const StyledParagraph = styled.div`
  padding: 2em;

  .title {
    text-transform: uppercase;
    color: ${(p) => p.theme.colors.darkGray};
  }

  p {
    max-width: 100ch;
  }
`

export default About
