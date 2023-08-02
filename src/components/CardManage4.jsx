import React, { Component } from "react";
import Head3Pt4 from "./Head3Pt4";
import { BsJustify } from "react-icons/bs";
import mumbai from "../assets/images/mumbai.jpeg"
import kolkata from "../assets/images/kolkata.jpeg"
import delhi from "../assets/images/delhi.jpeg"
import bengaluru from "../assets/images/bengluru.jpeg"
import musical from "../audio/music.mp3"
import Baller from "../audio/Baller.mp3"
import Elevated from "../audio/Elevated.mp3"
import NeversayNever from "../audio/neversaynever.mp3"
class CardManage4 extends Component {
    constructor(props) {
        super(props);
    }
    cardsData = [
        {
            img: mumbai,
            pieceful: "The Sound of Mu...",
            linefirst: "The song that define,",
            linesecond: "unit and distinguish...",
            music:musical

        },
        {
            img: kolkata,
            pieceful: "The Sound of Kolk...",
            linefirst: "The songs that define,",
            linesecond: "unit and distinguish...",
            music:Baller

        },
        {
            img: delhi,
            pieceful: "The Sound of Del...",
            linefirst: "The songs that define,",
            linesecond: "unit and distinguish...",
            music:Elevated

        },
        {
            img: bengaluru,
            pieceful: "The Sound of Ben...",
            linefirst: "The songs that define,",
            linesecond: "unit and distinguish...",
            music:NeversayNever

        },
    ];
    render() {
        return (
            <>
                <div className="textcontainer" style={{ color: "white" }}>
                    <div className="focus">Sound of India</div>
                    <div className="show">Show all</div>
                </div>
                <div style={{ display: "flex", gap: "10px", backgroundColor: "bue", justifyContent: "space-evenly", flexWrap: "wrap" }}>
                    {this.cardsData.map((value, index) => {
                        return <Head3Pt4 key={index} img={value.img} pieceful={value.pieceful} linefirst={value.linefirst} linesecond={value.linesecond} music={value.music} />

                    })}
                </div>
            </>
        )
    }
}
export default CardManage4;