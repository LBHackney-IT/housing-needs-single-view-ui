import React, { Component } from 'react';
import Modal from '../../../Modal';

export default class Benefits extends Component {
  render() {
    const { customer } = this.props;

    if (!customer.systemIds.academyBenefits) {
      return <></>;
    }

    return (
      <div className="quick-access__item">
        <h3>Benefits</h3>
        <table>
          <tbody>
            <tr>
              <td>Income:</td>
              <td></td>
            </tr>
            <tr>
              <td>Weekly:</td>
              <td></td>
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
