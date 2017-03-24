import React, { Component } from 'react';
import { Link } from 'react-router';

import Logo from '../Logo';

class Footer extends Component {
  render() {
    return (
      <div id="Footer" className="pv4 bg-black">
        <div className="w-90 center cf">
          <div className="w-50-l w-100 fl">
            <div className="w-10 fl pt1 mr3-l mr4">
              <Logo />
            </div>
            <small className="f6 tl white-70">© 2017 <b className="ttu">Dennis Cortés</b></small>
            <div className="tl mt3">
              <span className="pb2">
                <Link to="/about" className="rainbow-hover f6 link white-30 lh-title" title="About">About</Link>
              </span>
              <span className="ml3 pb2">
                <Link to="/" className="rainbow-hover f6 link white-30 lh-title" title="Blog">Blog</Link>
              </span>
              <span className="ml3 pb2">
                <a href="http://eepurl.com/cgT2bD" className="rainbow-hover f6 link black-30 lh-title" title="Newsletter">Newsletter</a>
              </span>
            </div>
          </div>
          <div className="w-50-l w-100 fr-l fl pt1 mt2-l mt4">
            <a href="https://twitter.com/fromcortes" className="dim fr-l fl mr0-l">
              <img src='https://icon.now.sh/twitter/25/ffffff' alt='twitter' />
            </a>
            <a href="https://twitch.com/cortesarts" className="dim fr-l fl mr4-l ml0-l ml4">
              <img src='https://icon.now.sh/twitch/25/ffffff' alt='twitch' />
            </a>
            <a href="https://youtube.com/cortesarts" className="dim fr-l fl mr4-l ml0-l ml4">
              <img src='https://icon.now.sh/play_arrow/25/ffffff' alt='youtube' />
            </a>
            <a href="https://instagram.com/fromcortes" className="dim fr-l fl mr4-l ml0-l ml4">
              <img src='https://icon.now.sh/instagram/25/ffffff' alt='instagram' />
            </a>
            <a href="https://github.com/fromcortes" className="dim fr-l fl mr4-l ml0-l ml4">
              <img src='https://icon.now.sh/github/25/ffffff' alt='github' />
            </a>
            <a href="mailto:hi@cortes.us" className="dim fr-l fl mr4-l ml0-l ml4">
              <img src='https://icon.now.sh/email/25/ffffff' alt='email' />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
