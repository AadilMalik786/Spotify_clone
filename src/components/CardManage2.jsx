import React, { Component } from "react";
import Head3Pt2 from "./Head3Pt2";
import hit from "../assets/images/hit.jpeg"
import rap from "../assets/images/rap.jpeg"
import all from "../assets/images/allout.jpeg"
import classic from "../assets/images/classic.jpeg"
import musical from "../audio/music.mp3"
import Baller from "../audio/Baller.mp3"
import Elevated from "../audio/Elevated.mp3"
import NeversayNever from "../audio/neversaynever.mp3"

class CardManage2 extends Component {
    constructor(props) {
        super(props);
    }

    cardsData = [
        {
            img: hit,
            pieceful: "Today's Top Hit",
            linefirst: "Billi Eilish is on top of",
            linesecond: "the Hottest 50!",
            music:musical

        },
        {
            img: rap,
            pieceful: "RapCaviar",
            linefirst: "New music from Lil",
            linesecond: "Tjay,Quavo and JT of...",
            music:Baller

        },
        {
            img: all,
            pieceful: "All Out 2010s",
            linefirst: "The biggest songs of",
            linesecond: "the 2010s.",
            music:Elevated

        },
        {
            img: classic,
            pieceful: "Rock Classics",
            linefirst: "Rock legends $ epic",
            linesecond: "songs that continue...",
            music:NeversayNever

        },
    ];
    render() {
        return (
            <>
                <div className="textcontainer" style={{ color: "white",backgroundColor:"aqua",minWidth:"62%",gap:"54%" }}>
                    <div className="focus" style={{backgroundColor:"red"}}>Spotify Playlists</div>
                    <div className="show" style={{backgroundColor:"red"}}>Show all</div>
                </div>
                <div style={{ display: "flex", gap: "10px", backgroundColor: "bue", justifyContent: "space-evenly" }}>
                    {this.cardsData.map((value, index) => {
                        return <Head3Pt2 key={index} img={value.img} pieceful={value.pieceful} linefirst={value.linefirst} linesecond={value.linesecond} music={value.music} />

                    })}
                </div>
            </>
        )
    }
}
export default CardManage2;