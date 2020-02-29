import React from "react"
import { Card, Row, Col } from "react-bootstrap"
import styled from "styled-components"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import PagLogo from "../components/Logos/PagLogo"
import InflorLogo from "../components/Logos/InflorLogo"
import TechParkLogo from "../components/Logos/TechParkLogo"
import MyAvatar from "../components/Logos/MyAvatar"

const AboutWrapper = styled.div`
  color: var(--texts);
  display: flex;
  justify-content: center;
  align-content: center;
`

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="About" />
      <AboutWrapper style={{ marginBottom: "10px" }}>
        <Row style={{ alignItems: "center" }}>
          <Col xs={6} md={4}>
            <MyAvatar />
          </Col>
          <Col xs={6} md={4}>
            <Card
              style={{
                width: "25rem",
                background: "var(--background)",
                marginTop: "25px",
                border: "3px solid rgba(0,0,0,.4)",
              }}
            >
              <Card.Body>
                <Card.Title>A little about myself ✌🏻...</Card.Title>
                <Card.Text>
                  My name is Henrique Rocha Serrano. I worked on innovative
                  projects that made me gain a lot of experience and grow as a
                  professional, I could learn with qualified professionals in
                  great companies, contributing from the idealization of
                  projects to the production phase. Currently focused on
                  technologies with JavaScript and TypeScript. Using React, Node
                  and ReactNative frameworks.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </AboutWrapper>
      <AboutWrapper>•</AboutWrapper>
      <AboutWrapper style={{ marginTop: "10px", marginBottom: "10px" }}>
        <Row style={{ alignItems: "center" }}>
          <Col xs={6} md={4}>
            <PagLogo />
          </Col>
          <Col xs={6} md={4}>
            <Card
              style={{
                width: "25rem",
                background: "var(--background)",
                border: "3px solid rgba(0,0,0,.4)",
              }}
            >
              <Card.Body>
                <Card.Title>
                  Dezember, 2019 - at the moment • 4 months
                </Card.Title>

                <Card.Text>
                  I work as Full Stack Developer. We are building web
                  applications for internal systems with Node / React / Redux /
                  Ant Design / Less / Jest / Enzyme / Storybook / GitFlow /
                  Trello / SCRUM.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </AboutWrapper>
      <AboutWrapper>•</AboutWrapper>
      <AboutWrapper>•</AboutWrapper>
      <AboutWrapper>•</AboutWrapper>
      <AboutWrapper style={{ marginTop: "10px", marginBottom: "10px" }}>
        <Row style={{ alignItems: "center" }}>
          <Col xs={6} md={4}>
            <InflorLogo />
          </Col>
          <Col xs={6} md={4}>
            <Card
              style={{
                width: "25rem",
                background: "var(--background)",
                border: "3px solid rgba(0,0,0,.4)",
              }}
            >
              <Card.Body>
                <Card.Title>
                  August, 2019 - November, 2019 • 3 months
                </Card.Title>
                <Card.Text>
                  I worked as Front End Delevoper, with development of
                  responsive web systems for forest and agricultural management
                  using Vue.js, Vue Router, Vuex , Vuetify and Sass. We also use
                  Git Flow, JIRA and SCRUM.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </AboutWrapper>
      <AboutWrapper>•</AboutWrapper>
      <AboutWrapper>•</AboutWrapper>
      <AboutWrapper>•</AboutWrapper>
      <AboutWrapper style={{ marginTop: "10px", marginBottom: "10px" }}>
        <Row style={{ alignItems: "center" }}>
          <Col xs={6} md={4}>
            <TechParkLogo />
          </Col>
          <Col xs={6} md={4}>
            <Card
              style={{
                width: "25rem",
                background: "var(--background)",
                border: "3px solid rgba(0,0,0,.4)",
              }}
            >
              <Card.Body>
                <Card.Title>
                  July, 2018 - August, 2019 • 1 year and 2 months
                </Card.Title>
                <Card.Text>
                  I worked as Full Stack Developer, with backend and mobile
                  development, in our development team I was responsible for our
                  microservices. Our main product was a web system for driving
                  schools, with an app for the instructor to apply the hands-on
                  classes and then upload them to Detran. In this project I was
                  responsible for developing the APIs in NodeJS, our MongoDB and
                  PostgreSQL databases, with all architecture in AWS. I was also
                  responsible for developing an app using Flutter for the
                  student to manage their theoretical and practical classes.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </AboutWrapper>
    </Layout>
  )
}

export default AboutPage
