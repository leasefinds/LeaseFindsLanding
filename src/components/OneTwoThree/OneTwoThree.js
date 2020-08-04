import React from "react"
import { graphql } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"
import { AnchorLink as Link } from "gatsby-plugin-anchor-links"
import styles from "./OneTwoThree.module.scss"

export const fragment = graphql`
  fragment OneTwoThree on WPGraphQL_Page_Sectionfields_Sections_OneTwoThree {
    id
    contentone
    contenttwo
    contentthree
  }
`

const OneTwoThree = ({ id, contentone, contenttwo, contentthree, path }) => {
  return (
    <section id={id ? id : null} className={styles.Section}>
      <Container>
        <Row className={styles.Row}>
          <Col className={styles.Col} md={4}>
            <Link to={`${path}#quiz`}>
              <div
                className={styles.Content}
                dangerouslySetInnerHTML={{ __html: contentone }}
              ></div>
            </Link>
          </Col>
          <Col className={styles.Col} md={4}>
            <div
              className={styles.Content}
              dangerouslySetInnerHTML={{ __html: contenttwo }}
            ></div>
          </Col>
          <Col className={styles.Col} md={4}>
            <div
              className={styles.Content}
              dangerouslySetInnerHTML={{ __html: contentthree }}
            ></div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default OneTwoThree
