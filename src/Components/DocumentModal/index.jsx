import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import './index.css';

export default class DocumentModal extends Component {
  render() {
    const { open, onClose, url } = this.props;

    return (
      <div className="documentModal">
        <Popup modal closeOnDocumentClick open={open} onClose={onClose}>
          {close => (
            <div>
              <a className="close" href="#/" onClick={close}>
                &times;
              </a>
              <iframe title="document" src={url}></iframe>
            </div>
          )}
        </Popup>
      </div>
    );
  }
}
