import React from 'react';
import styled from "styled-components";
import banner from '../images/1500x500.jpg'

export default function Home(props){

    return(
        
    <>
    <Header></Header>
   <Img2>
    <center><Img1 src={banner}/> </center>
        </Img2>
    <Content>
    <AboutMe>
       <a href="https://www.linkedin.com/in/vlnce" rel="noreferrer" target="_blank">linkedin</a>  
       <a href="https://github.com/vinceryangarcia" rel="noreferrer" target="_blank">github</a>  
       <a href="https://behance.net/vlnce" rel="noreferrer" target="_blank">behance</a>  
       <a href="https://www.twitter.com/vlnce" rel="noreferrer" target="_blank">twitter</a>  
       
    </AboutMe>
    
    <Box>
    </Box>

    </Content>
    </>    
    )
}
const Header = styled.div`
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    color: black;
    height:5vh;
    
`
const AboutMe = styled.div`
    align-items:center;
    justify-content:center;
    color: black;
    a{
    margin-right:2px;
    text-decoration:none;
    }
    
`

const Content = styled.div`
    display: flex;
    flex-flow: column wrap;
    align-items:center;
    background-color:darkgrey;
    h3{
        color:black;
    }

`   
const Box = styled.div`
    flex-flow: column wrap;
    justify-content: center;
    border: 1px solid black;
    background-color:lightgrey;
    height:100vh;
    margin-left:20px;
    margin-right:20px;
    width:90%;
`
const Img2 = styled.div`
    background-color:darkgrey;
`

const Img1 = styled.img`
    height: 500px;
    margin-left:1%;
    margin-bottom:1%;
    margin-right:1%;

    @media screen and (max-width: 1300px) {
        height:300px;
        
    }
    @media screen and (max-width: 800px) {
        height: 280px;
    }

`