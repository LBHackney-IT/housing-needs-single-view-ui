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

    let emailsComponent = '';

    if (customer.email) {
      emailsComponent = customer.email.map(email => (
        <p key={email}>
          <a href={`mailto:${email}`}>{email}</a>
        </p>
      ));
    }

    return (
      <div className="details__left-column__item">
        <h2>Contact Details</h2>
        <table>
          <tbody>
            <tr>
              <th>Phone no:</th>
              <td>{phonesComponent}</td>
            </tr>
            <tr>
              <th>Email:</th>
              <td>{emailsComponent}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
