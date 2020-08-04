import React from "react"
import { graphql, Link } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"
import Img from "gatsby-image"

import styles from "./TextWithImage.module.scss"

export const fragment = graphql`
  fragment TextWithImage on WPGraphQL_Page_Sectionfields_Sections_TextWithImage {
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

const TextWithImage = ({ content, image, buttonLabel, buttonLink }) => {
  const img = image ? image : null

  return (
    <section className={styles.Section}>
      <Container>
        <Row className={styles.Row}>
          <Col md={6}>
            <Img
              className={styles.Image}
              fluid={img.imageFile.childImageSharp.fluid}
              alt={img.altText}
              imgStyle={{ objectFit: "contain" }}
            />
          </Col>

          <Col md={6}>
            <div dangerouslySetInnerHTML={{ __html: content }}></div>
            <Link className="btn btn-blue" to={buttonLink}>
              {buttonLabel}
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default TextWithImage
