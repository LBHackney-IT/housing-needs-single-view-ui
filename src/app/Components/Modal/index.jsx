import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import './index.scss';

export default class Modal extends Component {
  render() {
    const { trigger, children } = this.props;

    return (
      <Popup trigger={trigger} modal closeOnDocumentClick>
        {close => (
          <div className="modal">
            <button className="linkStyle close" onClick={close}>
              &times;
            </button>
            <div className="content">{children}</div>
          </div>
        )}
      </Popup>
    );
  }
}
