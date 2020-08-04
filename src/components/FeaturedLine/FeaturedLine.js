import React from "react"
import { graphql } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"
import Img from "gatsby-image"

import styles from "./FeaturedLine.module.scss"

export const fragment = graphql`
  fragment FeaturedLine on WPGraphQL_Page_Sectionfields_Sections_FeaturedLine {
    imageList {
      image {
        sourceUrl
        altText
        imageFile {
          childImageSharp {
            fixed(width: 303) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`

const FeaturedLine = ({  imageList }) => {
  return (
    <section className={styles.Section}>
      <Container>
        <Row>
          <Col className={styles.ImageListWrapper}>
            {imageList
              ? imageList.map(({ image }, index) => (
                  <Img
                    key={index}
                    className={styles.Image}
                    fixed={image.imageFile.childImageSharp.fixed}
                    alt={image.altText}
                    imgStyle={{ objectFit: "contain" }}
                  />
                ))
              : null}
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default FeaturedLine
