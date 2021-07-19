import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import {
  capturePortfolio,
  gameLibraryApp,
  musicPlayerApp,
  recentProject1,
  weatherApp,
} from "../../projects";

// import PortfolioProject from "../../components/PortfolioProject"
import Project from "../../components/Project";
import { Section } from "../../styles";
import { pageAnimation } from "../../animation";

const index = () => {
  return (
    <div>
      <StyledPortfolioHeader
        initial="hidden"
        variants={pageAnimation}
        animate="show"
        className="intro"
      >
        <h2>Portfolio</h2>
        <h1 className="title">All Work</h1>
      </StyledPortfolioHeader>

      <StyledProjects
        initial="hidden"
        variants={pageAnimation}
        animate="show"
        className="intro"
      >
        <Project {...weatherApp} url={"/portfolio/weather-app"} />
        <Project {...recentProject1} url={"/portfolio/artist-page"} />
        <Project {...capturePortfolio} url={"/portfolio/capture-portfolio"} />
        <Project {...gameLibraryApp} url={"/portfolio/game-library-app"} />
        <Project {...musicPlayerApp} url={"/portfolio/music-player-app"} />
      </StyledProjects>
    </div>
  );
};

const StyledPortfolioHeader = styled(motion.div)`
  width: 100%;
  text-align: center;
  padding: 4em 0;

  .title {
    font-size: 3em;
    color: ${(p) => p.theme.colors.mainDark};
    padding: 0;
  }

  h2 {
    text-transform: uppercase;
    color: ${(p) => p.theme.colors.lightGray};
    font-weight: 400;
    padding: 0;
  }
`;

const StyledProjects = styled(Section)`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 2em;
  width: 100%;
`;

export default index;
