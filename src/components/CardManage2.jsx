import React, { Component } from "react";
import Head3Pt from "./Head3Pt";
import hit from "../assets/images/hit.jpeg"
import rap from "../assets/images/rap.jpeg"
import all from "../assets/images/allout.jpeg"
import classic from "../assets/images/classic.jpeg"

class CardManage2 extends Component {
    // constructor(props) {
    //     super(props);
    // }

    cardsData = [
        {
            img: hit,
            pieceful: "Today's Top Hit",
            linefirst: "Billi Eilish is on top of",
            linesecond: "the Hottest 50!"

        },
        {
            img: rap,
            pieceful: "RapCaviar",
            linefirst: "New music from Lil",
            linesecond: "Tjay,Quavo and JT of..."

        },
        {
            img: all,
            pieceful: "All Out 2010s",
            linefirst: "The biggest songs of",
            linesecond: "the 2010s."

        },
        {
            img: classic,
            pieceful: "Rock Classics",
            linefirst: "Rock legends $ epic",
            linesecond: "songs that continue..."

        },
    ];
    render() {
        return (
            <>
                <div className="textcontainer" style={{ color: "white" }}>
                    <div className="focus">Spotify Playlists</div>
                    <div className="show">Show all</div>
                </div>
                <div style={{ display: "flex", gap: "10px", backgroundColor: "bue", justifyContent: "space-evenly", flexWrap: "wrap" }}>
                    {this.cardsData.map((value, index) => {
                        return <Head3Pt key={index} img={value.img} pieceful={value.pieceful} linefirst={value.linefirst} linesecond={value.linesecond} />

                    })}
                </div>
            </>
        )
    }
}
export default CardManage2;