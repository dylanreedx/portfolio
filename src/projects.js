import nathanDoubleLevitatingPhone from "./Assets/images/nathan-project-img/double-levitating.png";

//Shoe design img
import projectThumbnail from "./Assets/images/shoe-design-img/macbook1.png";

// Music App thumbnail
import musicAppThumbnail from "./Assets/images/music-app-img/thumbnail.png";

// game library img
import gameLibraryMockup1 from "./Assets/images/game-library-img/iMac-mockup.png";

// Capture img
import captureImg from "./Assets/images/capture-portfolio/capture-mock-full.png";

// Capture img
import weatherAppImg from "./Assets/images/weather-app/mockup.png";

// Shopping cart app
import shoppingCartMock from "./Assets/images/shopping-cart-app/mockup.png";
// Quiz app
import quizAppMock from "./Assets/images/quiz-app/mockup.png";
// notes app
import notesAppMock from "./Assets/images/notes-app/mockup.png";

export const recentProject1 = {
  title: "Personal Music Artist Website",
  cta: "View Project",
  desc:
    "A website developed for an alternative pop artist based in Alberta Canada, Nathan Zarowny. The website offers up-to-date information for fans to be caught up with the artist.",
  tech: "Tech: JavaScript, React, Styled-Components, React Router",
  img: nathanDoubleLevitatingPhone,
  url: "/portfolio/artist-page",
};
export const recentProject2 = {
  title: "A Shoe Landing Page Design",
  cta: "View More",
  desc:
    "A shoe design featuring a modern and clean style. Using a smooth and vibrant gradient and material colors. Using a prototype design makes it easy to attract an audience.",
  tech: "Tech: Figma, Photoshop, HTML, CSS, JavaScript",
  img: projectThumbnail,
  url: "/shoe-design",
};

export const musicPlayerApp = {
  title: "Swifty - Music Player",
  cta: "View Project",
  desc:
    "A smaller app that has many different functionalities and offers a simple and clean way to listen to LoFi music. Many smooth animations and transitions with colors that enhance the feel.",
  tech: "Tech: React, Styled Components",
  img: musicAppThumbnail,
  url: "/portfolio/music-player-app",
};

export const gameLibraryApp = {
  title: "Ignite - Game Library",
  cta: "View Project",
  desc:
    "A easy to access app to find information about recent, upcoming, and popular games fast.",
  tech: "Tech: React, Redux, APIs, JavaScript",
  img: gameLibraryMockup1,
  url: "/portfolio/game-library-app",
};

export const capturePortfolio = {
  title: "Capture - A Mock Business Portfolio",
  cta: "View Project",
  desc: "A film business displaying movies, photography, and art work.",
  tech: "Tech: React, Redux, APIs, JavaScript, Framer Motion, React Router",
  img: captureImg,
  url: "/portfolio/capture-portfolio",
};
export const weatherApp = {
  title: "Weather App - TypeScript & React",
  cta: "View Project",
  desc:
    "A project, assigned by Granular.ai as a part of the hiring process. The brief was simple, a two-page app, the first where users will be able to search for a location and will display the current weather and data of the location. On that queried location, users have the ability to favorite that location, and is displayed on the second page.",
  tech: "Tech: React, Redux, APIs, TypeScript, React Router",
  img: weatherAppImg,
  url: "/portfolio/weather-app",
};
export const shoppingCartApp = {
  title: "Shopping Cart App",
  cta: "View Project",
  desc:
    "Using CSS frameworks, state management libraries create an easy to implement scalable shopping cart app.",
  tech: "Tech: React, Redux, APIs, TypeScript, Material UI",
  img: shoppingCartMock,
  url: "/portfolio/shopping-cart-app",
};
export const quizApp = {
  title: "Quiz App",
  cta: "View Project",
  desc:
    "A simple app that uses a simple API to display questions and answers, then functionality that performs checks based off the correct answer that the API gives through JSON.",
  tech: "Tech: React, Trivia API, TypeScript",
  img: quizAppMock,
  url: "/portfolio/quiz-app",
};
export const notesApp = {
  title: "Notes App",
  cta: "View Project",
  desc:
    "Easy and efficient note taking app, which offers a full page layout design to fit all notes on a sidebar, which then can be displayed on the main section to the right.",
  tech: "Tech: React, Context API, TypeScript",
  img: notesAppMock,
  url: "/portfolio/notes-app",
};
