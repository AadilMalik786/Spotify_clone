import React, { Component } from "react"
import { CgPlayButton } from 'react-icons/cg';
class Head3Pt extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { img, pieceful, linefirst, linesecond } = this.props;
        return (

            <div className="badacontainer" >
                <div className="photocontainer" >
                    <div className="firstimage" style={{ position: "relative" }}>
                        <button className="playingful" onClick={this.props.handlePlaying} style={{ position: "absolute" }}><CgPlayButton /></button>
                        <img className="firstimagea" src={img}></img>
                        <div className="textand">
                            <div className="instrumental">{pieceful}</div>
                            <div className="focuswith">{linefirst}</div>
                            <div className="musicin">{linesecond}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Head3Pt;