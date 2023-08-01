import React, { Component } from "react";
import { CgPlayButton } from 'react-icons/cg';
// import AudioComp from "./AudioComp";

class ResHead3Pt3 extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        const { img, pieceful } = this.props;
        return (
            <>
             <div className="badacontainerthird"  >
                        <div className="photocontainerthird"  >
                            <div className="firstimagethird">
                                <img className="firstimageathird" src={img} alt={pieceful} />
                                <div className="textandthird" >
                                    <div className="instrumentalthird">{pieceful}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                   
            </>
        )
    }
}

export default ResHead3Pt3;