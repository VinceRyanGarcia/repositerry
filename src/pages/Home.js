import React from 'react';
import lol from '../images/lol.jpg';
import logo from '../images/logo.svg';

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
                
            </div>
        </div>
    </>    
    )
}