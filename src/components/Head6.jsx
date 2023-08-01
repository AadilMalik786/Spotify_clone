import { Component, createRef } from "react";
import { SlSocialSpotify } from "react-icons/sl"
import { FaSearch } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
class Head6 extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <>
                <div className="parenttop"  >
                    <div className="logospot" style={{ color: "white" }}><SlSocialSpotify /></div>
                    <div className="app" >
                        <span className="sec"   style={{ color: "white" }} onClick={this.props.handleSearch}><FaSearch /></span>
                        <span> <button className="open"> OPEN APP</button></span>
                        <span className="hambu" style={{ color: "white" }} onClick={this.props.handleHam}><GiHamburgerMenu /></span>
                    </div>
                </div>
            </>
        )
    }
}
export default Head6;