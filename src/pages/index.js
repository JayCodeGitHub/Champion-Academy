import React from "react"
import { graphql } from 'gatsby'
import Slider from "../components/Slider/Slider"
import styled from "styled-components"
import Tiles from "../components/Tiles/Tiles"

const Wrapper = styled.div`
@media(max-width: 999px) {
  padding-top: 0px;
  .film {
    width: 95vw;
    height: 50vw;
    margin-left: 2.5vw;
    margin-right: 2.5vw;
}
}
padding-top: 5vw;
@media(min-width: 1000px) {
.film {
    width: 70vw;
    height: 40vw;
}
}
`

const Content = styled.div`
text-align: center;
@media(max-width: 999px) {
    width: 100vw;
    margin-right: 0vw;
    margin-left: 0vw;
    min-height: 100vh;
    h1 {

    }
}
@media(min-width: 1000px) {
    width: 70vw;
    margin-right: 15vw;
    margin-left: 15vw;
    min-height: 100vh;
    
}
    
`
const FeaturedTilesWrapper = styled.div`
  margin-bottom: 5vw;
  margin-top: 2.5vw;
`
const Img = styled.img`
@media(max-width: 999px) {
  width: 95vw;
  margin-left: 2.5vw;
  margin-right: 2.5vw;
}
@media(min-width: 1000px) {
  width: 70vw;
}
`
const YoutubeLink = styled.h1`
@media(min-width: 1000px) {
  font-size: 3vw;
}
@media(max-width: 999px) {
  font-size: 5vw;
}

  color: #b4407d;
  :hover {
    color: #2867a8;
  }
` 
const Title = styled.h1`
@media(min-width: 1000px) {
  font-size: 2.5vw;
  margin-bottom: 1vw;
  span {
    line-height: 3;
    color: #b4407d;
  }
}
@media(max-width: 999px) {
  font-size: 5vw;
  margin-bottom: 1vw;
  span {
    line-height: 3;
    color: #b4407d;
  }
}
`
const TitleCms = styled.h1`
    color: #b4407d;
    text-align: center;
    @media(max-width: 999px) {
      font-size: 5vw;
      margin-top: 3vw;
      margin-bottom: 3vw;
    }
    @media(min-width: 1000px) {
      font-size: 1.5vw;
      margin-top: 3vw;
      margin-bottom: 3vw;
    }
`
const TitleTwo = styled.h1`
    text-align: center;
    color: #2867a8;
    @media(max-width: 999px) {
      font-size: 5vw;
      margin-top: 3vw;
      margin-bottom: 3vw;
    }
    @media(min-width: 1000px) {
      font-size: 1.5vw;
      margin-top: 3vw;
      margin-bottom: 3vw;
    }
`
const Paragraph = styled.h3`
    text-align: center;
    @media(max-width: 999px) {
      font-size: 4vw;
    }
    @media(min-width: 1000px) {
      font-size: 1.5vw;
    }
`

const MainTitle = styled.h1`
  text-align: center;
  @media(max-width: 999px) {
    font-size: 6vw;
    margin-bottom: 6vw;
  }
  @media(min-width: 1000px) {
    font-size: 2vw;
    margin-bottom: 5vw;
  }
`




const IndexPage = ({ data }) => {
  return (
  <Wrapper>
    <Slider/>
    <Content>
      <Title>Champion Academy <br/> <span>"Sport jako Pasja i Przygoda na całe Życie Zacznij Ją z Nami"</span></Title>
    <FeaturedTilesWrapper>
      <Tiles/>
    </FeaturedTilesWrapper>
    <div><iframe title="film z obozu" className="film" src="https://www.youtube.com/embed/EI8I0RqFWPs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowfullscreen></iframe></div>
    <a href="https://www.youtube.com/channel/UClowW1j40-wJWn2CBrT8g9Q" target="blank"><YoutubeLink>Po więcej filmów zapraszamy na nasz kanał Youtube</YoutubeLink></a>
    <MainTitle>{data.datoCmsMainpage.tytle}</MainTitle>
      {data.datoCmsMainpage.content.map(item => {
         const itemKey = Object.keys(item)[1];
          switch(itemKey) {
            case 'title':
              return <TitleCms>{item.title}</TitleCms>
            case 'titledwa':
              return <TitleTwo>{item.titledwa}</TitleTwo>
            case 'paragraph':
              return <Paragraph>{item.paragraph}</Paragraph>
            case 'film':
              return <div><iframe title="film z obozu" src={item.film} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowfullscreen></iframe></div>
            case 'img':
              return <Img src={item.img.url}alt="zdięcie z obozu"/>
            default: 
            return null;
          }
       })}
    </Content>
  </Wrapper>
  )
}

export const query = graphql`
  query {
    datoCmsMainpage {
      tytle
      content {
        ... on DatoCmsTitle {
          title
        }
        ... on DatoCmsTitletwo {
          tytuDwa
        }
        ... on DatoCmsParaghraph {
          paragraph
        }
        ... on DatoCmsFilm {
          film
        }
        ... on DatoCmsImg {
          img {
            url
          }
        }
      }
    }
  }
`



export default IndexPage
