import React, { Component } from "react";
import Head3Pt from "./Head3Pt";
import { PiInstagramLogoDuotone } from 'react-icons/pi';
import { CiTwitter } from 'react-icons/ci';
import { PiFacebookLogoLight } from 'react-icons/pi';
import CardManage2 from "./CardManage2";
import CardManage3 from "./CardManage3";
import CardManage4 from "./CardManage4";
import piano from "../assets/images/peaceful.jpeg";
import deep from "../assets/images/deep.jpeg";
import study from "../assets/images/study.jpeg";
import focus from "../assets/images/flow.jpeg";
import musical from "../audio/music.mp3"
import Baller from "../audio/Baller.mp3"
import Elevated from "../audio/Elevated.mp3"
import NeversayNever from "../audio/neversaynever.mp3"
class CardManage extends Component {
    constructor(props) {
        super(props);
    }

    cardsData = [
        {
            img: piano,
            pieceful: "Peaceful Piano",
            linefirst: "Peaceful piano to help ",
            linesecond: "you slow down..",
            music:musical
        },
        {
            img: deep,
            pieceful: "Deep Focus",
            linefirst: "Keep calm and focus",
            linesecond: "with ambient and pos..",
            music:Baller
        },
        {
            img: study,
            pieceful: "Instrumental Study",
            linefirst: "Focus with soft study",
            linesecond: "music in the..",
            music:Elevated
        },
        {
            img: focus,
            pieceful: "Focus Flow",
            linefirst: "Uptempo instrumental",
            linesecond: "hip hop beats.",
            music:NeversayNever   
        },
    ];
    render() {
        return (
            <div className="box3" style={{height:"100vh",marginTop:"5px"}} >
                <div className="hamshi" style={{ marginTop: "100px", display: "flex", flexDirection: "column", gap: "25px" }}>
                    <div className="textcontainer" style={{ color: "white" }}>
                        <div className="focus">Focus</div>
                        <div className="show">Show all</div>
                    </div>
                    <div style={{ display: "flex", gap: "10px", backgroundColor: "ble", justifyContent: "space-evenly",flexWrap:"wrap" }}>
                        {this.cardsData.map((value,index) => {
                            return <Head3Pt key={index} img={value.img} pieceful={value.pieceful} linefirst={value.linefirst} linesecond={value.linesecond} music={value.music} />

                        })}
                    </div>
                    <CardManage2></CardManage2>
                    <CardManage3></CardManage3>
                    <CardManage4></CardManage4>
                    <div className="footcompo" style={{flexWrap:"wrap"}}>
                        <div className="compi">
                            <div className="pany" style={{ color: "white", fontWeight: "bold", fontSize: "17px" }}>Company</div>
                            <div className="job">About</div>
                            <div className="job">Jobs</div>
                            <div className="job">For the Record</div>
                        </div>

                        <div className="comuni">
                            <div className="com1" style={{ color: "white", fontWeight: "bold", fontSize: "17px" }}>Communities</div>
                            <div className="art">For Artists</div>
                            <div className="art">Developers</div>
                            <div className="art">Advertising</div>
                            <div className="art">Investors</div>
                            <div className="art">Vendors</div>
                            <div className="art">Spotify For Work</div>
                        </div>

                        <div className="lin">
                            <div className="linked" style={{ color: "white", fontWeight: "bold", fontSize: "17px" }}>Useful Links</div>
                            <div className="suppor">Support</div>
                            <div className="suppor">Free Mobile App</div>
                        </div>

                        <div className="socil">
                            <div className="soinsta"><PiInstagramLogoDuotone /></div>
                            <div className="soinsta"><CiTwitter /></div>
                            <div className="soinsta"><PiFacebookLogoLight /></div>
                        </div>
                    </div>
                    <div className="last" >
                        <div className="line"><hr /></div>
                        <div className="ab" style={{ color: "white" }}>© 2023 Spotify AB</div>
                    </div>
                </div>
            </div>
        )
    }
}
export default CardManage;