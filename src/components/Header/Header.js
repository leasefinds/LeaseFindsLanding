import React from "react"
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { AnchorLink as Link } from "gatsby-plugin-anchor-links"

import styles from "./Header.module.scss"

const Header = ({ location, showMenu = false}) => {
  const data = useStaticQuery(graphql`
    query headerQuery {
      wpgraphql {
        menu(id: "main-menu", idType: NAME) {
          menuItems {
            edges {
              node {
                id
                label
                url
              }
            }
          }
        }
        page(id: "global-information", idType: URI) {
          id
          globalFields {
            header {
              secureLogo {
                sourceUrl
                imageFile {
                  childImageSharp {
                    fluid(quality: 100, maxWidth: 150) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
              siteLogo {
                sourceUrl
                altText
                imageFile {
                  childImageSharp {
                    fluid(quality: 100, maxWidth: 400) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  const logo = data.wpgraphql.page.globalFields.header.siteLogo
  const logoSecure = data.wpgraphql.page.globalFields.header.secureLogo

  const menu = data.wpgraphql.menu.menuItems.edges

  // const showMenu = location.pathname.includes("quiz")


  return (
    <header>
      <div className={styles.Top}>
        <Container>
          <Row className={styles.TopRow}>
            <Col xs={7}>
              <Img
                className={styles.Logo}
                fluid={logo.imageFile.childImageSharp.fluid}
                alt={logo.altText}
                loading="eager"
                imgStyle={{ objectFit: "contain" }}
              />
            </Col>
            <Col xs={5} className={styles.SecureWrapper}>
              <Img
                className={`${styles.SecureLogo} ${showMenu ? styles.SecureMargin : ''}`}
                fluid={logoSecure.imageFile.childImageSharp.fluid}
                alt={logoSecure.altText}
                imgStyle={{ objectFit: "contain" }}
              />
            </Col>
          </Row>
        </Container>
      </div>
      {showMenu ? (
        <div className={styles.Menu}>
          <Container>
            <Row className={styles.MenuRow}>
              <Col className={styles.SecureWrapper}>
                <Navbar collapseOnSelect expand="md" className={styles.Navbar}>
                  <Navbar.Toggle
                    className={styles.Toggle}
                    aria-controls="responsive-navbar-nav"
                  />
                  <Navbar.Collapse
                    className={styles.Collapse}
                    id="responsive-navbar-nav"
                  >
                    <Nav className="mr-auto">
                      {menu.map(({ node }, index) => (
                        // <Nav.Link
                        //   as={Link}
                        //   to={`${location.pathname}${node.url}`}
                        // >
                        //   {node.label}

                        // </Nav.Link>
                        <Link
                          key={index}
                          to={`${location.pathname}${node.url}`}
                        >
                          {node.label}
                        </Link>
                      ))}
                    </Nav>
                  </Navbar.Collapse>
                </Navbar>
              </Col>
            </Row>
          </Container>
        </div>
      ) : null}
    </header>
  )
}

export default Header
