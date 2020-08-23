import React from "react"
import styled, { css } from 'styled-components'
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu"
import logo from "../../assets/images/logo.jpg"
import SocialMedia from "../SocialMedia/SocialMedia"
import Navigation from "../Navigation/Navigation"
import { Link } from 'gatsby'

const Wrapper = styled.div`

@media(max-width: 999px) {
  display: none;
  }
  @media(min-width: 1000px) {
    position: fixed;
    width: 100vw;
  height: 2.5vw;
  margin-top: 2.5vw;
  z-index: 1;
  background-color: #b4407d;
  ${({first}) => (
    first && css`
    background-color: #2867a8;
    position: fixed;
    margin-top: 0vw;
    z-index: 1;
    `
  )}
  }
`
const HamburgerMenuWrapper = styled.div`
  @media(max-width: 999px) {
    width: 100vw;
    height: 20vw;
  }
  @media(min-width: 1000px) {
    display: none;
  }
`


const NavigationWrapper = styled.div`
  width: 70vw;
  height: 2.5vw;
  margin-right: 15vw;
  margin-left: 15vw;
  display: flex;
  
`
const Logo = styled.div`
margin-left: 2.5vw;
.photoRepair 
{
  transform: translateY(-2.5vw)
}
  img {
    width: 5vw; 
    height: 5vw;
  }
`
const Nav = styled.div`
  width: 50vw;
  height: 4vw;
  margin-left: 2.5vw;
  text-align: center;
  display: grid;
  font-size: 1vw;
  padding-top: 0.5vw;
  grid-template-columns: repeat(2, 1fr);
  color: white;
  .contact {
    color: black;
    margin-top: 0.2vw;
  }
  ${({secendary}) => (
    secendary && css`
    margin-left: 2.5vw;
    padding-top: 0px;
    grid-template-columns: repeat(1, 1fr);
    `
  )}
`
const Data = styled.div`
  height: 5vh;
  width: 10vw;
  text-align: center;
`
const Button = styled.button`
  margin-top: 0.5vw;
  border-radius: 10px;
  height: 1.5vw;
  border: 0;
  font-size: 0.7vw;
  background-color: #b4407d;
  color: white;
  :hover {
    color: #b4407d;
    border: solid 1px #b4407d;
    background-color: white;
  }
`

const Navbar = () => (
  <>
    <Wrapper first>
      <NavigationWrapper>
        <Logo>
          <Link to="/">
            <img src={logo} alt="logo"/>
          </Link>
        </Logo>
        <Nav>
          <span><span className="contact"> tel.</span>&nbsp;&nbsp;&nbsp;888 585 785</span>
          <span><span className="contact">Email:</span>&nbsp;&nbsp;&nbsp;wbi@poczta.fm</span>
        </Nav>
        <Data>
          <Link to="/kontakt">
            <Button>
              DOŁĄCZ DO NAS
            </Button>
          </Link>
        </Data>
      </NavigationWrapper>
    </Wrapper>
    <Wrapper>
      <NavigationWrapper>
      <Logo>
          <Link to="/">
            <img src={logo} alt="logo" className="photoRepair"/>
          </Link>
        </Logo>
        <Nav secendary>
          <Navigation/>
        </Nav>
        <Data>
          <SocialMedia/>
        </Data>
      </NavigationWrapper>
    </Wrapper>
    <HamburgerMenuWrapper>
      <HamburgerMenu/>
    </HamburgerMenuWrapper>
  </>

)

export default Navbar
