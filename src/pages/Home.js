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
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed porttitor tortor. Suspendisse vulputate massa et purus dapibus venenatis. Vestibulum ac tempor lectus, et interdum sem. In tempor efficitur metus ut tempus. Nullam quis nisi id nunc luctus malesuada sit amet iaculis ipsum. Vivamus dapibus libero sit amet quam posuere, vel lobortis elit vulputate. Phasellus enim diam, finibus fringilla faucibus et, faucibus eget eros. Vestibulum pretium vulputate sem, vitae finibus nulla tincidunt non. Cras eget sagittis nisl.

Etiam sit amet interdum dolor. Mauris faucibus dapibus elementum. Ut nec fermentum lacus. Sed imperdiet felis nec cursus tempus. Fusce vel aliquam nisl. Vestibulum tempor, velit sed ornare rhoncus, odio diam auctor sem, non maximus lacus arcu vitae lectus. Donec porta a libero id lacinia. Etiam sed pretium tellus. Nullam enim nulla, egestas commodo justo id, elementum dapibus leo. Sed vestibulum metus non augue venenatis, ac lacinia velit tempor.

Curabitur sagittis faucibus porta. Ut vitae consequat libero, non accumsan orci. Nam at mi sed lacus pharetra rutrum. Vestibulum et condimentum tortor. Maecenas ac leo diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur vel rhoncus quam. Morbi arcu mi, euismod vel ligula non, pharetra lacinia quam. Cras id orci non tortor vulputate tempor at nec ante. Aliquam vestibulum volutpat vestibulum. Integer orci mauris, posuere quis finibus sed, bibendum nec nisi.

Aliquam gravida risus at sodales mollis. Morbi ultricies pharetra dui ac imperdiet. Nullam eleifend sapien at diam feugiat, sit amet tempus libero imperdiet. Cras vulputate, libero a iaculis condimentum, erat nisi cursus ligula, eu porttitor tellus eros at felis. In a enim nec mi vestibulum maximus a at magna. Integer at massa mi. Integer consequat lorem mattis nibh tincidunt, ullamcorper iaculis quam efficitur. Donec molestie elit est, blandit pretium sem vehicula ut. Suspendisse tristique odio ac aliquet pulvinar. Ut lacinia ut nunc vel laoreet.

Duis in enim ut erat mollis cursus. Ut aliquet maximus elit, sit amet ultrices elit molestie et. Etiam accumsan pharetra massa sit amet dictum. Duis vel mi sit amet purus consectetur imperdiet. Quisque viverra suscipit congue. Integer hendrerit velit lacus, ultrices sollicitudin ante iaculis vel. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam maximus bibendum lectus id dapibus. Duis quam erat, elementum accumsan luctus eu, tempor nec massa. Duis ac mauris ac justo sagittis efficitur id imperdiet urna. Etiam sed scelerisque orci.
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
`