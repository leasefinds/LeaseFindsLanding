import React from "react"
import { graphql } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"
import Img from "gatsby-image"

import styles from "./Blog.module.scss"

export const fragment = graphql`
  fragment Blog on WPGraphQL_Page_Sectionfields_Sections_Blog {
      id
    content
    posts {
      content
      image {
        sourceUrl
        altText
        imageFile {
          childImageSharp {
            fluid(quality: 100, maxWidth: 320) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`

const Blog = ({ id, content, posts, path }) => {
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

        {posts
          ? posts.map((item, index) => (
              <Row key={index}>
                <Col className={styles.Col} md={4}>
                  <Img
                    fluid={item.image.imageFile.childImageSharp.fluid}
                    alt={item.image.altText}
                  />
                </Col>

                <Col
                  className={styles.Col}
                  md={{ span: 8, offset: 0 }}
                  lg={{ span: 7, offset: 1 }}
                >
                  <div className={styles.Entry}>
                    <div
                      className={styles.EntryContent}
                      dangerouslySetInnerHTML={{ __html: item.content }}
                    ></div>

                    <span className={styles.Fbtn}>{`Read more >`}</span>
                  </div>
                </Col>
              </Row>
            ))
          : null}
      </Container>
    </section>
  )
}

export default Blog
