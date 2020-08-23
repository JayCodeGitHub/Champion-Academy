import React from "react"
import styled from "styled-components"
import backgroundimg from "../../assets/images/tlo.png"
import backgroundphoneimg from "../../assets/images/tlophone.jpg"

const Img = styled.img`
    width: 100vw;
`
const Desktop = styled.div`
@media(max-width: 999px) {
    display: none;
}
`
const Phone = styled.div`
@media(min-width: 1000px) {
    display: none;
}
`

const Background = () => (
    <>
    <Desktop>
        <Img src={backgroundimg}/>
    </Desktop>
    <Phone>
    <Img src={backgroundphoneimg}/>
    </Phone>
    </>
  )
  
  export default Background