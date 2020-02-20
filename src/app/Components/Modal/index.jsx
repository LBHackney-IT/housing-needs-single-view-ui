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
            <a className="close" href="#/" onClick={close}>
              &times;
            </a>
            <div className="content">{children}</div>
          </div>
        )}
      </Popup>
    );
  }
}
