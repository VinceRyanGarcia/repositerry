import React from 'react';
import styled from "styled-components";
import snake from '../images/snake.png';
import pt from '../images/pt.png'
import a from '../images/a.png'
import b from '../images/b.jpg'
import c from '../images/c.png'
import d from '../images/d.png'

export default function Notes(props){

    return(     
    <>
        <Content>
            <img src={a} alt="a"></img>
            <img src={b} alt="b"></img>
            <img src={c} alt="c"></img>
            <img src={d} alt="d"></img>
        </Content>
        <Content>
            <img src={snake} alt="snake"></img>
            <p> 
                Quick Photoshop of Gabe Newell's head on Snake's body.<br></br>
                Created in reaction to Metal Gear Solid's release on Steam
            </p>    
        </Content>
        <Content>
            <img src={pt} alt="pt"></img>
            <p>
                Testing
            </p>
        </Content>
    </>    
    )
}

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:center;
    color: #FFFFFF;
    background-color:#282c34;
    align-items:center; 
    img{
        width:80%;
        margin-bottom:2vh;
        margin-top:2vh;

    }    
`

