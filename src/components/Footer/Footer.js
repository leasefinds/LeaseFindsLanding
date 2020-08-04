import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { useStaticQuery, graphql, Link } from "gatsby"

import styles from "./Footer.module.scss"

const Footer = ({ showFooter = true}) => {
  const data = useStaticQuery(graphql`
    query footerQuery {
      wpgraphql {
        page(id: "global-information", idType: URI) {
          id
          globalFields {
            footer {
              disclaimer
              usefulLinks {
                name
                url
              }
            }
          }
        }
      }
    }
  `)

  const disclaimer = data.wpgraphql.page.globalFields.footer.disclaimer
  const usefulLinks = data.wpgraphql.page.globalFields.footer.usefulLinks
    ? data.wpgraphql.page.globalFields.footer.usefulLinks
    : null


  return (
    <>
      {showFooter ? (
        <footer className={styles.Footer}>
          <Container>
            <Row>
              <Col className={styles.DisclaimerCol} md={{ span: 5, offset: 2 }}>
                <h3>
                  <strong>Disclaimer</strong>
                </h3>

                <div
                  className={styles.Disclaimer}
                  dangerouslySetInnerHTML={{ __html: disclaimer }}
                ></div>
              </Col>
              <Col xs={12} md={{ span: 2, offset: 1 }}>
                <h3>
                  <strong>Useful Links</strong>
                </h3>
                <ul>
                  {usefulLinks.map((item, index) => (
                    <li key={index}>
                      <Link to={item.url}>{item.name}</Link>
                    </li>
                  ))}
                </ul>
              </Col>
            </Row>
          </Container>
        </footer>
      ) : null}
    </>
  )
}

export default Footer
