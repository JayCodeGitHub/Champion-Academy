import React from "react"
import { graphql } from 'gatsby'
import Background from "../components/Background/Background"
import styled from "styled-components"
import FitnessNavigation from "../components/FitnessNavigation/FitnessNavigation"

const BackGroundWrapper = styled.div`
@media(max-width: 999px) {
  display: none;
  padding-top: 0px;
}
padding-top: 5vw;
`

const Content = styled.div`
@media(max-width: 999px) {
    width: 100vw;
    margin-right: 0vw;
    margin-left: 0vw;
    min-height: 100vh;
}
@media(min-width: 1000px) {
    width: 70vw;
    margin-right: 15vw;
    margin-left: 15vw;
    min-height: 100vh;
} 
`
const FitnessNavigationWrapper = styled.div`
@media(min-width: 1000px) {
  display: none;
}
@media(max-width: 999px) {
  width: 100vw;
}
`
const Title = styled.h1`
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

const sportnajmlodszychPage = ({ data }) => {
  return (
  <>
  <BackGroundWrapper>
    <Background/>
  </BackGroundWrapper>
  <FitnessNavigationWrapper>
    <FitnessNavigation/>
  </FitnessNavigationWrapper>
    <Content>
    <MainTitle>{data.datoCmsNajmlodsipage.tytle}</MainTitle>
      {data.datoCmsNajmlodsipage.content.map(item => {
         const itemKey = Object.keys(item)[1];
          switch(itemKey) {
            case 'title':
              return <Title>{item.title}</Title>
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

  </>
  )
}

export const query = graphql`
  query {
    datoCmsNajmlodsipage {
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

export default sportnajmlodszychPage