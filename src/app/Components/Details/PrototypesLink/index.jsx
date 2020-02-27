import React from 'react';
import Modal from '../../Modal';
import {Link} from 'react-router-dom';
import moment from 'moment';

const linkStyle = {
  textDecoration: 'underline',
  border: 'none',
  background: 'transparent',
  fontSize: '100%',
  color: '#00664f'
}

export default function PrototypesLink(props){
    const { customer } = props;
    const customerName = `${customer.name && customer.name[0].first}-${customer.name && customer.name[0].last}`.toLowerCase()
    const customerId = `${customerName}-${moment(customer.dob[0]).format('YYYY-MM-DD')}`

    return (
      <div className="details__left-column__item">
        <Modal trigger={<button style={linkStyle}>Prototype testing</button>}>
          <h3>Prototype testing</h3>
          <h4>Vulnerability Snapshot:</h4>
          <ul style={{'marginBottom':'10px'}}>
            <li><Link to={`/customers/${props.id}/vulnerabilities`}>Prototype 1: Free text</Link></li>
            <li><a href={`${process.env.REACT_APP_VULNERABILITIES_APP_URL}/customers/${customerId}`}>Prototype 2: Checklist</a></li>
          </ul>
          <h4>Shared Plan:</h4>
          <p>This person already has a PHP in Jigsaw. Please take a look before creating a Shared Plan</p>
          <a href={`${process.env.REACT_APP_VULNERABILITIES_APP_URL}/customers/${customerId}/plan`}>Shared Plan</a>
        </Modal>
      </div>
    );
}
