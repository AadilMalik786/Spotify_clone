import React, { Component } from "react"
import { CgPlayButton } from 'react-icons/cg';
class Head3Pt2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isPlaying: false,
            id: Math.random() * 1000,
            // playaudio: true,
            // isPlay: false
        };
        this.audioRef = React.createRef(); 
    }
    handlePlayPause = () => {
        const audio = this.audioRef.current;
        if (this.state.isPlaying ) {
            audio.pause();
            // console.log("pause");
            
        }
        else {
            const audioElements = document.querySelectorAll("audio");
            audioElements.forEach((element) => element.pause());
            audio.currentTime="0";
            this.audioRef.current.play()
            // console.log("play");
        }
       
    //     this.setState((prevState) => ({
    //   isPlaying: !prevState.isPlaying
      
    // }));


        // console.log("clicked");
        // console.log(this.state.id);
    };      
    render() {
        const { img, pieceful, linefirst, linesecond,music } = this.props;
        return (
            <>
            <div className="badacontainer"  onClick={(e) => {
                if (e.target) {
                    // this.setState({isPlaying:!this.state.isPlaying})
                    // console.log(this.state.isPlaying);
                    // this.setState((prevState) => ({
                    //     isPlaying: !prevState.isPlaying                        
                    // }))
                    // this.setState({isPlay:!this.state.isPlay})
                    console.log(this.state.isPlaying);
                }
            }}   >
                <div className="photocontainer" key={Math.random() * 1000}   >
                    <div className="firstimage" style={{ position: "relative" }}>
                        <button className="playingful"  onClick={() => { this.handlePlayPause() }} style={{ position: "absolute" }}><CgPlayButton /></button>
                        <img className="firstimagea" src={img}></img>
                        <div className="textand">
                            <div className="instrumental">{pieceful}</div>
                            <div className="focuswith">{linefirst}</div>
                            <div className="musicin">{linesecond}</div>
                        </div>
                    </div>
                </div>
            </div>
              <audio ref={this.audioRef} >
              <source src={music} type="audio/mpeg" />
              Your browser does not support the audio element.
          </audio>
          </>
        )
    }
}
export default Head3Pt2;