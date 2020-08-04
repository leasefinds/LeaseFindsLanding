import React from "react"
import { graphql } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"
import Img from "gatsby-image"

import styles from "./FeaturedOn.module.scss"

export const fragment = graphql`
  fragment FeaturedOn on WPGraphQL_Page_Sectionfields_Sections_FeaturedOn {
    title
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

const FeaturedOn = ({ title, imageList }) => {
  return (
    <section className={styles.Section}>
      <Container fluid className={styles.TitleContainer}>
        <Row>
          <Col dangerouslySetInnerHTML={{ __html: title }}></Col>
        </Row>
      </Container>
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

export default FeaturedOn
