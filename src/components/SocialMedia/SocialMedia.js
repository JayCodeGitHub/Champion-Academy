import React from "react"
import styled from "styled-components"
import { FaFacebook } from 'react-icons/fa';
import { GrInstagram } from 'react-icons/gr';
import { FaYoutube } from 'react-icons/fa';

const Wrapper = styled.div`
@media(min-width: 1000px) {
    color: white;
}
@media(max-width: 999px) {
  color: #b4407d;
  font-size: 10vw;
}
    font-size: 1.7vw;
    padding-top: 0.5vw;
    text-align: center;
    a {
      color: inherit;
    }
    @media(max-width: 999px) {
  .facebook {
    margin-right: 20vw; 
  }
  .instagram{

  }
  .youtube {
    margin-left: 20vw; 
  }
  }
  @media(min-width: 1000px) {
  .facebook {
    margin-right: 0.5vw;
    margin-left: 0.5vw;
  }
  .instagram{
    margin-right: 0.5vw;
    margin-left: 0.5vw;
  }
  .youtube {
    margin-right: 0.5vw;
    margin-left: 0.5vw;
  }
  .facebook:hover {
    color: #2867a8;
    font-size: 1.5vw;
  }
  .instagram:hover{
    color: #2867a8;
    font-size: 1.5vw;
  }
  .youtube:hover {
    color: #2867a8;
    font-size: 1.5vw;
  }
  }
`


const SocialMedia = () => (
  <Wrapper>
    <a href="https://www.facebook.com/BlochChampionAcademy" target="blank"><FaFacebook className="facebook"alt="facebook"/></a>
    <a href="https://www.instagram.com/karateteamoborniki/?hl=pl" target="blank"><GrInstagram className="instagram" alt="instagram"/></a>
    <a href="https://www.youtube.com/channel/UClowW1j40-wJWn2CBrT8g9Q" target="blank"><FaYoutube  className="youtube"alt="youtube"/></a>
  </Wrapper>
)

export default SocialMedia