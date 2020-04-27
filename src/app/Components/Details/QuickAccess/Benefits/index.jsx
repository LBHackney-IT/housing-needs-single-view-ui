import React, { Component } from 'react';
import Utils from '../../../../lib/Utils';
import Modal from '../../../Modal';

export default class Benefits extends Component {
  uc() {
    let ucBenefits = this.props.customer.benefits.income.filter(
      ben => ben.description === 'Universal Credit Award'
    );
    return ucBenefits.length > 0 ? 'Yes' : 'No';
  }
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
              <th>Live claim:</th>
              <td>{customer.benefits.live ? 'Yes' : 'No'}</td>
            </tr>
            <tr>
              <th>Universal Credit:</th>
              <td>{this.uc()}</td>
            </tr>
          </tbody>
        </table>
        <div className="quick-access__item__links">
          <ul>
            <li>
              <Modal
                trigger={<button className="linkStyle">More details</button>}
              >
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
                                  <td>
                                    {income.frequency > 0
                                      ? `${income.frequency} x`
                                      : null}
                                  </td>
                                  <td>
                                    {income.frequency > 0
                                      ? income.period
                                      : null}
                                  </td>
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
