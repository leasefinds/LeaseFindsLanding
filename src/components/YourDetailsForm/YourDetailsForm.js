import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import DForm from "./DForm"
import styles from "./YourDetailsForm.module.scss"
import { graphql } from "gatsby"

export const fragment = graphql`
  fragment YourDetailsForm on WPGraphQL_Page_Sectionfields_Sections_YourDetailsForm {
    content
    list {
      text
    }
  }
`

const YourDetailsForm = ({ content, list }) => {
  return (
    <section className={styles.Section}>
      <Container>
        <Row>
          <Col md={6}>
            <div
              dangerouslySetInnerHTML={{ __html: content }}
              className={styles.Content}
            ></div>

            <div className={styles.Line}></div>
          </Col>
          <Col md={6}>
            <DForm />
          </Col>
        </Row>
        <Row>
          <Col lg={9} md={11}>
            <ul>
              {list
                ? list.map((item, index) => (
                    <li
                      key={index}
                      dangerouslySetInnerHTML={{ __html: item.text }}
                    ></li>
                  ))
                : null}
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default YourDetailsForm
