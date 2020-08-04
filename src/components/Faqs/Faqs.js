import React from "react"
import { graphql } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"

import styles from "./Faqs.module.scss"

export const fragment = graphql`
  fragment Faqs on WPGraphQL_Page_Sectionfields_Sections_Faqs {
    id
    title
    style
    questions {
      title
      content
    }
  }
`

const Faqs = ({ id, title, questions, style }) => {
  const faq1 =
    style === "style1" && questions ? (
      <Row>
        <Col>
          {questions.map((item, index) => (
            <div className={styles.Wrapper1} key={index}>
              <div
                className={styles.Title}
                dangerouslySetInnerHTML={{ __html: item.title }}
              ></div>
              <div
                className={styles.Content}
                dangerouslySetInnerHTML={{ __html: item.content }}
              ></div>
            </div>
          ))}
        </Col>
      </Row>
    ) : null

  const faq2 =
    style === "style2" && questions ? (
      <Row>
        <Col>
          {questions.map((item, index) => (
            <div className={styles.Wrapper2} key={index}>
              <div
                className={styles.Title}
                dangerouslySetInnerHTML={{ __html: item.title }}
              ></div>
              <div
                className={styles.Content}
                dangerouslySetInnerHTML={{ __html: item.content }}
              ></div>
            </div>
          ))}
        </Col>
      </Row>
    ) : null

  const faq3 =
    style === "style3" && questions ? (
      <Row>
        <Col md={6}>
          {questions.slice(0, questions.length / 2).map((item, index) => (
            <div className={styles.Wrapper3} key={index}>
              <div
                className={styles.Title}
                dangerouslySetInnerHTML={{ __html: item.title }}
              ></div>
              <div
                className={styles.Content}
                dangerouslySetInnerHTML={{ __html: item.content }}
              ></div>
            </div>
          ))}
        </Col>

        <Col md={6}>
          {questions
            .slice(questions.length / 2, questions.length)
            .map((item, index) => (
              <div className={styles.Wrapper3} key={index}>
                <div
                  className={styles.Title}
                  dangerouslySetInnerHTML={{ __html: item.title }}
                ></div>
                <div
                  className={styles.Content}
                  dangerouslySetInnerHTML={{ __html: item.content }}
                ></div>
              </div>
            ))}
        </Col>
      </Row>
    ) : null

  const titleRow =
    style === "style2" || style === "style3" ? (
      <Row>
        <Col
          className={styles.MainTitle}
          dangerouslySetInnerHTML={{ __html: title }}
        ></Col>
      </Row>
    ) : null

  return (
    <section
      id={id ? id : null}
      style={{
        paddingTop: style === "style1" ? 100 : null,
        paddingBottom: style === "style1" ? 20 : null,
      }}
      className={styles.Section}
    >
      <Container>
        {titleRow}
        {faq1}
        {faq2}
        {faq3}
      </Container>
    </section>
  )
}

export default Faqs
