import React, { Component } from "react";
import styled from "styled-components"
import styles from './HamburgerMenu.module.scss'
import logo from "../../assets/images/logo.jpg"
import { Link } from 'gatsby'
import SocialMedia from "../SocialMedia/SocialMedia"
import PhoneNavigation from "../PhoneNavigation/PhoneNavigation"

const HamburgerMenuWrapper = styled.div`
    width: 100vw;
    height: 20vw;
    background-color: white;
    display: grid;
    grid-template-columns: repeat(5, 20vw);
`
const Img = styled.img`
    width: 20vw;
    height: 20vw;
`
const Logo = styled.div`
    grid-column: 1/ span 1;
`
const LogoName = styled.div`
    grid-column: 2/ span 3;
    h1{
        font-size: 6vw;
        color: #b4407d;
        margin-top: 1vw;
        margin-left: 10px;

    }
`
const Hamburger = styled.div`

grid-column: 5/ span 1;
height: 20vw;
width: 20vw;
`
const Contact = styled.div`
    text-align: center;
    margin-bottom: 10vw;
    font-size: 6vw;
    line-height: 15vw;
    span {
        color: #2867a8;
        .contact {
            color: #b4407d;
            margin-left: 2vw;
            
        }
    }
`





class HamburgerMenu extends Component {
    state = {
        count: false
      }
    render() {
    return (
        <HamburgerMenuWrapper>
            <Link to="/">
                <Logo onClick={() => this.setState({ count: false })}>
                    <Img src={logo}/>
                </Logo>
            </Link>
            <Link to="/">
                <LogoName onClick={() => this.setState({ count: false })}><h1>Champion<br/>Academy</h1></LogoName>
            </Link>
            <Hamburger onClick={() => this.setState({ count: !this.state.count })}>
            <button 
                className={this.state.count ? styles.hamburger__active : styles.hamburger}>
                    <span className={styles.hamburger__box}>
                        <span className={styles.hamburger__inner}></span>
                    </span>
            </button>
            <div
            className={this.state.count ? styles.navigation__active : styles.navigationn}>
                <PhoneNavigation/>
                <Contact>
                <span><span className="contact"> tel.</span>888 585 785 </span>
                <span><span className="contact"> Email:</span>wbi@poczta.fm</span>
                </Contact>
                <SocialMedia/>
                
          </div>
            </Hamburger>
        </HamburgerMenuWrapper>
    )
    }
}

export default HamburgerMenu
