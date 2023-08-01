import { Component } from "react";
import { FaHome,FaSearch } from 'react-icons/fa';
class Head extends Component {
    render() {
        return (
            <>
                <span className="box1" >
                    <div className="box1b" >
                        <div className="homelogo">  <FaHome/></div>
                        <div className="home">home</div>
                    </div>
                    <div className="box1a">
                        <div className="searchlogo"><FaSearch></FaSearch></div>
                        <div className="search">search</div>
                    </div>
                </span>
            </>
        )
    }
}
export default Head;
