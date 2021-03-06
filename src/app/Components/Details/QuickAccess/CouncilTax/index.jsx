import React, { Component } from 'react';
import Modal from '../../../Modal';
import { formatCurrency, formatDisplayDate } from '../../../../lib/Utils';

export default class CouncilTax extends Component {
  render() {
    const { customer } = this.props;

    if (!customer.systemIds.academyCouncilTax) {
      return <></>;
    }

    return (
      <div className="quick-access__item">
        <h3>Council Tax</h3>
        <table>
          <tbody>
            <tr>
              <th>Balance:</th>
              <td>{formatCurrency(customer.councilTax.accountBalance)}</td>
            </tr>
          </tbody>
        </table>
        <div className="quick-access__item__links">
          <ul>
            <li>
              <Modal
                trigger={<button className="linkStyle">More details</button>}
              >
                <h3>Council tax information</h3>
                <br />
                <table>
                  <tbody>
                    <tr>
                      <th>Council tax ref</th>
                      <td>{customer.systemIds.academyCouncilTax}</td>
                    </tr>
                    <tr>
                      <th>Account balance</th>
                      <td>
                        {formatCurrency(customer.councilTax.accountBalance)}
                      </td>
                    </tr>
                    <tr>
                      <th>Payment method</th>
                      <td>{customer.councilTax.paymentMethod}</td>
                    </tr>
                    <tr>
                      <th>Recent transactions</th>
                      <td>
                        <table>
                          <tbody>
                            {customer.councilTax.transactions.map((t, i) => {
                              return (
                                <tr key={i}>
                                  <td>{formatDisplayDate(t.date)}</td>
                                  <td>{t.description}</td>
                                  <td>{formatCurrency(t.amount)}</td>
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
