import { Link } from "react-router-dom"
import styled from "styled-components"


export const Container = styled.div`
 display:flex;
 flex-direction:column; 
 width:90%;
 margin: 25px auto;
`

export const Form = styled.div`
width:80%;
display:flex;
flex-direction:column;
height: 500px;
justify-content: space-between; 
`

export const AnswersContainer = styled.div`
display:flex;
flex-direction:row; 
align-items: center;
`
 
export const Head = styled.h1`
 color:black;
 text-align:center;
 font-weight:bold;
 margin-bottom: 20px;
`
export const Button = styled.button`
width: 17%;
height: 45px;
background-color: black;
margin-bottom:20px;
`
export const StyledLink = styled(Link)`
 color:white;
 text-decoration: none;
 font-weight:bold;
`
export const QuizCard = styled.div`
box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
border-radius: 4px;
margin-bottom:50px;
`
export const CardHeader = styled.div`
display: flex;
padding: 16px;
align-items: center;
`
export const TitleContainer = styled.div`
flex: 1 1 auto;
`
export const Title = styled.div`
font-size: 1.5rem;
font-weight: 400;
`

export const ButtonContainer = styled.div`
flex: 0 0 auto;
align-self: self-end;
margin-top: -8px;
margin-right: -8px;
`

export const EditButton = styled.button`
flex: 0 0 auto;
font-size: 1.5rem;
text-align: center;
border-radius: 50%;
`

export const VideoContainer = styled.div`
display: block;
background-size: cover;
background-repeat: no-repeat;
background-position: center;
width: 100%;
`

export const ContentContainer = styled.div`
padding: 16px;
`



export const Footer = styled.div`
display: flex;
padding: 8px;
flex-direction:row;
align-items:center;
justify-content:space-around;
`

export const DescriptionContainer = styled.div`
display: flex;
flex-direction:row;
align-items:center;
justify-content:space-around;
`

