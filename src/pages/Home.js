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
                    <a href="https://www.github.com/vinceryangarcia">github</a>
                    <a href="https://medium.com/@vinceryangarcia/my-labs-learning-experience-4ed1585deddf">blog</a>
                    <a href="https://www.behance.net/vlnce">behance</a>
                    <a href="https://www.youtube.com/watch?v=o-YBDTqX_ZU">resume</a>
                </div>
                
                {/* <div className="Social1">
                <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' playing='true' controls='true' muted='true' loop='true' />  
                </div> */}

                {/* <div className="BiggerDiv1">
                    <div className="Vince">
                        <div className="Vince1">
                        <a href="https://medium.com/@vinceryangarcia/my-labs-learning-experience-4ed1585deddf">most recent medium blog</a>
                        </div> 
                    </div>
                </div> */}
            </div>
        </div>
    </>    
    )
}