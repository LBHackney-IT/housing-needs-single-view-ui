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
              <th>Contact:</th>
              <td>{customer.team.name}</td>
            </tr>
            <tr>
              <th>Job Title:</th>
              <td>{customer.team.jobTitle}</td>
            </tr>
            <tr>
              <th>Agency:</th>
              <td>{customer.team.agency}</td>
            </tr>
            <tr>
              <th>Phone:</th>
              <td>{customer.team.phone}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
