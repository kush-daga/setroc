import React, { Component } from 'react';

import Footer from '../../Footer';
import Section from '../../Section';
import Title from '../../Title';

class Mentoring extends Component {
  render() {
    return (
      <div id="Mentoring" className="relative black">

        <div className="w-100 bg-dot-grid center pv4 ph0-ns z-0 tc smooth-text">
          <div className="center w-90">
            <span className="f-subheadline-ns f1 db mt5">📂</span>
            <h1 className="bg-text-clip f-headline-ns f-subheadline fw8 lh-title mb3 mt4 shine tracked-tiny">Folder</h1>
            <p className="animated fadeInUp black center fw6 f3 lh-subtitle measure mb5-l mb4 tracked-tiny">
              A monthly newsletter by Dennis Cortés
            </p>
            <div className="w-100 cf">
              <div className="fl-l w-40-l w-50-m center-m w-100 pr5-l mb0-l mb4">
                <p className="black-60 f4 lh-subtitle measure mb4 tl-l tracked-tiny">
                  A curated selection of great resources, people, updates, other valuable things delivered
                  straight to your inbox on the first of each month.
                </p>
                <form action="https://cortes.us9.list-manage.com/subscribe/post" method="POST">
                  {/*Hidden fields for Mailchimp account and list*/}
                  <input type="hidden" name="u" value="574c615abddacf2d7b51d2104" />
                  <input type="hidden" name="id" value="7bd40f02a4" />
                  <label className="clip" for="email-address">Your Email</label>
                  <input className="f4 fw6 shine bg-text-clip input-reset ba b--black-10 black bg-white pa3 w-100 br2 mb3"
                    placeholder="Your Email"
                    type="email" name="MERGE0" tabindex="-1" id="b_email" />
                  <input className="bn fw6 f6 ttu button-reset dim pv3 tc white bg-gradient pointer w-100 br2 mb0-l mb4" type="submit" value="Subscribe" />
                </form>
              </div>
              <div className="fl-l w-60-l w-100">
                <ul className="animated fadeIn cf list pl0 tl">
                  <li className="bl b--black-10 fl pb4 pl4 pr3 w-50-ns w-100">
                    <Title className="fw6 mt0" toolTipText="📦" title="Resources"></Title>
                    <p className="black-60 mt2 mb0">
                      Every month I'll send a few articles, products, or other links that
                      I thought were cool.
                    </p>
                  </li>
                  <li className="bl b--black-10 fl pb4 pl4 pr3 w-50-ns w-100">
                    <Title className="fw6 mt0" toolTipText="👏" title="Project Updates"></Title>
                    <p className="black-60 mt2 mb0">
                      I'm always working on new projects, Folder will be a great place to see
                      new things I ship.
                    </p>
                  </li>
                  <li className="bl b--black-10 fl pb4 pl4 pr3 w-50-ns w-100">
                    <Title className="fw6 mt0" toolTipText="😻" title="Cool People"></Title>
                    <p className="black-60 mt2 mb0">
                      There are plenty of people that inspire me and my work, I'll
                      be sharing them here.
                    </p>
                  </li>
                  <li className="bl b--black-10 fl pb4 pl4 pr3 w-50-ns w-100">
                    <Title className="fw6 mt0" toolTipText="💩" title="No s#!% (Spam)"></Title>
                    <p className="black-60 mt2 mb0">
                      I don't like using the S word around here, so I'll never put s#!% in your
                      inbox either.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default Mentoring;