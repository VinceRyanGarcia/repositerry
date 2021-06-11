import React from 'react';
import styled from "styled-components";

export default function Resume(props){

    return(
        
    <>
    <Box>
        <Content>
            I'm fucking <b>awesome.</b>
        </Content>
    </Box>
    </>    
    )
}
const Box = styled.div`

    
`

const Content = styled.div`
    font-family: Arial;
    width:100%;
    font-size:1.5em;
    text-align:left;
    color: #FFFFFF;
    b{
        font-weight:bold;
        color:#61dafb;
    }
    /* background-color:#282c34 */`