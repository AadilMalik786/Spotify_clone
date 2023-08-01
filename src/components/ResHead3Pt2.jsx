import React, { Component } from "react";
import { CgPlayButton } from 'react-icons/cg';
// import AudioComp from "./AudioComp";

class ResHead3Pt2 extends Component {
    constructor(props) {
        super(props);
    }
   
   
    render() {
        const { img, pieceful } = this.props;
        return (
            <>
             <div className="badacontainersecond"  >
                        <div className="photocontainersecond"   >
                            <div className="firstimagesecond">
                                <img className="firstimageasecond" src={img} alt={pieceful} />
                                <div className="textandsecond" >
                                    <div className="instrumentalsecond">{pieceful}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                   
            </>
        )
    }
}

export default ResHead3Pt2;