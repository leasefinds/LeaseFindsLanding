import React from "react"
import { graphql } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"
import Img from "gatsby-image"

import { AnchorLink as Link } from "gatsby-plugin-anchor-links"

import styles from "./OurServices.module.scss"

export const fragment = graphql`
  fragment OurServices on WPGraphQL_Page_Sectionfields_Sections_OurServices {
      id
    content
    services {
      text
      image {
        sourceUrl
        altText
        imageFile {
          childImageSharp {
            fluid(quality: 100, maxWidth: 357) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`

const OurServices = ({ id, content, services, path }) => {
  return (
    <section id={id ? id : null} className={styles.Section}>
      <Container>
        <Row>
          <Col>
            <div
              className={`text-center ${styles.Content}`}
              dangerouslySetInnerHTML={{ __html: content }}
            ></div>
          </Col>
        </Row>

        <Row>
          {services
            ? services.map((item, index) => (
                <Col className={styles.Col} key={index} md={4}>
                  <div className={styles.ColContainer}>
                    <div className={styles.Overlay}>
                
                      <p className={`text-center ${styles.Text}`}>
                        {item.text}
                      </p>

                      <Link
                        className="btn btn-light-blue"
                        to={`${path}#quiz`}
                      >{`I'm interested >`}</Link>
                    </div>

                    <Img
                      fluid={item.image.imageFile.childImageSharp.fluid}
                      alt={item.image.altText}
                    />
                  </div>
                </Col>
              ))
            : null}
        </Row>
      </Container>
    </section>
  )
}

export default OurServices
