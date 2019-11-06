import React, { Component } from 'react';
import moment from 'moment';

export default class PersonalDetails extends Component {
  render() {
    const { customer } = this.props;

    return (
      <div className="details__left-column__item">
        <h1>
          {customer.name[0].title} {customer.name[0].first}{' '}
          {customer.name[0].last}
        </h1>
        <table>
          <tbody>
            <tr>
              <td>Date of birth:</td>
              <td>{moment(customer.dob[0]).format('DD/MM/YYYY')}</td>
            </tr>
            <tr>
              <td>National insurance no:</td>
              <td>{customer.nino}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
