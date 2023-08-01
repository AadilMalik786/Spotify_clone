import React, { Component } from "react";
import { createRef } from "react";
import {RxCross2} from "react-icons/rx";
import ResCardManager1 from "./ResCardManager1";
import Head6 from "./Head6";
// import Hamburger from "./Hamburger"
class Hamburger extends Component {
    constructor(props) {
        super(props);
        this.myRef=createRef();
    }
   
    render() {
        return (
            <>
           
            <div className="dadacontainer" ref={this.props.myRef} style={{backgroundColor:"black",height:"1000px"}}>
                <div className="dadafirst" style={{fontSize:"23px",color:"white",display:"flex",flexDirection:"column",marginLeft:"20px",gap:"25px"}}>
                    <div className="crossfirst" style={{width:"100%",display:"flex",justifyContent:"flex-end"}}>
                    <div className="crossed"  style={{fontSize:"40px",cursor:"pointer",width:"12%",height:"35px",display:"flex",justifyContent:"center"}} onClick={this.props.handleHam}><RxCross2/></div>
                    </div>
                    <div className="Lo" style={{}}>Log in</div>
                    <div className="sgn">Sign up</div>
                    <div className="line">-</div>
                </div>
                <div className="dadasecond" style={{marginLeft:"20px",marginTop:"20px",fontSize:"18px",color:"white",display:"flex",flexDirection:"column",gap:"25px"}}>
                    <div className="prem">Premium</div>
                    <div className="hel">Help</div>
                    <div className="donlo">Download</div>
                    <div className="priv">Privacy</div>
                    <div className="termsing">Terms</div>
                </div>
            </div>
            </>
        )
    }
}
export default Hamburger;