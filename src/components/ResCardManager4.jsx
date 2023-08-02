import React, { Component } from "react";
import Head3Pt from "./Head3Pt";
import mumbai from "../assets/images/mumbai.jpeg"
import kolkata from "../assets/images/kolkata.jpeg"
import delhi from "../assets/images/delhi.jpeg"
import bengaluru from "../assets/images/bengluru.jpeg"
import ResHead3Pt4 from "./ResHead3Pt4";
import musical from "../audio/music.mp3"
import Baller from "../audio/Baller.mp3"
import Elevated from "../audio/Elevated.mp3"
import NeversayNever from "../audio/neversaynever.mp3"
class ResCardManager4 extends Component {
    constructor(props) {
        super(props);
    }

    cardsData = [
        {
            img: mumbai,
            pieceful: "The Sound of Mu...",
            music:Baller
        },
        {
            img: kolkata,
            pieceful: "The Sound of Kolk...",
            music:Elevated
        },
        {
            img: delhi,
            pieceful: "The Sound of Del...",
            music:musical
        },
        {
            img: bengaluru,
            pieceful: "The Sound of Ben...",
            music:NeversayNever
        },
    ];
    render() {
        return (
            <>
                <div className="textcontainer" style={{ color: "white" }}>
                    <div className="focus">Sound of India</div>
                </div>
                <div style={{ display: "flex", gap: "10px", backgroundColor: "bue", overflowX: "auto" }}>
                    {this.cardsData.map((value, index) => {
                        return <ResHead3Pt4 key={index} img={value.img} pieceful={value.pieceful} music={value.music} />

                    })}
                </div>
            </>
        )
    }
}
export default ResCardManager4;