import React from "react"
import styled from "styled-components"
import { Link } from 'gatsby'

const PhoneNavigationWrapper = styled.div`
a {
    color: inherit;
    text-decoration: none;
}
`
const PhoneNav = styled.ul`
    width: 100vw;
    text-align: center;
    list-style: none;
    padding: 0px;
    color: black;
    .active {
        color: #b4407d;
        
    }
`
const PhoneNavigationItem = styled.li`
    font-size: 6vw;
    padding-top: 4vw;
    height: 12vw;
    font-weight: 800;
`





const PhoneNavigation = () => (
    <PhoneNavigationWrapper>
        <PhoneNav>
            <Link to="/" activeClassName="active">
                <PhoneNavigationItem>
                    domek
                </PhoneNavigationItem>
            </Link>
            <Link to="/przedszkola" activeClassName="active">
                <PhoneNavigationItem>
                    przedszkola
                </PhoneNavigationItem>
            </Link>
            <Link to="/języki" activeClassName="active">
                <PhoneNavigationItem>
                    Języki Obce
                </PhoneNavigationItem>
            </Link>
            <Link to="/obozylato" activeClassName="active">
                <PhoneNavigationItem>
                    Lato 2021
                </PhoneNavigationItem>
            </Link>
            <Link to="/obozyzima" activeClassName="active">
                <PhoneNavigationItem>
                    Zima 2021
                </PhoneNavigationItem>
            </Link>
            <Link to="/obozynarty" activeClassName="active">
                <PhoneNavigationItem>
                    Szkoła Narciarsko Snowboardowa
                </PhoneNavigationItem>
            </Link>
            <Link to="/fitness" activeClassName="active">
                <PhoneNavigationItem>
                    Sport Dla Karzdego
                </PhoneNavigationItem>
            </Link>
            <Link to="/kontakt" activeClassName="active">
                <PhoneNavigationItem>
                    kontakt
                </PhoneNavigationItem>
            </Link>
        </PhoneNav>
    </PhoneNavigationWrapper>
)

export default PhoneNavigation
