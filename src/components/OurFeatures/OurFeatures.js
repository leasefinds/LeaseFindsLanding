import React from "react"
import { graphql } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"
import Img from "gatsby-image"

import styles from "./OurFeatures.module.scss"

export const fragment = graphql`
  fragment OurFeatures on WPGraphQL_Page_Sectionfields_Sections_OurFeatures {
    title
    features {
      text
      icon {
        sourceUrl
        altText
        imageFile {
          childImageSharp {
            fixed(width: 74) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`

const OurFeatures = ({ title, features }) => {
  const featuresCols = features
    ? features.map((item, index) => (
        <Col key={index} md={4}>
          <div className={styles.ColumnInner}>
            {item.icon ? (
              <Img
                key={index}
                className={styles.Image}
                fixed={item.icon.imageFile.childImageSharp.fixed}
                alt={item.icon.altText}
                imgStyle={{ objectFit: "contain" }}
              />
            ) : null}

            <div dangerouslySetInnerHTML={{ __html: item.text }}></div>
          </div>
        </Col>
      ))
    : null

  return (
    <section className={styles.Section}>
      <Container className={styles.Container}>
        <Row>
          <Col dangerouslySetInnerHTML={{ __html: title }}></Col>
        </Row>
        <Row>{featuresCols}</Row>
      </Container>
    </section>
  )
}

export default OurFeatures
