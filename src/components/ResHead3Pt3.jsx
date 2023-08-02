import React, { Component } from "react";
import { CgPlayButton } from 'react-icons/cg';
// import AudioComp from "./AudioComp";

class ResHead3Pt3 extends Component {
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
        const { img, pieceful,music } = this.props;
        return (
            <>
             <div className="badacontainerthird"  onClick={(e) => {
                if (e.target) {
                    // this.setState({isPlaying:!this.state.isPlaying})
                    // console.log(this.state.isPlaying);
                    // this.setState((prevState) => ({
                    //     isPlaying: !prevState.isPlaying                        
                    // }))
                    // this.setState({isPlay:!this.state.isPlay})
                    console.log(this.state.isPlaying);
                }}}>
                        <div className="photocontainerthird" onClick={()=>{this.handlePlayPause()}} >
                            <div className="firstimagethird">
                                <img className="firstimageathird" src={img} alt={pieceful} />
                                <div className="textandthird" >
                                    <div className="instrumentalthird">{pieceful}</div>
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

export default ResHead3Pt3;