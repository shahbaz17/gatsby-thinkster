import React from "react"
import styled from "styled-components"
import Header from "../components/Header"
import Footer from "./Footer"
import NavBar from "./NavBar"
import SEO from "./SEO"

const Container = styled.div`
  margin: 3rem auto;
  max-width: 650px;
  padding: 0 1rem;
`

export default ({ children, noHeader }) => {
  return (
    <>
      <SEO />
      <Container>
        {!noHeader && <Header />}
        <NavBar />
        {children}
        <Footer />
      </Container>
    </>
  )
}
