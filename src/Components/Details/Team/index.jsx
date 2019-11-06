import React, { Component } from 'react';

export default class Team extends Component {
  render() {
    const { customer } = this.props;

    if (!customer.team) {
      return <></>;
    }

    return (
      <div className="details__left-column__item">
        <h2>Team</h2>
        <table>
          <tbody>
            <tr>
              <td>Contact:</td>
              <td>{customer.team.name}</td>
            </tr>
            <tr>
              <td>Job Title:</td>
              <td>{customer.team.jobTitle}</td>
            </tr>
            <tr>
              <td>Agency:</td>
              <td>{customer.team.agency}</td>
            </tr>
            <tr>
              <td>Phone:</td>
              <td>{customer.team.phone}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
