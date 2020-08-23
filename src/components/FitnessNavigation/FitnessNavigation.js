import React from "react" 
import styled from "styled-components"
import { Link } from "gatsby"

const Wrapper = styled.div`

`
const NavigationWrapper = styled.ul`
    list-style: none;
    padding: 0px;
    a {
        color: inherit;
        text-decoration: none;
    }
    li {
        margin-top: 3vw;
        border: solid 3px #b4407d;
        border-radius: 25px;
        height: 8vw;
        padding-top: 2vw;
        width: 95vw;
        margin-left: 2.5vw;
        margin-right: 2.5vw;
        text-align: center;
    }
    .active {
            li {
                border: solid 3px #2867a8;
            }
            
        }
`


const fitnessNavigation = () => (
    <>
        <Wrapper>
            <NavigationWrapper>
                <Link to="/fitness" activeClassName="active"><li>Fitness/trening personalny</li></Link>
                <Link to="/sport50" activeClassName="active"><li>Sport 50+</li></Link>
                <Link to="/sportnajmłodszych" activeClassName="active"><li>Sport dla najmłodszych 0-3</li></Link>
                <Link to="/pływanie" activeClassName="active"><li>Pływanie</li></Link>
                <Link to="/treningirodzinne" activeClassName="active"><li>Treningi Rodzinne</li></Link>
                <Link to="/sportoweurodziny" activeClassName="active"><li>Sportowe urodziny</li></Link>
                <Link to="/gimnastyka" activeClassName="active"><li>Gimnastyka/ akrobatyka</li></Link>
            </NavigationWrapper>
        </Wrapper>
    </>
)


export default fitnessNavigation 