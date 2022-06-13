import React from "react";
import pic from "../images/icon-ethereum.svg";
import pic2 from "../images/icon-clock.svg";
import pic3 from "../images/image-avatar.png";
function Content(){
    return(
        <div className="content-section">
            <h2>Equilibrium #3429</h2>
            <p>Our Equilibrium collection promotes balance and calm</p>
        <div className="row1">
            <div className="price">
                <img src={pic} alt="eth-logo"/>
                <p>0.041ETH</p>
            </div>
            <div className="time">
                <img src={pic2} alt="clock"/>
                <p>3 days left</p>
            </div>
        </div>
        <hr id="line"/>
        <div className="row2">
            <img src={pic3} alt="avatar"/>
            <p>Creation of <span>Jules Wyvern</span></p>
        </div>
        </div>
    )
}

export default Content;