import React, { Component } from "react";
import Head3Pt3 from "./Head3Pt3";
import { BsJustify } from "react-icons/bs";
import dream from "../assets/images/dreamer.jpeg"
import sleep from "../assets/images/sleep.jpeg"
import classic from "../assets/images/classic.jpeg"
import deep from "../assets/images/deep.jpeg"
import musical from "../audio/music.mp3"
import Baller from "../audio/Baller.mp3"
import Elevated from "../audio/Elevated.mp3"
import NeversayNever from "../audio/neversaynever.mp3"

class CardManage3 extends Component {
    // constructor(props) {
    //     super(props);
    // }
    cardsData = [
        {
            img: sleep,
            pieceful: "Sleep",
            linefirst: "Gentle Ambient piano",
            linesecond: "to help you fall asleep",
            music:musical

        },
        {
            img: dream,
            pieceful: "DayDreamer",
            linefirst: "Drift away with",
            linesecond: "enthralling...",
            music:Baller

        },
        {
            img: classic,
            pieceful: "Rock Classics",
            linefirst: "Rock legends $ epic",
            linesecond: "songs that continue...",
            music:Elevated

        },
        {
            img: deep,
            pieceful: "Deep Focus",
            linefirst: "Keep calm and focus",
            linesecond: "with ambient and pos..",
            music:NeversayNever

        },
    ];
    render() {
        return (
            <>
                <div className="textcontainer" style={{ color: "white" }}>
                    <div className="focus">Sleep</div>
                    <div className="show">Show all</div>
                </div>
                <div style={{ display: "flex", gap: "10px", backgroundColor: "bue", justifyContent: "space-evenly", flexWrap: "wrap" }}>
                    {this.cardsData.map((value, index) => {
                        return <Head3Pt3 key={index} img={value.img} pieceful={value.pieceful} linefirst={value.linefirst} linesecond={value.linesecond} music={value.music} />
                    })}
                </div>
            </>
        )
    }
}
export default CardManage3;