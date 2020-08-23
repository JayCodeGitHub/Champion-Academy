import React from "react"
import styled from "styled-components"

const FooterWrapper = styled.div`
    width: 100vw;
    text-align: center;
    border-top: solid 2px black;
    @media(min-width: 1000px) {
        height: 5vw;
    }
    @media(max-width: 999px) {
        height: 20vw;
    }
    h1{
            margin-top: 2vw;
            span {
                color: #2867a8;
                span {
                    color: #b4407d;
                }
            }
    }
`


const Footer = () => (
    <FooterWrapper>
        <h1>Created by <span>Jay<span>Code</span></span></h1>
    </FooterWrapper>
)

export default Footer