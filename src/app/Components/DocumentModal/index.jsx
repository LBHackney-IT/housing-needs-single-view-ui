import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import './index.scss';

export default class DocumentModal extends Component {
  render() {
    const { open, onClose, url } = this.props;

    return (
      <div className="documentModal">
        <Popup modal closeOnDocumentClick open={open} onClose={onClose}>
          {close => (
            <div>
              <button className="linkStyle close" onClick={close}>
                &times;
              </button>
              <iframe title="document" src={url}></iframe>
            </div>
          )}
        </Popup>
      </div>
    );
  }
}
