import React, { Component } from 'react';

import Header from '../Header';
import TitleWithDescription from '../TitleWithDescription';
import CaseStudySelection from '../CaseStudySelection';

class Home extends Component {
  render() {
    return (
      <div id="Home">
        <Header />
        <div id="IntroCircle" className="br-100 bg-black-05 relative o-80" />
        <div className="w-60-l w-80-m w-90 center cf relative pb5">
          <div className="nt8 z-0">
            <h1 className="f1-ns f2 fw4 lh-copy z-0">Dennis Cortés is a Designer, Illustrator, Developer, and Writer</h1>
            <span className="f4-ns f5 black-50 ttu tracked fw7 z-0 ">Available for Work <span id="blinker" className="green f3">•</span></span>
          </div>
          <div className="w-70-l w-100 fr-l mt0-l mt5">
            <p className="f3-ns f4 black-50 lh-subtitle mt0">
              Currently leading design at <a className="subtitle-link link black-50 hover-blue" href="http://satchelhealth.com">Satchel Health</a> and building
              resources and experiences at <a className="subtitle-link link black-50 hover-blue" href="http://usequarry.com">Quarry</a>. I also write a bit for
              my weekly personal blog, <a className="subtitle-link link black-50 hover-blue" href="https://medium.com/the-rate-of-change">The Rate of Change</a>.
              Email me at <a className="subtitle-link link black-50 hover-blue" href="mailto:hi@cortes.us">hi@cortes.us</a> if you'd like to get in touch.
            </p>
          </div>
        </div>
        <div id="Work" className="w-100 bg-black-05 mt5">
          <span className="dib rotated-text">Work</span>
          <div className="pv5 w-80-ns w-90 center">
             <TitleWithDescription
                selectionLink="https://dribbble.com/fromcortes"
                selectionTitle="Design Portfolio"
                selectionDescription="Most recent design work and experiments." />
            <TitleWithDescription
                selectionLink="http://usequarry.com"
                selectionTitle="Quarry"
                selectionDescription="Curated resources for humans." />
            <TitleWithDescription
                selectionLink="http://coffee.cortes.us"
                selectionTitle="Taste Notes"
                selectionDescription="Coffee thoughts and reference." />
            <TitleWithDescription
                selectionLink="http://sogol.co"
                selectionTitle="Sogol"
                selectionDescription="Hand crafted and on-demand logos for your ideas." />
            <TitleWithDescription
                selectionLink="http://fieldy.co"
                selectionTitle="Fieldy"
                selectionDescription="Unofficial resources for lovers of Field Notes." />
            <TitleWithDescription
                selectionLink="http://calligritype.us"
                selectionTitle="Calligritype"
                selectionDescription="A place for artists and designers." />
            <TitleWithDescription
                selectionLink="http://instagram.com/illustree"
                selectionTitle="Ilustree"
                selectionDescription="A resource for illustration inspiration." />
            <TitleWithDescription
                selectionLink="http://shopdrones.co"
                selectionTitle="Shop Drones Co."
                selectionDescription="Drone shopping made beautifully simple." />
            <TitleWithDescription
                selectionLink="http://music.cortes.us"
                selectionTitle="Cordio"
                selectionDescription="Music by me for people to listen to." />
            <TitleWithDescription
                selectionLink="http://pokem.cortes.us"
                selectionTitle="Pokém"
                selectionDescription="A Pokémon team and dex tracker." />
          </div>
        </div>
        <div id="CaseStudies" className="w-100 mt3">
          <span className="dib rotated-text">Case Studies</span>
          <div className="pv5 w-80-ns w-90 center">
            <CaseStudySelection />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
