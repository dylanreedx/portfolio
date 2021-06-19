//Images
import zarownyHeaderBg from "./Assets/images/nathan-project-img/nathan-double-color-mockup.png"
import zarownyHeaderMockupBg from "./Assets/images/iphone-mockups2.png"
import zarownyIphone1 from "./Assets/images/nathan-project-img/flat-iphone.png"
import zarownyIphone2 from "./Assets/images/nathan-project-img/macbook1.png"
import zarownyIpad1 from "./Assets/images/nathan-project-img/ipad1.png"

//shoe project
import levitatingiPhone from "./Assets/images/shoe-design-img/levitating.png"
import handMockup from "./Assets/images/shoe-design-img/handMockup.png"

// Music App
import musicAppThumbnail from "./Assets/images/music-app-img/thumbnail-t.png"
import musicAppMockup from "./Assets/images/music-app-img/iphoneMockup2.png"
import musicAppMockup2 from "./Assets/images/music-app-img/iphoneMockup1.png"

// import gameLibrary
import gameLibraryMockup1 from "./Assets/images/game-library-img/iMac-mockup.png"
import gameLibraryMockup2 from "./Assets/images/game-library-img/simple-flat.png"

export const ProjectState = () => {
  return [
    {
      url: "/portfolio/artist-page",
      headerCover: zarownyHeaderBg,
      light: true,
      mockup1: zarownyHeaderMockupBg,
      title: "Nathan Zarowny",
      desc:
        "A personal website to host all of his necessities to reach his fans. ",
      website: "https://nathanzarowny.netlify.app/",
      details: {
        tech: {
          title: "Technologies",
          tech1: {
            title: "React",
            desc:
              "The site is created using the JavaScript library React. Using React gives the ablitity to easily maintain and update frequently to give the most up to date information about the artist to his fans. ",
          },
          tech2: {
            title: "Styled Components",
            desc:
              "Styling is done with Styled-Components created many of the visual functionality.",
          },
          tech3: {
            title: "React Router",
            desc:
              "To achieve the app-like feel in terms of responsiveness when visiting and navigating through the site, it uses React Router.",
          },
        },
        design: {
          title: "Design",
          p1:
            "I personally wanted to give the iconic modern artist energy when designing the site. With the artist’s genre of music I figured that the modern approach would fit best when working around the type of fan base he would be generating. Obviously making any app scalable is the best idea, though I had this especially in mind through out the whole development phase. Ensuring that everything can be updated freely and quickly would give the best efficiency. Efficiency is important due to the potential fans that could be generated from the artists.",
        },
      },
      story: {
        title: "01 Story Behind",
        p1:
          "An up and coming artist relied on purely social media to develop and publish information. Though Zarowny is mostly popular on social media, it never hurts developing a website. With the wider spread of the Zarowny no doubt the artist will grow more than if he hadn't grown his internet presence with the site.",
      },
      features: {
        featuresMockup: zarownyIphone1,
        featuresMockup2: zarownyIphone2,
        featuresMockup3: zarownyIpad1,
        feature1: "",
        feature2: "",
      },
    },
    {
      url: "/portfolio/music-player-app",
      headerCover: musicAppThumbnail,
      light: true,
      mockup1: musicAppMockup,
      title: "Swifty - Music Player App",
      desc:
        "A relaxing music player for relaxing times. Listen when, working, coding, studying, etc.",
      website: "https://the-lofi-music-player.netlify.app/",
      details: {
        tech: {
          title: "Technologies",
          tech1: {
            title: "React",
            desc:
              "The site is created using the JavaScript library React. Using React gives the ability to easily maintain and update frequently to give the most up to date information about the artist to his fans. ",
          },
          tech2: {
            title: "Styled Components",
            desc:
              "Styling is done with Styled-Components created many of the visual functionality.",
          },
          tech3: {
            title: "React Router",
            desc:
              "To achieve the app-like feel in terms of responsiveness when visiting and navigating through the site, it uses React Router.",
          },
        },
        design: {
          title: "Design",
          p1:
            "The design is simple and intuitive, presenting a visual of the individual songs, time, and the controls.",
        },
      },
      story: {
        title: "01 Story Behind",
        p1:
          "This app was created to start getting into the React environment. I helped with a lot of use cases, of useState to update many of the elements, such as the controls, the specific and current song, etc.",
      },
      features: {
        featuresMockup: musicAppMockup2,
        featuresMockup2: musicAppThumbnail,
        featuresMockup3: musicAppMockup,
        feature1: "",
        feature2: "",
      },
    },
    {
      url: "/portfolio/game-library-app",
      headerCover: gameLibraryMockup1,
      light: true,
      mockup1: gameLibraryMockup2,
      title: "Ignite - Game Library",
      desc:
        "A easy to access app to find information about recent, upcoming, and popular games fast.",
      website: "https://quick-game-library.netlify.app/",
      details: {
        tech: {
          title: "Technologies",
          tech1: {
            title: "React",
            desc:
              "Using React for the base allows for easy and dynamic components to create the best UI possible.",
          },
          tech2: {
            title: "Redux",
            desc:
              "This app really allowed me to get me started with Redux and managing state across many components.",
          },
          tech3: {
            title: "Axios",
            desc:
              "I fetched the movies and the information about them from a open-source game library API. I used the JavaScript Library Axios to fetch the api and handle in general.",
          },
        },
        design: {
          title: "Design",
          p1:
            "The design is very minimal for the reason of efficiency to find proper information about any games. The design of how the information is layed out is efficient.",
        },
      },
      story: {
        title: "01 Story Behind",
        p1:
          "This project started the learning curve of Redux to manage state between many components while working with APIs. State management is all throughout of the project.",
      },
      features: {
        featuresMockup: musicAppMockup2,
        feature1: "",
        feature2: "",
      },
    },
    {
      url: "/portfolio/shoe-design",
      headerCover: handMockup,
      light: true,
      mockup1: levitatingiPhone,
      title: "Modern Shoe Design",
      desc:
        "A modern and clean shoe design with many trendy and popular ideas for larger audiences.",
      website: "https://www.instagram.com/p/CNm7y2BJDHK/",
      details: {
        tech: {
          title: "Technologies",
          tech1: {
            title: "React",
            desc:
              "The site is created using the JavaScript library React. Using React gives the ablitity to easily maintain and update frequently to give the most up to date information about the artist to his fans. ",
          },
          tech2: {
            title: "Styled Components",
            desc:
              "Styling is done with Styled-Components created many of the visual functionality.",
          },
          tech3: {
            title: "React Router",
            desc:
              "To achieve the app-like feel in terms of responsiveness when visiting and navigating through the site, it uses React Router.",
          },
        },
        design: {
          title: "Design",
          p1:
            "This design uses many design trends that aim to reach a fuller audience. With intuitive customizable and selectable option to chose the best fit for your shoe. The two-lined menu button takes the next step into the prototype or experimental phase of the design.",
        },
      },
      story: {
        title: "01 Story Behind",
        p1:
          "An up and coming artist relied on purely social media to develop and publish information. Though Zarowny is mostly popular on social media, it never hurts developing a website.",
      },
      features: {
        featuresMockup: musicAppMockup2,
        feature1: "",
        feature2: "",
      },
    },
  ]
}
