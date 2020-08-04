import React from "react"
import { graphql } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"

import styles from "./TextCenter.module.scss"

export const fragment = graphql`
  fragment TextCenter on WPGraphQL_Page_Sectionfields_Sections_TextCenter {
    id
    content
  }
`

const TextCenter = ({ id, content }) => {
  return (
    <section id={id ? id : null} className={styles.Section}>
      <Container>
        <Row className={styles.Row}>
          <Col>
            <div
              className={styles.Content}
              dangerouslySetInnerHTML={{ __html: content }}
            ></div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default TextCenter
