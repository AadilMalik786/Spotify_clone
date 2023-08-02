import React, { Component } from "react";
// import Head3Pt from "./Head3Pt";
import hit from "../assets/images/hit.jpeg"
import rap from "../assets/images/rap.jpeg"
import all from "../assets/images/allout.jpeg"
import classic from "../assets/images/classic.jpeg"
import ResHead3Pt2 from "./ResHead3Pt2";
import musical from "../audio/music.mp3"
import Baller from "../audio/Baller.mp3"
import Elevated from "../audio/Elevated.mp3"
import NeversayNever from "../audio/neversaynever.mp3"
class ResCardManager2 extends Component {
    constructor(props) {
        super(props);
    }
    cardsData = [
        {
            img: hit,
            pieceful: "Today's Top Hit",
            music:musical
        },
        {
            img: rap,
            pieceful: "RapCaviar",
            music:Elevated
        },
        {
            img: all,
            pieceful: "All Out 2010s",
            music:Baller
        },
        {
            img: classic,
            pieceful: "Rock Classics",
            music :NeversayNever
        },
    ];
    render() {
        return (
            <>
                <div className="textcontainer" style={{ width:"100%",color: "white",display:"flex",justifyContent:"flex-start"  }}>
                    <div className="focus" style={{width:"200px"}}>Spotify Playlists</div>
                </div>
                <div style={{ display: "flex", gap: "10px", backgroundColor: "bue", overflowX: "auto" }}>
                    {this.cardsData.map((value, index) => {
                        return <ResHead3Pt2 key={index} img={value.img} pieceful={value.pieceful} music={value.music} />

                    })}
                </div>
            </>
        )
    }
}
export default ResCardManager2;