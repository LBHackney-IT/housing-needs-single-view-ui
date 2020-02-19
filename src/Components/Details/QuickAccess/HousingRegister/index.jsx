import React, { Component } from 'react';
import Modal from '../../../Modal';

export default class HousingRegister extends Component {
  housingRegisterRecord(t) {
    return (
      <table>
        <tbody>
          <tr>
            <td>Application Ref:</td>
            <td>{t.applicationRef}</td>
          </tr>
          <tr>
            <td>Bidding no:</td>
            <td>{t.biddingNo}</td>
          </tr>
          <tr>
            <td>Band:</td>
            <td>{t.band}</td>
          </tr>
          <tr>
            <td>Effective Band Date:</td>
            <td>{t.startDate}</td>
          </tr>
          <br />
        </tbody>
      </table>
    );
  }

  render() {
    const { customer } = this.props;

    if (!customer.housingRegister[0]) {
      return <></>;
    }

    return (
      <div className="quick-access__item">
        <h3>Housing Register</h3>
        <table>
          <tbody>
            <tr>
              <td>Bidding no:</td>
              <td>{customer.housingRegister[0].biddingNo}</td>
            </tr>
            <tr>
              <td>Band:</td>
              <td>{customer.housingRegister[0].band}</td>
            </tr>
          </tbody>
        </table>
        <div className="quick-access__item__links">
          <ul>
            <li>
              <Modal trigger={<a href="#/">More details</a>}>
                <h3>Housing Register Information</h3>
                <br />
                <table>
                  {customer.housingRegister.map(t =>
                    this.housingRegisterRecord(t)
                  )}
                </table>
              </Modal>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
