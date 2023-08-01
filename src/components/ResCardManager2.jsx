import React, { Component } from "react";
// import Head3Pt from "./Head3Pt";
import hit from "../assets/images/hit.jpeg"
import rap from "../assets/images/rap.jpeg"
import all from "../assets/images/allout.jpeg"
import classic from "../assets/images/classic.jpeg"
import ResHead3Pt2 from "./ResHead3Pt2";
class ResCardManager2 extends Component {
    // constructor(props) {
    //     super(props);
    // }
    cardsData = [
        {
            img: hit,
            pieceful: "Today's Top Hit",
        },
        {
            img: rap,
            pieceful: "RapCaviar",
        },
        {
            img: all,
            pieceful: "All Out 2010s",
        },
        {
            img: classic,
            pieceful: "Rock Classics",
        },
    ];
    render() {
        return (
            <>
                <div className="textcontainer" style={{ color: "white" }}>
                    <div className="focus" >Spotify Playlists</div>
                </div>
                <div style={{ display: "flex", gap: "10px", backgroundColor: "bue", overflowX: "auto" }}>
                    {this.cardsData.map((value, index) => {
                        return <ResHead3Pt2 key={index} img={value.img} pieceful={value.pieceful} />

                    })}
                </div>
            </>
        )
    }
}
export default ResCardManager2;