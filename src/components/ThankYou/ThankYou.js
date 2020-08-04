import React from "react"
import { graphql } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"
import Img from "gatsby-image"

import styles from "./ThankYou.module.scss"

export const fragment = graphql`
  fragment ThankYou on WPGraphQL_Page_Sectionfields_Sections_ThankYou {
    content
    step1 {
      title
      text
    }
    step2 {
      title
      text
    }
    info {
      text
      image {
        sourceUrl
        altText
        imageFile {
          childImageSharp {
            fluid(quality: 100, maxWidth: 335, maxHeight: 202) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`

const ThankYou = ({ content, step1, step2, info }) => {
  return (
    <section className={styles.Section}>
      <Container className={styles.Container}>
        <Row className={styles.Row}>
          <Col
            className={styles.Content}
            dangerouslySetInnerHTML={{ __html: content }}
          ></Col>
        </Row>

        <Row className={styles.StepRow}>
          <Col className={styles.MarginMobile}  md={6}>
            <div className={styles.Inner1}>
              <strong className={styles.Title}>{step1.title}</strong>
              <p>{step1.text}</p>
            </div>
          </Col>

          <Col md={6}>
            <div className={styles.Inner2}>
              <strong className={styles.Title}>{step2.title}</strong>
              <p>{step2.text}</p>
            </div>
          </Col>
        </Row>

        <Row className={styles.InfoRow}>
          <Col>
            <div className={styles.Inner3}>
              <div className={styles.Img}>
                {info.image ? (
                  <Img
                    className={styles.Image}
                    fluid={info.image.imageFile.childImageSharp.fluid}
                    alt={info.image.altText}
                    imgStyle={{ objectFit: "contain" }}
                  />
                ) : null}
              </div>
              <div className={styles.Text}>
                <p>{info.text}</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default ThankYou
