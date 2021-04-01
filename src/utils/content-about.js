import React from "react"
import PagLogo from "../components/Logos/PagLogo"
import WillLogo from "../components/Logos/WillLogo"
import InflorLogo from "../components/Logos/InflorLogo"
import TechParkLogo from "../components/Logos/TechParkLogo"
import MyAvatar from "../components/Logos/MyAvatar"

export const aboutContent = [
  {
    key: 1,
    component: <MyAvatar />,
    title: "A little about myself ✌🏻...",
    text:
      "My name is Henrique Rocha Serrano. I worked on innovative projects that made me gain a lot of experience and grow as a professional, I could learn with qualified professionals in great companies, contributing from the idealization of projects to the production phase. Currently focused on technologies with JavaScript and TypeScript. Using React, Node and ReactNative frameworks. My hobbies are studying game development, mainly with the Phaser structure and creating pixel art :D",
  },
  {
    key: 2,
    component: <WillLogo />,
    title: "Dezember, 2019 - April, 2021 • 1 year and 5 months",
    text:
      "Will bank is a fintech created by pag! I work as a Full Stack Engineer, we are building web applications for internal systems (backoffice) with React / Node / NestJS / Redux / Ant Design / TypeScript / Less / Jest / Enzyme / Storybook / GitFlow / Jira / SCRUM. I also participate in the maintenance of internal systems using the Java ecosystem, mainly with Spring Framework. I also worked on the development of the banking application, using Flutter. \n" +
      "\nCurrently my focus is on creating new features and maintaining our new internal system. In which I participated in the entire development phase. Using React and NestJS.",
  },
  {
    key: 3,
    component: <PagLogo />,
    title: "Dezember, 2019 - September, 2020 • 10 months",
    text:
      "I worked as a Full Stack Developer, we build web applications for internal systems with React / Node / NestJS / Redux / Ant Design / TypeScript / Less / Jest / Enzyme / Storybook / GitFlow / Jira / SCRUM. I also participate in the maintenance of internal systems using the Java ecosystem, mainly with Spring Framework. I also worked on the development of the banking application, using Flutter.",
  },
  {
    key: 4,
    component: <InflorLogo />,
    title: "August, 2019 - November, 2019 • 4 months",
    text:
      "I worked as a Front-end Developer with development of responsive web systems for forest and agricultural management using Vue.js, Vue Router, Vuex , Vuetify and Sass. We also use Git Flow, JIRA and SCRUM.",
  },
  {
    key: 5,
    component: <TechParkLogo />,
    title: "July, 2018 - August, 2019 • 1 year and 2 months",
    text:
      "I worked as a Full Stack Developer with back-end and mobile development, in our development team I was responsible for our microservices. Our main product was a web system for driving schools, with an app for the instructor to apply the hands-on classes and then upload them to Detran. In this project I was responsible for developing the APIs in NodeJS, our MongoDB and PostgreSQL databases, with all architecture in AWS. I was also responsible for developing an app using Flutter for the student to manage their theoretical and practical classes.",
  },
]
