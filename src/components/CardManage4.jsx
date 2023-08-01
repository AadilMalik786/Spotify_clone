import React, { Component } from "react";
import Head3Pt from "./Head3Pt";
import { BsJustify } from "react-icons/bs";
import mumbai from "../assets/images/mumbai.jpeg"
import kolkata from "../assets/images/kolkata.jpeg"
import delhi from "../assets/images/delhi.jpeg"
import bengaluru from "../assets/images/bengluru.jpeg"
class CardManage4 extends Component {
    // constructor(props) {
    //     super(props);
    // }
    cardsData = [
        {
            img: mumbai,
            pieceful: "The Sound of Mu...",
            linefirst: "The song that define,",
            linesecond: "unit and distinguish..."

        },
        {
            img: kolkata,
            pieceful: "The Sound of Kolk...",
            linefirst: "The songs that define,",
            linesecond: "unit and distinguish..."

        },
        {
            img: delhi,
            pieceful: "The Sound of Del...",
            linefirst: "The songs that define,",
            linesecond: "unit and distinguish..."

        },
        {
            img: bengaluru,
            pieceful: "The Sound of Ben...",
            linefirst: "The songs that define,",
            linesecond: "unit and distinguish..."

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
                        return <Head3Pt key={index} img={value.img} pieceful={value.pieceful} linefirst={value.linefirst} linesecond={value.linesecond} />

                    })}
                </div>
            </>
        )
    }
}
export default CardManage4;