import React from 'react';
import styled from "styled-components";

export default function Resume(props){

    return(
        
    <>
    <Box>
        <Content>
        Previously:
        <br></br>
        Community Manager at Vespa / King's Raid<br></br>
        Event Manager at Loot Crate<br></br>
        Organized Play Coordinator at Konami<br></br>
        Sales Coordinator at Konami<br></br>
        Social Media at Konami<br></br>
        Customer Support Representative at Konami<br></br>
        
        </Content>
    </Box>
    </>    
    )
}
const Box = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    
`

const Content = styled.div`
    font-family: Arial;
    width:90%;
    font-size:1.5em;
    font-weight:bold;
    text-align:left;
    color: #FFFFFF;
    /* background-color:#282c34 */`