import React, { Component, Fragment } from 'react';
import moment from 'moment';

export default class AddressDetails extends Component {
  lineBreakifyAddress(address) {
    return address.map((line, i) => {
      return (
        <Fragment key={i}>
          {line}
          <br />
        </Fragment>
      );
    });
  }

  render() {
    const { customer } = this.props;

    return (
      <div className="details__left-column__item">
        <h2>Addresses</h2>
        <table>
          <tbody>
            <tr>
              <td>Known addresses:</td>
              <td>
                {customer.address.length > 0 ? (
                  customer.address.map((address, i) => {
                    return (
                      <p key={i} title={address.source.join(', ')}>
                        {this.lineBreakifyAddress(address.address)}
                      </p>
                    );
                  })
                ) : (
                  <p>No data</p>
                )}
              </td>
            </tr>

            <tr>
              <td>Household member(s):</td>
              <td>
                {this.props.customer.household &&
                this.props.customer.household.length > 0 ? (
                  <ul>
                    {this.props.customer.household.map((p, i) => {
                      return (
                        <li key={i}>
                          {p.title} {p.first} {p.last} <br />
                          {moment(p.dob).format('DD/MM/YYYY')}
                        </li>
                      );
                    })}
                  </ul>
                ) : (
                  <p>No data</p>
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
