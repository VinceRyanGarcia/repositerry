import React from 'react';
import styled from "styled-components";

export default function Notes(props){

    return(
        
    <>
    <Header>
        <h1>hi, i'm vince.</h1>
    </Header>
   
    <Content>
    <AboutMe>
       <a href="https://www.linkedin.com/in/vlnce" rel="noreferrer" target="_blank">linkedin</a>  
       <a href="https://github.com/vinceryangarcia" rel="noreferrer" target="_blank">github</a>  
       <a href="https://behance.net/vlnce" rel="noreferrer" target="_blank">behance</a>  
       <a href="https://www.twitter.com/vlnce" rel="noreferrer" target="_blank">twitter</a>  
       
    </AboutMe>
    <Box>
    <h1>Notes</h1>
        <h3>Responsive Web Design</h3>
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
    width:90%;
`