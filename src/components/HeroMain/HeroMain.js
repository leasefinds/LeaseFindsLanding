import React from "react"
import { graphql, Link } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"
import Img from "gatsby-image"

import styles from "./HeroMain.module.scss"

export const fragment = graphql`
  fragment HeroMain on WPGraphQL_Page_Sectionfields_Sections_HeroMain {
    content
    buttonLabel
    buttonLink
    image {
      sourceUrl
      altText
      imageFile {
        childImageSharp {
          fluid(quality: 100, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
`

const HeroMain = ({ content, image, buttonLabel, buttonLink }) => {
  const imageRight = image ? image : null

  return (
    <section className={styles.Section}>
      <Container>
        <Row className={styles.Row}>
          <Col md={5}>
            <div className={styles.Content} dangerouslySetInnerHTML={{ __html: content }}></div>
            <Link className='btn btn-blue' to={buttonLink}>{buttonLabel}</Link>
          </Col>

          <Col className={styles.ImageCol} md={7}>
            <Img
              className={styles.Image}
              fluid={imageRight.imageFile.childImageSharp.fluid}
              alt={imageRight.altText}
            />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default HeroMain
