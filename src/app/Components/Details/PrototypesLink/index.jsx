import React from 'react';
import Modal from '../../Modal';
import moment from 'moment';

const linkStyle = {
  textDecoration: 'underline',
  border: 'none',
  background: 'transparent',
  fontSize: '100%',
  color: '#00664f'
};

export default function PrototypesLink(props) {
  const { customer } = props;

  if (!customer.dob) {
    return (
      <div className="details__left-column__item">
        A date of birth needs to be added to the customer record before the
        prototype tools can be used.
      </div>
    );
  }

  const customerName = `${customer.name &&
    customer.name[0].first}-${customer.name &&
    customer.name[0].last}`.toLowerCase();
  const customerId = `${customerName}-${moment(customer.dob[0]).format(
    'YYYY-MM-DD'
  )}`;

  return (
    <div className="details__left-column__item">
      <Modal trigger={<button style={linkStyle}>Prototype testing</button>}>
        <h3>Prototype testing</h3>
        <h4>Vulnerability Snapshot:</h4>
        <ul style={{ margin: '10px 0' }}>
          <li>
            <a
              href={`${process.env.REACT_APP_VULNERABILITIES_APP_URL_OLD}/customers/${customerId}`}
            >
              Checklist
            </a>
          </li>
        </ul>
        <h4 style={{ margin: '10px 0' }}>Shared Plan:</h4>
        {props.customer.housingNeeds.jigsawCaseId ? (
          <p>
            This person already has a PHP in Jigsaw. Please take a look before
            creating a Shared Plan
          </p>
        ) : null}
        <p>
          <a
            href={`${process.env.REACT_APP_VULNERABILITIES_APP_URL_OLD}/customers/${customerId}/plan`}
          >
            Visit Shared Plan
          </a>
        </p>
        <h4 style={{ margin: '10px 0' }}>SMS Tool:</h4>
        <p>
          <a href="https://proto.collabtools.hackney.gov.uk/">Visit SMS Tool</a>
        </p>
      </Modal>
    </div>
  );
}
