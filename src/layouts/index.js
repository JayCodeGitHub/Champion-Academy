import React from "react"
import Navbar from "../components/Navbar/Navbar"
import GlobalStyle from '../styles/globalStyle'
import Helmet from "react-helmet"
import Footer from "../components/Footer/Footer"

const MainLayout = ({children}) => (
  <>
    <Helmet title="Champion Academy" defer={false} />
    <GlobalStyle/>
    <Navbar/>
    {children}
    <Footer/>
  </>
)

export default MainLayout
