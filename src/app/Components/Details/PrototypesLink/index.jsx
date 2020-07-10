import React from 'react';
import Modal from '../../Modal';

const linkStyle = {
  textDecoration: 'underline',
  border: 'none',
  background: 'transparent',
  fontSize: '100%',
  color: '#00664f'
};

export default function PrototypesLink() {
  return (
    <div className="details__left-column__item">
      <Modal trigger={<button style={linkStyle}>Prototype testing</button>}>
        <h3>Prototype testing</h3>
        <h4 style={{ margin: '10px 0' }}>SMS Tool:</h4>
        <p>
          <a href="https://proto.collabtools.hackney.gov.uk/">Visit SMS Tool</a>
        </p>
      </Modal>
    </div>
  );
}
