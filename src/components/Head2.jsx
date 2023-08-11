import { Component } from "react";
import { BiLibrary } from "react-icons/bi";
import { GoPlus } from "react-icons/go";
import { BsGlobe2 } from "react-icons/bs";
import { BiSolidPlaylist } from "react-icons/bi"
import { AiOutlineFolder } from "react-icons/ai"
class Head2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isClick: false
    }
  }
  handleIsClick = () => {
    this.setState({ isClick: !this.state.isClick })
  }

  render() 
           {
    return (
      <>
        <div className="box2" style={{ overflowY:"auto" }}>
          <div className="rle">
            <div className="krk" style={{ position: "relative" }}>
              <div className="peelus" style={{ display: "flex",marginTop:"10px" }}>
                <div className="box2a">
                  <span className="librarylogo"><BiLibrary /></span>
                  <span className="labname">Your Library</span>
                </div>
                <div className="box2b">
                  <div className="plus" onClick={() => this.handleIsClick()}><GoPlus /></div>
                </div>
              </div>
              {this.state.isClick ? <div className="plusplaylist" style={{ position: "absolute", display: "flex",flexDirection:"column" }}>
                <div className="firstmother" style={{ display: "flex" ,width:"100%",justifyContent:"space-evenly",alignItems:"center" }}>
                  <div className="ct1" style={{display:"flex",justifyContent:"center",fontSize:"23px"}}><BiSolidPlaylist /></div>
                  <div className="ct2"style={{display:"flex",justifyContent:"start",width:"150px"}}>Create a new playlist</div>
                </div>
                <div className="secondmother" style={{ display: "flex",justifyContent:"center" ,width:"100%", justifyContent:"space-evenly",alignItems:"center" }}>
                  <div className="ct3" style={{fontSize:"23px"}}><AiOutlineFolder /></div>
                  <div className="ct4"style={{display:"flex",justifyContent:"start",width:"150px"}}>Create a playlist folder</div>
                </div>


              </div> : <div className="plusplaylist" style={{ position: "absolute", display: "flex",flexDirection:"column",display:"none" }}>
                <div className="firstmother" style={{ display: "flex" ,width:"100%",justifyContent:"space-evenly",alignItems:"center" }}>
                  <div className="ct1" style={{display:"flex",justifyContent:"center",fontSize:"23px"}}><BiSolidPlaylist /></div>
                  <div className="ct2"style={{display:"flex",justifyContent:"start",width:"150px"}}>Create a new playlist</div>
                </div>
                <div className="secondmother" style={{ display: "flex",justifyContent:"center" ,width:"100%", justifyContent:"space-evenly",alignItems:"center" }}>
                  <div className="ct3" style={{fontSize:"23px"}}><AiOutlineFolder /></div>
                  <div className="ct4"style={{display:"flex",justifyContent:"start",width:"150px"}}>Create a playlist folder</div>
                </div>
              </div>}

            </div>
          </div>

          <div className="bigcontainer" style={{ height: "133px", width: "300px", position: "absolute", left: "5%", top: "180px", overflowY: "auto", borderRadius: "10px" }}>
            <div className="box7container">
              <div className="create">Create your first playlist</div>
              <div className="easy">It's easy we will help you</div>
              <div className="buttonfirst"><button className="playlist">Create playlist</button></div>
            </div>
            <div className="box8container">
              <div className="lets">Let's find some podcasts to <br />follow.</div>
              <div className="will">We'll keep you update on new <br />episodes.</div>
              <div className="buttonsecond"> <button className="browse" style={{border:"none"}}>Browse podcasts</button></div>
            </div>
          </div>
          <section className="box9parent">
            <div className="box9container">
              <div className="privacy">Legal</div>
              <div className="privacy">Privacy Center</div>
              <div className="privacy">Privacy Policy</div>
            </div>
            <div className="box10container">
              <span className="cookies">Cookies</span>
              <span className="cookies">About Ads</span>
              <span className="cookies">Accessibillity</span>
            </div>
            <div className="cook">Cookies</div>
            <div className="buttonthird" style={{marginTop:"30px"}}>
              <button className="buttonfourth">
                <span className="globelogo"><BsGlobe2 /></span>
                <span className="en">English</span>
              </button>
            </div>
          </section>

        </div>

      </>
    )
  }
}
export default Head2;

