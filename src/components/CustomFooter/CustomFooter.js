import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import styles from "./CustomFooter.module.scss"
import { Link, graphql } from "gatsby"

export const fragment = graphql`
  fragment CustomFooter on WPGraphQL_Page_Sectionfields_Sections_CustomFooter {
    text
    links {
      label
      url
    }
  }
`

const CustomFooter = ({ text, links }) => {
  return (
    <section className={styles.Section}>
      <Container>
        <Row>
          <Col>
            <div dangerouslySetInnerHTML={{ __html: text }}></div>
            <ul>
              {links
                ? links.map((item, index) => (
                    <li key={index}>
                      <Link to={item.url}>{item.label}</Link>
                    </li>
                  ))
                : null}
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default CustomFooter
