import React from "react";
import "/src/styles/landing.css";
import pfp from "/src/assets/mus.png";

function Landing() {
  return(
    <>
        <h1>welcome to the stupid garbage republic rising website...</h1>
        <img id="pfp" src={pfp} width="200" height="200"></img>
        
        <p>oooh look at me, im spinning</p>
    </>
  );
}

export default Landing
