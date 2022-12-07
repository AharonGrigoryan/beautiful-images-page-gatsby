import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import "./layout.css"
import Navbar from "./Navbar"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Navbar />

      <main>{children}</main>
      
    </>
  )
}

export default Layout
