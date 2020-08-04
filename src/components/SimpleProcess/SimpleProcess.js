import React from "react"
import { graphql } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"
import Img from "gatsby-image"
import { AnchorLink as Link } from "gatsby-plugin-anchor-links"

import styles from "./SimpleProcess.module.scss"

export const fragment = graphql`
  fragment SimpleProcess on WPGraphQL_Page_Sectionfields_Sections_SimpleProcess {
    title
    fontSizeText
    process {
      disabled
      text
      link
      image {
        sourceUrl
        altText
        imageFile {
          childImageSharp {
            fluid(quality: 100, maxWidth: 300) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`

const SimpleProcess = ({ title, process, fontSizeText, path }) => {
  const processCols = process
    ? process.map((item, index) => (
        <Col key={index} md={4}>
          <div className={styles.ColumnInner}>
            <Img
              key={index}
              className={styles.Image}
              fluid={item.image.imageFile.childImageSharp.fluid}
              alt={item.image.altText}
              imgStyle={{ objectFit: "contain" }}
            />
            <div
              style={{ fontSize: fontSizeText }}
              dangerouslySetInnerHTML={{ __html: item.text }}
            ></div>

            {item.link ? <Link className={styles.Link} to={`${path}#${item.link}`}></Link> : null}
            {item.disabled ? (
              <div className={styles.DisabledOverlay}></div>
            ) : null}
          </div>
        </Col>
      ))
    : null

  return (
    <section className={styles.Section}>
      <Container>
        <Row>
          <Col dangerouslySetInnerHTML={{ __html: title }}></Col>
        </Row>
        <Row>{processCols}</Row>
      </Container>
    </section>
  )
}

export default SimpleProcess
