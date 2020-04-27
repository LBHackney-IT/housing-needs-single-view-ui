import React, { Component } from 'react';
import moment from 'moment';

export default class PersonalDetails extends Component {
  render() {
    const { customer } = this.props;

    return (
      <div className="details__left-column__item">
        <h1>
          {customer.name && customer.name[0].title}{' '}
          {customer.name && customer.name[0].first}{' '}
          {customer.name && customer.name[0].last}
        </h1>
        <table>
          <tbody>
            <tr>
              <th>Date of birth:</th>
              <td>
                {customer.dob && moment(customer.dob[0]).format('DD/MM/YYYY')}
              </td>
            </tr>
            <tr>
              <th>National insurance no:</th>
              <td>{customer.nino}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
