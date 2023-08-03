import Head from "./components/Head";
import Head2 from "./components/Head2";
import Head4 from "./components/Head4";
import Head5 from "./components/Head5";
import Head6 from "./components/Head6";
// import Head3 from "./components/Head3";
import React, { Component } from "react";
// import AudioComp from "./components/AudioComp";
import CardManage from "./components/CardManage";
import ResCardManager1 from "./components/ResCardManager1";
import Hamburger from "./components/Hamburger";
import { createRef } from "react";
import SearchCom from "./components/SearchCom";
// import AudioComp from "./components/AudioComp";
// import ResHead3Pt from "./components/ResHead3Pt";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onHam: false,
      onSearch: false,

    }

  }
  handleHam = () => {
    this.setState((prevState) => ({
      onHam: !prevState.onHam,
    }));
  };
  handleSearch = () => {
    this.setState((prevState) => ({
      onSearch: !prevState.onSearch,
    }));
  };


  render() {
    return (
      <>
        {this.state.onHam && <Hamburger handleHam={this.handleHam} />}
        {this.state.onSearch ? (
          <section style={{ backgroundColor: "black", paddingTop: "15px", height: "800px", overflowY: "hidden" }}>
            <SearchCom handleSearch={this.handleSearch} />
          </section>
        ) : this.state.onHam ? null : (
          // Content inside the response div
          <div className="response" id="reszero" style={{ backgroundColor: "#121212", height: "auto" }}>
            <Head6 handleHam={this.handleHam} handleSearch={this.handleSearch} />
            <ResCardManager1 />
          </div>
        )}

        <section className="ajju" style={{ height: "100vh", width: "100%", backgroundColor: "black", overflow: "hidden" }}>
          <div className="parent" style={{ display: "flex", justifyContent: "space-evenly"  }}>
            <div className="pappa" style={{ position: "relative", overflow: 'hidden', minWidth: "340px", height: "35.5rem", display: "flex", flexDirection: "column", justifyContent: "space-evenly", alignItems: "center" }}>
              <Head></Head>
              <Head2></Head2>
            </div>
            <article className="child" style={{ position: "relative", overflow: 'hidden', width: "300%", height: "35.5rem", display: "flex", flexDirection: "column", justifyContent: "space-evenly" }}>

              <Head5 handleLogin={this.handleLogin} />
              <CardManage handlePlaying={this.handlePlaying}></CardManage>

            </article>
          </div>
          <article style={{ display: "flex", width: "100%", justifyContent: "space-evenly", overflow: 'hidden' }}>
            <Head4></Head4>
          </article>

        </section>
      </>
    )

  }
}
export default App;
