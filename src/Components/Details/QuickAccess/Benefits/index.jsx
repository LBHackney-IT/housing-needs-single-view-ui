import React, { Component } from 'react';
import Utils from '../../../../lib/Utils';
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
                <h3>Benefits information</h3>
                <br />
                <table>
                  <tbody>
                    <tr>
                      <td>Income</td>
                      <td>
                        <table>
                          <tbody>
                            {customer.benefits.income.map((income, i) => {
                              return (
                                <tr key={i}>
                                  <td>{income.description}</td>
                                  <td>{income.frequency}x</td>
                                  <td>{income.period_len}</td>
                                  <td>{Utils.formatCurrency(income.amount)}</td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </Modal>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
