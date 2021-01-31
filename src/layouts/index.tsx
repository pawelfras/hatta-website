import React from "react"
import GlobalStyle from "../assets/styles/styles"
import Navigation from "../components/navigation/navigation"

const Layout: React.FC = ({ children }) => (
  <>
    <GlobalStyle></GlobalStyle>
    <Navigation></Navigation>
    {children}
  </>
)

export default Layout
