import React from 'react';
import styled from "styled-components";

export default function Home(props){

    return(
        
    <>
    <Header>
        <h1>hi, i'm vince.</h1>
    </Header>
   
    <Content>
    <AboutMe>
       <a href="https://www.linkedin.com/in/vlnce" rel="noreferrer" target="_blank">linkedin</a>  
       <a href="https://github.com/vinceryangarcia" rel="noreferrer" target="_blank">github</a>  
       <a href="https://www.twitter.com/vlnce" rel="noreferrer" target="_blank">twitter</a>  
       
    </AboutMe>
    <Box>
    <h1>work experience, pls hire me.</h1>
    i r noob coder boy
<h3>Loot Create - Event Manager</h3>
<li>Managed support staff of 10 during industry events such as E3, Anime Expo, SDCC and PAX West</li>
<li>Assisted in production of trade shows from booth design, shipping and handling and marketing materials</li>
<li>Worked with vendors to arrange shipment of inventory to and from events</li>

<h3>Konami Digital Entertainment Inc. - Sales and Organized Play Coordinator</h3>
<li>Crafted and executed on-site event activations at industry tradeshows</li>
<li>Worked with Manufactures overseas to produce Yu-Gi-Oh! branded products created to assist in distributor sales</li>
<li>Managed the implementation of B2B online storefront and maintained inventory of products.</li>
<li>Worked directly with Tournament Store Liaison to assist over 1000 Official Tournament Stores</li>

<h3>Konami Digital Entertainment Inc. - Associate Social Media Lead</h3>
<li>Collaborated with global team responsible for 12 video game brands including METAL GEAR SOLID, Pro Evolution Soccer and Silent Hill</li>
<li>Grew social channels by +215% from 12 million to 33 million during tenure.</li>
<li>Identified key YouTubers and Twitch streamers to partner with for the launch of Yu-Gi-Oh! Millenium Duels.</li>
<li>Desgined graphics with Adobe Creative Cloud apps following strict brand guidelines for Social Media and Web</li>
<li>Created #BombermanRolled mobile campaign that generated 5.2 million Twitter impressions, 26% engagement and 125k downloads for day one launch</li>
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
`