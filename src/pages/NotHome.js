import React from 'react';
import styled from "styled-components";

export default function NotHome(props){

    return(
        
    <>
    <Header>
        <h1>hi, i'm vince.</h1>
    </Header>
    <Content>
        TESTICLES
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
const Content = styled.div`
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items:center;
    border: 1px solid black;
    height: 20vh;
`
