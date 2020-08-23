import React from "react"
import styled from "styled-components"
import { Link } from 'gatsby'

const NavigationWrapper = styled.div`
  a {
    color: inherit;
    text-decoration: none;
    font-weight: 300;
  }
  a:hover {
    color: black;
  }
  .active {
    font-weight: 800;
  }
  .drop-down-menu {
    padding: 0px;
    ul{
      margin-top: 0.8vw;
      list-style: none;
      text-align: center;
      padding: 0px;
      display: none;
      position: relative;
    }
    li {
      color: #b4407d;
      min-height: 1.5vw;
      background-color: white;
      padding-top: 0.5vw;
    }
  }
  .drop-down-menu:hover {
    background-color: white;
    color: #b4407d;
    position: relative;
    border: solid 2px #b4407d;
    border-top: 0px;
    ul {
      display: inherit;
      position: relative;
    }
  }
  .special {
    padding-top: 0.5vw;
  }
`

const Nav = styled.ul`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  list-style: none;
  padding: 0px;
  margin-top: 0px;
  height: 2.5vw;
  


  
`
const NavigationItem = styled.li`
  margin-left: 0px;
  text-align: center;
  padding-top: 0.5vw;
  max-width: 8.33333vw;
`


const Navigation = () => (
  <NavigationWrapper>
    <Nav>
      <Link to="/" activeClassName="active">
        <NavigationItem>
          domek
        </NavigationItem>
      </Link>
      <Link to="/przedszkola" activeClassName="active">
        <NavigationItem>
          Przedszkola
        </NavigationItem>
      </Link>
      <Link to="/języki" activeClassName="active">
        <NavigationItem>
          Języki Obce
        </NavigationItem>
      </Link>
      <NavigationItem className="drop-down-menu special">
        Obozy
        <ul>
          <Link to="/obozylato"><li>Lato2021</li></Link>
          <Link to="/obozyzima"><li>Zima2021</li></Link>
          <Link to="/obozynarty"><li>Szkoła Narciarsko Snowboardowa</li></Link>
        </ul>
      </NavigationItem>
      <NavigationItem className="drop-down-menu">
        Sport Dla <br/>Każdego
        <ul>
          <Link to="/fitness"><li>Fitness/trening personalny</li></Link>
          <Link to="/sport50"><li>Sport 50+</li></Link>
          <Link to="/sportnajmłodszych"><li>Sport dla najmłodszych 0-3</li></Link>
          <Link to="/pływanie"><li>Pływanie</li></Link>
          <Link to="/treningirodzinne"><li>Treningi Rodzinne</li></Link>
          <Link to="/sportoweurodziny"><li>Sportowe urodziny</li></Link>
          <Link to="/gimnastyka"><li>Gimnastyka/ akrobatyka</li></Link>
        </ul>
        </NavigationItem>
      <Link to="/kontakt" activeClassName="active">
        <NavigationItem>
          kontakt
        </NavigationItem>
      </Link>
    </Nav>
  </NavigationWrapper>
)

export default Navigation
