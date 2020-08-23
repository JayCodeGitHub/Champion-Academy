import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"


const FeaturedTiles = styled.div`
@media(min-width: 1000px) {
  width: 70vw;
  height: 17.5vw;
  display: grid;
  grid-template-columns: repeat(4, 17.5vw);
}
@media(max-width: 999px) {
  width: 100vw;
  height: 100vw;
  display: grid;
  grid-template-columns: repeat(2, 50vw);
  grid-grid-template-rows: repeat(2, 50vw);
}

`

const Tiled = styled.div`
text-align: center;
position: absolute;
color: white;
&&.karateWrapper{
  background-color: #b4407d;
  box-sizing: border-box;
  :hover {
  border: solid #2867a8 4px;
  color: #2867a8;
}
}
&&.obozyWrapper{
  background-color: #2867a8;
  box-sizing: border-box;
  :hover {
  border: solid #b4407d 4px;
  color: #b4407d;
}
}
&&.przedszkolaWrapper{
  background-color: #b4407d;
  :hover {
  border: solid #2867a8 4px;
  box-sizing: border-box;
  color: #2867a8;
}
}
&&.obozynarciarskieWrapper{
  background-color: #2867a8;
  :hover {
  border: solid #b4407d 4px;
  box-sizing: border-box;
  color: #b4407d;
}
}
@media(min-width: 1000px) {
  width: 16.5vw;
  height: 16.5vw;
  margin: 0.5vw;
  font-size: 0.8vw;
  background-color: blue;
  h1 {
    margin-top: 6vw;
  }
  .przedszkola{
    margin-top: 6vw;
  }
  .obozy {
    margin-top: 4vw;
  }
}
@media(max-width: 999px) {
  margin: 2.5vw;
  width: 45vw;
  height: 45vw;
  background-color: blue;
  h1 {
    margin-top: 13vw;
    font-size: 5vw;
  }
  .przedszkola{
    margin-top: 13vw;
  }
  .karate {
    margin-top: 15vw;
  }
  .obozy {
    margin-top: 8vw;
  }
}
`


const IndexPage = () => (
      <FeaturedTiles>
        <a href="http://karate-team.pl/" target="blank"><Tiled className="karateWrapper"><h1 className="karate">Karate Team <br/>Oborniki</h1></Tiled></a>
        <Link to="/przedszkola"><Tiled className="obozyWrapper"><h1 className="przedszkola">Edukacja sportowa dla przedszkoli i szkół<br/></h1></Tiled></Link>
        <Link to="/obozylato"><Tiled className="przedszkolaWrapper"><h1 className="obozy">Wypoczynek letni i zimowy szkolenia narciarskie i snowboardowe</h1></Tiled></Link>
        <a><Tiled className="obozynarciarskieWrapper"><h1>Twój Osobisty Trener.pl</h1></Tiled></a>
      </FeaturedTiles>
  )
  
  export default IndexPage