import React from "react"
import { graphql } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"
import Img from "gatsby-image"
import { AnchorLink as Link } from "gatsby-plugin-anchor-links"

import styles from "./TextImageCountry.module.scss"

export const fragment = graphql`
  fragment TextImageCountry on WPGraphQL_Page_Sectionfields_Sections_TextImageCountry {
    content
    image {
      sourceUrl
      altText
      imageFile {
        childImageSharp {
          fluid(quality: 100, maxWidth: 402) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
`

const TextImageCountry = ({ content, image, path }) => {
  return (
    <section className={styles.Section}>
      <Container className="container-medium">
        <Row className={styles.Row}>
          <Col md={6}>
            <Img
              className={styles.Image}
              fluid={image.imageFile.childImageSharp.fluid}
              alt={image.altText}
              //   imgStyle={{ objectFit: "contain" }}
            />
          </Col>
          <Col md={6}>
            <div className={styles.Inner}>
              <div
                className={styles.Content}
                dangerouslySetInnerHTML={{ __html: content }}
              ></div>
              <Link
                className="btn btn-light-blue"
                to={`${path}#quiz`}
              >{`Get a quote`}</Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default TextImageCountry
