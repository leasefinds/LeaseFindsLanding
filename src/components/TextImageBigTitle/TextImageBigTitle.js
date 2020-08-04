import React from "react"
import { graphql} from "gatsby"
import { Container, Row, Col } from "react-bootstrap"
import Img from "gatsby-image"

import styles from "./TextImageBigTitle.module.scss"

export const fragment = graphql`
  fragment TextImageBigTitle on WPGraphQL_Page_Sectionfields_Sections_TextImageBigTitle {
    title
    content
    imagePosition
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

const TextImageBigTitle = ({ title, content, image, imagePosition }) => {
  const img = image ? (
    <Img
      className={styles.Image}
      fluid={image.imageFile.childImageSharp.fluid}
      alt={image.altText}
      imgStyle={{ objectFit: "contain" }}
    />
  ) : null

  const position =
    imagePosition === "left" ? (
      <Row className={styles.Row}>
        <Col md={6}>{img}</Col>
        <Col md={6}>
          <div
            className={styles.Content}
            dangerouslySetInnerHTML={{ __html: content }}
          ></div>
        </Col>
      </Row>
    ) : (
        <Row className={styles.Row2}>
        <Col md={{span: 10, offset: 1}}>
          <div
            className={styles.Content}
            dangerouslySetInnerHTML={{ __html: content }}
          ></div>
        </Col>
        <Col md={{span: 8, offset: 2}}>{img}</Col>
      </Row>
    )

  return (
    <section className={styles.Section}>
      <Container className={styles.Container}>
        <Row className={styles.Row}>
          <Col dangerouslySetInnerHTML={{ __html: title }}></Col>
        </Row>

        {position}
      </Container>
    </section>
  )
}

export default TextImageBigTitle
