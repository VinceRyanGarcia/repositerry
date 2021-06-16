import React from 'react';
import lol from '../images/lol.jpg';

export default function Home(props){
    
    function showAlert() {
        var myText = "This can be whatever text you like!";
        alert (myText);
    }

    return(
        
    <>
        <div className="App">
            <div className="Hello">
                <div className="Spin">
                    <img src={lol} className="App-logo" alt="lol" /><br></br>
                </div>
                <div className="Vince">
                <button onClick={() => alert('please hire me.')} type="button">
      click here
    </button>
                </div>  
            </div>


            <div className="Social">
                <a href="https://www.linkedin.com/in/vlnce">linkedin</a><br></br><br></br>
                <a href="https://www.behance.net/vlnce">behance</a>
                <a href="https://www.github.com/vinceryangarcia">github</a>
            </div>
        </div>
    </>    
    )
}