import React, { Component } from "react";
import Head3Pt from "./Head3Pt";
// import { BsJustify } from "react-icons/bs";
import dream from "../assets/images/dreamer.jpeg"
import sleep from "../assets/images/sleep.jpeg"
import classic from "../assets/images/classic.jpeg"
import deep from "../assets/images/deep.jpeg"
import ResHead3Pt3 from "./ResHead3Pt3";
import musical from "../audio/music.mp3"
import Baller from "../audio/Baller.mp3"
import Elevated from "../audio/Elevated.mp3"
import NeversayNever from "../audio/neversaynever.mp3"
class ResCardManager3 extends Component {
    // constructor(props) {
    //     super(props);
    // }

    cardsData = [
        {
            img: sleep,
            pieceful: "Sleep",
            music:Elevated
        },
        {
            img: dream,
            pieceful: "DayDreamer",
            music:Baller
        },
        {
            img: classic,
            pieceful: "Rock Classics",
            music:NeversayNever
        },
        {
            img: deep,
            pieceful: "Deep Focus",
            music:musical
        },
    ];
    render() {
        return (
            <>
                <div className="textcontainer" style={{ color: "white" ,display:"flex",justifyContent:"flex-start"}}>
                    <div className="focus" style={{width:"50px"}}>Sleep</div>
                </div>
                <div style={{ display: "flex", gap: "10px", backgroundColor: "bue", overflowX: "auto" }}>
                    {this.cardsData.map((value, index) => {
                        return <ResHead3Pt3 key={index} img={value.img} pieceful={value.pieceful} music={value.music} />
                    })}
                </div>
            </>
        )
    }
}
export default ResCardManager3;