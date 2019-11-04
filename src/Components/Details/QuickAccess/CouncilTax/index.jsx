import React, { Component } from 'react';
import Modal from '../../../Modal';
import Utils from '../../../../lib/Utils';
import moment from 'moment';

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
              <td>Balance:</td>
              <td>
                {Utils.formatCurrency(customer.councilTax.accountBalance)}
              </td>
            </tr>
          </tbody>
        </table>
        <div className="quick-access__item__links">
          <ul>
            <li>
              <Modal trigger={<a href="#/">More details</a>}>
                <h3>Council tax information</h3>
                <br />
                <table>
                  <tbody>
                    <tr>
                      <td>Council tax ref:</td>
                      <td>{customer.systemIds.academyCouncilTax}</td>
                    </tr>
                    <tr>
                      <td>Account balance:</td>
                      <td>
                        {Utils.formatCurrency(
                          customer.councilTax.accountBalance
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td>Payment method:</td>
                      <td>{customer.councilTax.paymentMethod}</td>
                    </tr>
                    <tr>
                      <td>Recent transactions:</td>
                      <td>
                        <table>
                          <tbody>
                            {customer.councilTax.transactions.map((t, i) => {
                              return (
                                <tr key={i}>
                                  <td>{moment(t.date).format('DD/MM/YYYY')}</td>
                                  <td>{t.description}</td>
                                  <td>{Utils.formatCurrency(t.amount)}</td>
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
