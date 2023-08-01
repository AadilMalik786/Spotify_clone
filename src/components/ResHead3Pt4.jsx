import React, { Component } from "react";
import { CgPlayButton } from 'react-icons/cg';
// import AudioComp from "./AudioComp";

class ResHead3Pt4 extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { img, pieceful } = this.props;
       
        return (
            <>
             <div className="badacontainerfourth"  >
                        <div className="photocontainerfourth" >
                            <div className="firstimagefourth">
                                <img className="firstimageafourth" src={img} alt={pieceful} />
                                <div className="textandfourth" >
                                    <div className="instrumentalfourth" >{pieceful}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                   
            </>
        )
    }
}

export default ResHead3Pt4;