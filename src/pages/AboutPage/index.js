import React from "react"
import { Card } from "react-bootstrap"

import Layout from "../../components/Layout"
import SEO from "../../components/seo"

import * as S from "./styled"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <S.AboutWrapper>
      <Card
        style={{
          width: "25rem",
          background: "var(--background)",
          marginTop: "25px",
        }}
      >
        <Card.Body>
          <Card.Text>
            I worked on innovative projects that made me gain a lot of
            experience and grow as a professional, I could learn with qualified
            professionals in great companies, contributing from the idealization
            of projects to the production phase. Currently focused on
            technologies with JavaScript and TypeScript. Using React, Node and
            ReactNative frameworks.
          </Card.Text>
        </Card.Body>
      </Card>
    </S.AboutWrapper>
  </Layout>
)

export default AboutPage
