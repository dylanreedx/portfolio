import React from "react";
import styled from "styled-components";

import Project from "../../components/Project";
import {
  capturePortfolio,
  gameLibraryApp,
  musicPlayerApp,
  recentProject1,
  weatherApp,
  shoppingCartApp,
  quizApp,
  notesApp,
} from "../../projects";
import { Section } from "../../styles";

import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import Button from "../../components/Button";
import { pageAnimation } from "../../animation";

const RecentProjectsSection = () => {
  return (
    <StyledProjectSection
      initial="hidden"
      variants={pageAnimation}
      animate="show"
      className="intro"
    >
      <div className="title">
        <h2 className="section-title">Recent Projects</h2>
        <Button style={{ padding: "0" }} to="/portfolio">
          View All Work <ArrowForwardIosIcon />
        </Button>
      </div>
      <div className="projects">
        <Project {...weatherApp} url={"/portfolio/weather-app"} />
        <Project {...notesApp} url={"/portfolio/notes-app"} />
        <Project {...quizApp} url={"/portfolio/quiz-app"} />
        <Project {...shoppingCartApp} url={"/portfolio/shopping-cart-app"} />
        <Project {...gameLibraryApp} url={"/portfolio/game-library-app"} />
      </div>
    </StyledProjectSection>
  );
};

const StyledProjectSection = styled(Section)`
  margin: 4em 0;

  .title {
    padding: 0.5em 0;
    width: 100%;
    font-size: 1.625em;
    text-transform: uppercase;
    color: ${(p) => p.theme.colors.midGray};
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    @media screen and (min-width: 768px) {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  }

  .projects {
    display: flex;
    flex-direction: column;
    gap: 4em;
    padding: 2em 0;
  }
`;

export default RecentProjectsSection;
