//Images
import zarownyHeaderBg from "./Assets/images/nathan-project-img/nathan-double-color-mockup.png";
import zarownyHeaderMockupBg from "./Assets/images/iphone-mockups2.png";
import zarownyIphone1 from "./Assets/images/nathan-project-img/flat-iphone.png";
import zarownyIphone2 from "./Assets/images/nathan-project-img/macbook1.png";
import zarownyIpad1 from "./Assets/images/nathan-project-img/ipad1.png";

//shoe project
import levitatingiPhone from "./Assets/images/shoe-design-img/levitating.png";
import handMockup from "./Assets/images/shoe-design-img/handMockup.png";

// Music App
import musicAppThumbnail from "./Assets/images/music-app-img/thumbnail-t.png";
import musicAppMockup from "./Assets/images/music-app-img/iphoneMockup2.png";
import musicAppMockup2 from "./Assets/images/music-app-img/iphoneMockup1.png";

// import gameLibrary
import gameLibraryMockup1 from "./Assets/images/game-library-img/iMac-mockup.png";
import gameLibraryMockup2 from "./Assets/images/game-library-img/simple-flat.png";

// import Capture
import captureMock from "./Assets/images/capture-portfolio/capture-mock-full.png";
import captureMockTwo from "./Assets/images/capture-portfolio/capture-mock-full2.png";

// import weather app
import weatherAppCover from "./Assets/images/weather-app/mockup.png";
import weatherAppHeder from "./Assets/images/weather-app/mockup2.png";

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
      url: "/portfolio/weather-app",
      headerCover: weatherAppHeder,
      light: true,
      mockup1: weatherAppCover,
      title: "Weather App - TypeScript & React",
      desc:
        "A project, assigned by Granular.ai as a part of the hiring process. The brief was simple, a two-page app, the first where users will be able to search for a location and will display the current weather and data of the location. On that queried location, users have the ability to favorite that location, and is displayed on the second page.",
      website: "https://granular-ai-weather-app.netlify.app/",
      details: {
        tech: {
          title: "Technologies",
          tech1: {
            title: "React",
            desc:
              "The site is created using the JavaScript library React. Using React gives the ability to easily maintain and update frequently to give the most up to date information about the artist to his fans. ",
          },
          tech2: {
            title: "TypeScript",
            desc:
              "Using the modern language to use strict typing made using props more robust and more bug protected. The development process couldn't have been more efficient when it came to debugging.",
          },
          tech3: {
            title: "Redux & OpenWeatherAPI",
            desc:
              "Obviously the app was ran off of some weather api, I chose OpenWeatherAPI. With the documentation, it was very easy to implement and set up redux to manage the state throughout the app.",
          },
        },
        design: {
          title: "Design",
          p1:
            "The design is very minimalistic, due to there only being two pages to the app, as well as the colors. With this project, I more focused on the functionality over the design. The main objective was to have the proper functionality and to have the feel as an app.",
        },
      },
      story: {
        title: "01 Story Behind",
        p1:
          "This project was given as an assignment from a company called Granular.ai as a part of the hiring process. The strictly gave me a brief of all the functionality. It was to prove more of what I could do during the development process, how to have a app-like feel especially with client-side rendering.",
      },
      features: {
        featuresMockup: weatherAppCover,
        featuresMockup2: weatherAppHeder,
        featuresMockup3: weatherAppCover,
        feature1: "",
        feature2: "",
      },
    },
    {
      url: "/portfolio/capture-portfolio",
      headerCover: captureMock,
      light: true,
      mockup1: captureMockTwo,
      title: "Capture - Mock Business Portfolio",
      desc: "A film business displaying movies, photography, and art work.",
      website: "https://capture-portfolio-site-mock.netlify.app/",
      details: {
        tech: {
          title: "Technologies",
          tech1: {
            title: "React",
            desc:
              "The site has the feeling of an app with the features using React such as smooth animations when navigating through the page. The seamless traversing through different pages.",
          },
          tech2: {
            title: "Framer Motion",
            desc:
              "Framer Motion is a very extensive JavaScript library that allows the easy development of smooth animations. Shown on this project it is very customizable, manipulating SVGs and the animation when switching pages.",
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
            "The design was not a big feature when designing this project. Strictly to start working with Framer Motion. Though, the switch between a lighter color scheme and a darker gives a very modern feeling.",
        },
      },
      story: {
        title: "01 Story Behind",
        p1:
          "This project was purely experimental with using different libraries and workflows. With this I've learned how to manipulate Framer Motion to animate how I want it to. I thought that being able to animate a website will give me an edge knowing that animations are the trend that catches most people's eyes.",
      },
      features: {
        featuresMockup: captureMock,
        featuresMockup2: captureMockTwo,
        featuresMockup3: captureMock,
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
  ];
};
