import nathanProjectCover from "./Assets/images/iphone-mockups2.png"
import shoeCover from "./Assets/images/nike-shoe-mockup.png"
import nathanDoubleLevitatingPhone from "./Assets/images/nathan-project-img/double-levitating.png"

//Shoe design img
import projectThumbnail from "./Assets/images/shoe-design-img/macbook1.png"

// Music App thumbnail
import musicAppThumbnail from "./Assets/images/music-app-img/thumbnail.png"

// game library img
import gameLibraryMockup1 from "./Assets/images/game-library-img/iMac-mockup.png"

export const recentProject1 = {
  title: "Personal Music Artist Website",
  cta: "View Project",
  desc:
    "A website developed for an alternative pop artist based in Alberta Canada, Nathan Zarowny. The website offers up-to-date information for fans to be caught up with the artist.",
  tech: "Tech: JavaScript, React, Styled-Components, React Router",
  img: nathanDoubleLevitatingPhone,
  url: "/portfolio/artist-page",
}
export const recentProject2 = {
  title: "A Shoe Landing Page Design",
  cta: "View More",
  desc:
    "A shoe design featuring a modern and clean style. Using a smooth and vibrant gradient and material colors. Using a prototype design makes it easy to attract an audience.",
  tech: "Tech: Figma, Photoshop, HTML, CSS, JavaScript",
  img: projectThumbnail,
  url: "/shoe-design",
}

export const musicPlayerApp = {
  title: "Swifty - Music Player",
  cta: "View Project",
  desc:
    "A smaller app that has many different functionalities and offers a simple and clean way to listen to LoFi music. Many smooth animations and transitions with colors that enhance the feel.",
  tech: "Tech: React, Styled Components",
  img: musicAppThumbnail,
  url: "/portfolio/music-player-app",
}

export const gameLibraryApp = {
  title: "Ignite - Game Library",
  cta: "View Project",
  desc:
    "A easy to access app to find information about recent, upcoming, and popular games fast.",
  tech: "Tech: React, Redux, APIs, JavaScript",
  img: gameLibraryMockup1,
  url: "/portfolio/game-library-app",
}
