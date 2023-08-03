import { Component } from "react";
import {IoIosArrowBack,IoIosArrowForward} from 'react-icons/io';

class Head5 extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return(     
            <>
                <div className="box5"  >
                    <div className="box6">
                        <div className="leftarrow"><IoIosArrowBack/></div>
                        <div className="rightarrow"><IoIosArrowForward/></div>
                    </div>
                    <div className="box6a">
                        <button className="signup"onClick={this.props.handleLogin} >Sign up</button>
                        <button className="login">Log in</button>
                    </div>
                </div>
            </>
        )
    }
}
export default Head5;
