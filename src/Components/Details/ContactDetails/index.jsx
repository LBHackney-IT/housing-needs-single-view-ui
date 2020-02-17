import React, { Component } from 'react';

export default class ContactDetails extends Component {
  render() {
    const { customer } = this.props;
    let phonesComponent = '';

    if (customer.phone) {
      phonesComponent = customer.phone.map(phone => (
        <p key={phone}> {phone.replace(/\D/g, '')} </p>
      ));
    }

    return (
      <div className="details__left-column__item">
        <h2>Contact Details</h2>
        <table>
          <tbody>
            <tr>
              <td>Phone no:</td>
              <td>{phonesComponent}</td>
            </tr>
            <tr>
              <td>Email:</td>
              <td>{customer.email}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
