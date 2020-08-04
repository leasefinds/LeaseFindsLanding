import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import styles from "./YourDetailsSteps.module.scss"
import Img from "gatsby-image"
import { graphql } from "gatsby"

export const fragment = graphql`
  fragment YourDetailsSteps on WPGraphQL_Page_Sectionfields_Sections_YourDetailsSteps {
    steps {
      text
      image {
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

const YourDetailsSteps = ({ steps }) => {
  return (
    <section className={styles.Section}>
      <Container>
        <Row>
          {steps
            ? steps.map((item, index) => (
                <Col className={styles.Step} md={4} key={index}>
                  {item.image ? (
                    <Img
                      key={index}
                      className={styles.Image}
                      fixed={item.image.imageFile.childImageSharp.fixed}
                      alt={item.image.altText}
                      imgStyle={{ objectFit: "contain" }}
                    />
                  ) : null}

                  <div dangerouslySetInnerHTML={{ __html: item.text }}></div>
                </Col>
              ))
            : null}
        </Row>
      </Container>
    </section>
  )
}

export default YourDetailsSteps
