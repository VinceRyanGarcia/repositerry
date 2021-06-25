import React from 'react';
import lol from '../images/lol.jpg';
import logo from '../images/logo.svg';
import ReactPlayer from 'react-player'


export default function Home(props){
    
  

    return(
        
    <>
        <div className="App">
            
            <div className="Spin">
                <center><img src={logo} className="App-logo" alt="lol" /></center>
            </div>
            
            <div className="BiggerDiv">
                <div className="Vince">
                    <div className="Vince1">
                        vince
                    </div>
                   
                </div>

                <div className="Social">
                    <a href="https://www.linkedin.com/in/vlnce">linkedin</a>
                    <a href="https://www.behance.net/vlnce">behance</a>
                    <a href="https://www.github.com/vinceryangarcia">github</a>
                </div>
                
                {/* <div className="Social1">
                <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' playing='true' controls='true' muted='true' loop='true' />  
                </div> */}

                <div className="BiggerDiv1">
                    <div className="Vince">
                        <div className="Vince1">
                        current work(s) in progress:<br></br>
                        website for friend
                        
                        <br></br>
                        <a href="https://github.com/VinceRyanGarcia/practice0624">source</a>
                        <a href="https://cranky-tereshkova-ef389c.netlify.app/">live preview</a>
                        <a href="https://serene-wescoff-c06fcd.netlify.app/"><strike>first version preview</strike></a>   
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    </>    
    )
}