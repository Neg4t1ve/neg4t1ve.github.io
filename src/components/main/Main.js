import React, { Component } from "react";
import Description from "./description/description";
import FreeQuote from "./free-quote/free-quote";
import VideoBlock from "./video-block/videoBlock";
import Services from "./services/Services";
import Covid from "./covid/Covid";
import Areas from "./areas/Areas";
import Differences from "./differences/Differences";
// import Articles from "./articles/Articles";
import Request from "./request/Request";
import Footerbot from "./Footerbot";

export default class Main extends Component {
  render() {
    return (
      <main className="main">
        <section className="free-quote">
          <FreeQuote />
        </section>
        <section className="description">
          <Description />
          <div className="separator"></div>
        </section>
        <section className="video-block">
          <VideoBlock />
        </section>
        <section className="services">
          <Services />
        </section>
        <section className="covid">
          <Covid />
        </section>
        <section className="areas">
          <Areas />
        </section>
        <section className="differences">
          <Differences />
          {/* <div className="separator"></div> */}
        </section>
        {/* <section className="articles">
          <Articles />
        </section> */}
        <section className="request">
          <Request />
        </section>
        <section className="info">
          <Footerbot />
        </section>
      </main>
    );
  }
}
