import React from 'react'
import { Card, Row, Col } from 'react-bootstrap'
import styled from 'styled-components'
import media from 'styled-media-query'

import Particles from 'react-particles-js'
import { configParticles } from '../config/config-particles'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import SocialLinks from '../components/SocialLinks'

import { aboutContent } from '../utils/content-about'

const AboutWrapper = styled.div`
  color: var(--texts);
  display: flex;
  justify-content: center;
  align-content: center;
`

const ResponsiveRow = styled(Row)`
  align-items: center;
  display: flex;
  justify-content: space-around;
  ${media.lessThan('large')`
    flex-direction: column;
  `}
`

const OurParticles = styled(Particles)`
  background: var(--background);
`

const renderAboutContent = () =>
  aboutContent.map((item, index) => (
    <div key={index}>
      <ResponsiveRow
        style={{
          marginTop: index === 0 ? '30px' : '0px',
          marginBottom: aboutContent.length === index + 1 ? '30px' : '0px'
        }}
      >
        <div>
          <Col xs={6} md={4}>
            {item.component}
          </Col>
        </div>
        <Col xs={10} md={8}>
          <Card
            style={{
              maxWidth: '200rem',
              background: 'var(--cardBackground)',
              border: '3px solid var(--cardBorder)',
              color: 'var(--texts)'
            }}
          >
            <Card.Body>
              <Card.Title style={{ fontSize: '1.1rem', fontWeight: '600' }}>
                {item.title}
              </Card.Title>
              <Card.Text>{item.text}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </ResponsiveRow>
      {index === 0 && (
        <AboutWrapper
          key={index}
          style={{ color: 'var(--point)', fontSize: '25px' }}
        >
          •
        </AboutWrapper>
      )}
      {index !== 0 && aboutContent.length !== index + 1 && (
        <>
          <AboutWrapper style={{ color: 'var(--point)', fontSize: '25px' }}>
            •
          </AboutWrapper>
          <AboutWrapper style={{ color: 'var(--point)', fontSize: '25px' }}>
            •
          </AboutWrapper>
          <AboutWrapper style={{ color: 'var(--point)', fontSize: '25px' }}>
            •
          </AboutWrapper>
        </>
      )}
    </div>
  ))

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="About" />
      <div style={{ marginTop: '30px' }}>
        <SocialLinks cellDisplay={true} />
      </div>
      <OurParticles
        style={{
          position: 'fixed',
          zIndex: 0,
          animation: 'fadein 52s'
        }}
        params={configParticles}
      />
      {renderAboutContent()}
    </Layout>
  )
}

export default AboutPage
