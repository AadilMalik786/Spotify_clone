import React, { Component, createRef } from "react";
import { AiOutlineSearch, AiOutlineArrowLeft } from "react-icons/ai";
import Head6 from "./Head6";
import ResCardManager1 from "./ResCardManager1";
class SearchCom extends Component {
    constructor(props) {
        super(props);
        
    }
    render() {
        return (
            <>
             <section  style={{ display: "flex", fontSize: "20px", justifyContent: "center", alignItems: "center", width: "100%", gap: "0px" }}>
                    <div className="leftarrowparent" style={{ width: "30px", display: "flex", justifyContent: "center" }}>
                        <div className="leftarrowchild"  style={{ display: "flex", fontSize: "25px", width: "20px", cursor: "pointer", color: "white", justifyContent: "center" }} onClick={this.props.handleSearch}  ><AiOutlineArrowLeft /></div>
                    </div>
                    <div className="secfirst" style={{ display: "flex", width: "89%", justifyContent: "center" }}>
                        <div className="searchlogofirst " style={{ height: "35px", border: "1px solid black", borderRadius: "4px 0px 0px 4px", backgroundColor: "white", width: "10%", display: "flex", justifyContent: "center", alignItems: "center", border: "0" }}><AiOutlineSearch /></div>
                        <input type="text" placeholder="What do you want to listen to" className="inp" style={{ borderRadius: "0px 4px 4px 0px", height: "35px", width: "89%", border: "0", paddingLeft: "10px" }} />
                    </div>
                </section>
                <section style={{ color: "white", marginTop: "50px", marginLeft: "3%", display: "flex", flexDirection: "column", gap: "20px", alignItems: "cente", width: "100%" }}>
                    <h3 style={{ color: "white" }}>Play what you love</h3>
                    <div className="searchforthem" style={{ fontSize: "15px" }}>Search for artist, songs, podcasts, audiobooks and more.</div>
                </section>
            </>
        )
    }
}
export default SearchCom;