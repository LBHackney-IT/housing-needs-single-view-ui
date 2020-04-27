import React, { Component } from 'react';
import Modal from '../../../Modal';
import { formatDisplayDate } from '../../../../lib/Utils';

export default class HousingRegister extends Component {
  housingRegisterRecord(t, index) {
    return (
      <table key={index}>
        <tbody>
          <tr>
            <th>Application Ref:</th>
            <td>{t.applicationRef}</td>
          </tr>
          <tr>
            <th>Application status:</th>
            <td>{t.applicationStatus}</td>
          </tr>
          <tr>
            <th>Bidding no:</th>
            <td>{t.biddingNo}</td>
          </tr>
          <tr>
            <th>Band:</th>
            <td>{t.band}</td>
          </tr>
          <tr>
            <th>Effective Band Date:</th>
            <td>{formatDisplayDate(t.startDate)}</td>
          </tr>
          <tr>
            <th>Bedroom requirements:</th>
            <td>{t.bedroomReq}</td>
          </tr>
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
      <div className="quick-access__item" id="housingRegister">
        <h3>Housing Register</h3>
        <table>
          <tbody>
            <tr>
              <th>Bidding no:</th>
              <td>{customer.housingRegister[0].biddingNo}</td>
            </tr>
            <tr>
              <th>Band:</th>
              <td>{customer.housingRegister[0].band}</td>
            </tr>
          </tbody>
        </table>
        <div className="quick-access__item__links">
          <ul>
            <li>
              <Modal
                trigger={<button className="linkStyle">More details</button>}
              >
                <h3>Housing Register Information</h3>
                {customer.housingRegister.map((t, index) =>
                  this.housingRegisterRecord(t, index)
                )}
              </Modal>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
