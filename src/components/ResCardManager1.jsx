import React, { Component, createRef } from "react";
import ResHead3Pt from "./ResHead3Pt";
import ResCardManager2 from "./ResCardManager2";
import ResCardManager3 from "./ResCardManager3";
import ResCardManager4 from "./ResCardManager4";
import piano from "../assets/images/peaceful.jpeg";
import deep from "../assets/images/deep.jpeg";
import study from "../assets/images/study.jpeg";
import focus from "../assets/images/flow.jpeg";
import { BsGlobe2 } from "react-icons/bs";
// import AudioComp from "./AudioComp";
import musical from "../audio/music.mp3"
import Baller from "../audio/Baller.mp3"
import Elevated from "../audio/Elevated.mp3"
import NeversayNever from "../audio/neversaynever.mp3"
class ResCardManager1 extends Component {
    constructor(props) {
        super(props);
       
    }
    cardsData = [
        {
            img: piano,
            pieceful: "Peaceful Piano",
            music:musical,
            
        },
        {
            img: deep,
            pieceful: "Deep Focus",
            music:Baller
        },
        {
            img: study,
            pieceful: "Instrumental Study",
            music:Elevated
        },
        {
            img: focus,
            pieceful: "Focus Flow",
            music:NeversayNever
        },
    ];
  
   
    
    render() {
        return (
            <>
                {/* <AudioComp/> */}
            <div className="hamshifirst" style={{ marginTop: "40px", display: "flex", flexDirection: "column", gap: "25px" }}>
                <div className="textcontainer" style={{ color: "white",display:"flex",justifyContent:"flex-start" }}>
                    <div className="focus" style={{width:"50px"}}>Focus</div>
                </div>
                <div className="series1" style={{ display: "flex", gap: "10px", overflowX: "auto"  }}>
                    {this.cardsData.map((value, index) => {
                        return <ResHead3Pt cardsData={this.cardsData} key={index} img={value.img} pieceful={value.pieceful} music={value.music}   />
                    })}
                </div>
                <ResCardManager2 />
                <ResCardManager3 />
                <ResCardManager4 />
                <div className="last" style={{ backgroundColor: "#121212" }} >
                    <div className="line"><hr /></div>
                    <button className="buttonfourth">
                        <span className="globelogo"><BsGlobe2 /></span>
                        <span className="en">English</span>
                    </button>
                </div>
            </div>
            </>
        )
    }
}
export default ResCardManager1;
