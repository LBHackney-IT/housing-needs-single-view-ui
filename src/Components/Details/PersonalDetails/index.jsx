import React, { Component } from 'react';
import moment from 'moment';

export default class PersonalDetails extends Component {
  render() {
    return (
      <div className="details__left-column__item">
        <h1>
          {this.props.customer.name[0].title}{' '}
          {this.props.customer.name[0].first} {this.props.customer.name[0].last}
        </h1>
        <table>
          <tbody>
            <tr>
              <td>Date of birth:</td>
              <td>{moment(this.props.customer.dob).format('DD/MM/YYYY')}</td>
            </tr>
            <tr>
              <td>National insurance no:</td>
              <td>{this.props.customer.nino}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
