import React, { Component } from 'react';

export default class ContactDetails extends Component {
  render() {
    const { customer } = this.props;

    return (
      <div className="details__left-column__item">
        <h2>Contact Details</h2>
        <table>
          <tbody>
            <tr>
              <td>Phone no:</td>
              <td>{customer.phone}</td>
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
