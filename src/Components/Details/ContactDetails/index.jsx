import React, { Component } from 'react';

export default class ContactDetails extends Component {
  render() {
    const { customer } = this.props;

    const phonesComponent = (
      <td>
        {customer.phone.map(phone => (
          <p> {phone.replace(/\D/g, '')} </p>
        ))}
      </td>
    );

    return (
      <div className="details__left-column__item">
        <h2>Contact Details</h2>
        <table>
          <tbody>
            <tr>
              <td>Phone no:</td>
              {phonesComponent}
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
