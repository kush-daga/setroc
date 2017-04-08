import React, { Component } from 'react';

class InlineListItem extends Component {
  render() {

    const {
      inlineListItemLink,
      inlineListItemTitle
    } = this.props;

    return (
        <li className="dib mr2 mb2">
          <a href={inlineListItemLink} target="_blank" rel="noreferrer" className="rainbow-hover br2 fw4 f5 lh-copy db pa2 link black ba b--black-10">
            {inlineListItemTitle}
          </a>
        </li>
    );
  }
}

export default InlineListItem;