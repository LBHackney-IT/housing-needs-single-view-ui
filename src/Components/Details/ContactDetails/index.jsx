import React, { Component } from 'react';

export default class ContactDetails extends Component {
  render() {
    return (
      <div className="details__left-column__item">
        <h2>Contact Details</h2>
        <table>
          <tbody>
            <tr>
              <td>Phone no:</td>
              <td>{this.props.customer.phone}</td>
            </tr>
            <tr>
              <td>Email:</td>
              <td>need this</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
