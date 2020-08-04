import React from "react"
import PropTypes from "prop-types"
import Header from "./Header/Header"
import Footer from "./Footer/Footer"
import "./layout.scss"



const Layout = ({ children, location, showMenu, showFooter }) => {
  return (
    <>
      <Header showMenu={showMenu} location={location} />
      <main>{children}</main>
      <Footer showFooter={showFooter} />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
