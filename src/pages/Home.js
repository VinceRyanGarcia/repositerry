import React from 'react';
import lol from '../images/lol.jpg';

export default function Home(props){

    return(
        
    <>
        <div className="App">
            <div className="Hello">
                <div className="Spin">
                    <img src={lol} className="App-logo" alt="lol" /><br></br>
                </div>
                <div className="Vince">
                    <h1>Hi, I'm <b>Vince</b>!</h1>
                </div>
            </div>

            <div className="AboutMe">
                <div className="AM1">
                    Fullstack Web Developer and Graphic Designer<br></br>
                </div>
            </div>

            <div>
                
            </div>
            
        </div>
    </>    
    )
}