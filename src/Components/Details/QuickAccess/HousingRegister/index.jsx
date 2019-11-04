import React, { Component } from 'react';

export default class HousingRegister extends Component {
  render() {
    const { customer } = this.props;

    if (!customer.housingRegister.biddingNo) {
      return <></>;
    }

    return (
      <div className="quick-access__item">
        <h3>Housing Register</h3>
        <table>
          <tbody>
            <tr>
              <td>Bidding no:</td>
              <td>{customer.housingRegister.biddingNo}</td>
            </tr>
            <tr>
              <td>Band:</td>
              <td>{customer.housingRegister.band}</td>
            </tr>
          </tbody>
        </table>
        <div className="quick-access__item__links">
          <ul>
            <li>
              <a href="#/">More details</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
