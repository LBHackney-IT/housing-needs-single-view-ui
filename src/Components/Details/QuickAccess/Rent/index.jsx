import React, { Component } from 'react';
import Utils from '../../../../lib/Utils';
import Modal from '../../../Modal';

export default class Rent extends Component {
  render() {
    const { customer } = this.props;

    if (!customer.rentAccountRef) {
      return <></>;
    }
    return (
      <div className="quick-access__item">
        <h3>Rent</h3>
        <table>
          <tbody>
            <tr>
              <td>Account ref:</td>
              <td>{customer.rentAccountRef}</td>
            </tr>
            <tr>
              <td>Balance:</td>
              <td>{Utils.formatCurrency(customer.rentAccountBalance)}</td>
            </tr>
          </tbody>
        </table>
        <div className="quick-access__item__links">
          <ul>
            <li>
              <Modal trigger={<a href="#/">More details</a>}>
                <h3>...</h3>
                <br />
                <table>
                  <tbody></tbody>
                </table>
              </Modal>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
