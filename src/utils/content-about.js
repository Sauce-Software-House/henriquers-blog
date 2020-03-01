import React from "react"
import PagLogo from "../components/Logos/PagLogo"
import InflorLogo from "../components/Logos/InflorLogo"
import TechParkLogo from "../components/Logos/TechParkLogo"
import MyAvatar from "../components/Logos/MyAvatar"

export const aboutContent = [
  {
    component: <MyAvatar />,
    title: "A little about myself ✌🏻...",
    text:
      "My name is Henrique Rocha Serrano. I worked on innovative projects that made me gain a lot of experience and grow as a professional, I could learn with qualified professionals in great companies, contributing from the idealization of projects to the production phase. Currently focused on technologies with JavaScript and TypeScript. Using React, Node and ReactNative frameworks.",
  },
  {
    component: <PagLogo />,
    title: "Dezember, 2019 - at the moment • 4 months",
    text:
      "I work as Full Stack Developer. We are building web applications for internal systems with Node / React / Redux / Ant Design / Less / Jest / Enzyme / Storybook / GitFlow / Trello / SCRUM.",
  },
  {
    component: <InflorLogo />,
    title: "August, 2019 - November, 2019 • 3 months",
    text:
      "I worked as Front End Delevoper, with development of responsive web systems for forest and agricultural management using Vue.js, Vue Router, Vuex , Vuetify and Sass. We also use Git Flow, JIRA and SCRUM.",
  },
  {
    component: <TechParkLogo />,
    title: "July, 2018 - August, 2019 • 1 year and 2 months",
    text:
      "I worked as Full Stack Developer, with backend and mobile development, in our development team I was responsible for our microservices. Our main product was a web system for driving schools, with an app for the instructor to apply the hands-on classes and then upload them to Detran. In this project I was responsible for developing the APIs in NodeJS, our MongoDB and PostgreSQL databases, with all architecture in AWS. I was also responsible for developing an app using Flutter for the student to manage their theoretical and practical classes.",
  },
]
