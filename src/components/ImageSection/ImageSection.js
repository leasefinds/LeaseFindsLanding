import React from "react"
import { graphql } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"
import Img from "gatsby-image"

import styles from "./ImageSection.module.scss"

export const fragment = graphql`
  fragment ImageSection on WPGraphQL_Page_Sectionfields_Sections_Image {
    image {
      sourceUrl
      altText
      imageFile {
        childImageSharp {
          fluid(quality: 100, maxWidth: 807) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

const ImageSection = ({ image }) => {
  const img = image.sourceUrl ? image : null
  return (
    <section className={styles.Section}>
      <Container>
        <Row>
          <Col>
            <Img
              className={styles.Image}
              fluid={img.imageFile.childImageSharp.fluid}
              alt={img.altText}
              //   imgStyle={{ objectFit: "contain" }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default ImageSection
