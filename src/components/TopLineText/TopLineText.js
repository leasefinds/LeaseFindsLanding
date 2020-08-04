import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { graphql } from "gatsby"

import styles from "./TopLineText.module.scss"

export const fragment = graphql`
  fragment TopLineText on WPGraphQL_Page_Sectionfields_Sections_TopLineText {
    text
  }
`

const TopLineText = ({ text }) => {
  return (
    <section className={styles.Section}>
      <Container>
        <Row>
          <Col dangerouslySetInnerHTML={{ __html: text }}></Col>
        </Row>
      </Container>
    </section>
  )
}

export default TopLineText
