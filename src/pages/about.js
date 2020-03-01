import React from "react"
import { Card, Row, Col } from "react-bootstrap"
import styled from "styled-components"
import media from "styled-media-query"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import { aboutContent } from "../utils/content-about"

const AboutWrapper = styled.div`
  color: var(--texts);
  display: flex;
  justify-content: center;
  align-content: center;
`
const DisappearLogo = styled.div`
  ${media.lessThan("large")`
    display: none;
  `}
`

const renderAboutContent = () =>
  aboutContent.map((item, index) => (
    <div key={index}>
      <AboutWrapper
        style={{
          marginBottom: aboutContent.length === index + 1 ? "20px" : "10px",
          marginTop: index === 0 ? "20px" : "10px",
        }}
      >
        <Row style={{ alignItems: "center" }}>
          <DisappearLogo>
            <Col xs={6} md={4}>
              {item.component}
            </Col>
          </DisappearLogo>
          <Col xs={6} md={4}>
            <Card
              style={{
                width: "20rem",
                background: "var(--background)",
                border: "3px solid rgba(0,0,0,.4)",
              }}
            >
              <Card.Body>
                <Card.Title style={{ fontSize: "1.1rem", fontWeight: "600" }}>
                  {item.title}
                </Card.Title>
                <Card.Text>{item.text}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </AboutWrapper>
      {index === 0 && <AboutWrapper key={index}>•</AboutWrapper>}
      {index !== 0 && aboutContent.length !== index + 1 && (
        <>
          <AboutWrapper>•</AboutWrapper>
          <AboutWrapper>•</AboutWrapper>
          <AboutWrapper>•</AboutWrapper>
        </>
      )}
    </div>
  ))

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="About" />
      {renderAboutContent()}
    </Layout>
  )
}

export default AboutPage
