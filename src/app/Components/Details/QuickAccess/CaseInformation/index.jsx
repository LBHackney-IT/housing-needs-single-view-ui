import React, { Component } from 'react';
import Modal from '../../../Modal';
import Utils from '../../../../lib/Utils';

export default class CaseInformation extends Component {
  render() {
    const { customer } = this.props;

    if (!customer.systemIds.jigsaw) {
      return <></>;
    }

    let phpLink = '';
    if (customer.housingNeeds.jigsawCaseId) {
      phpLink = (
        <a
          href={`https://live.housingjigsaw.co.uk/prah/case/${customer.housingNeeds.jigsawCaseId}/php`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Link to PHP
        </a>
      );
    }

    return (
      <div className="quick-access__item">
        <h3>Case Information</h3>

        <table>
          <tbody>
            <tr>
              <th>Stage:</th>
              <td>{customer.housingNeeds.status}</td>
            </tr>
          </tbody>
        </table>
        <div className="quick-access__item__links">
          <ul>
            <li>{phpLink}</li>
            <li>
              <a
                href={`https://live.housingjigsaw.co.uk/customers/customer/${customer.systemIds.jigsaw}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Link to Jigsaw
              </a>
            </li>
            {customer.housingNeeds.currentPlacement && (
              <li>
                <Modal
                  trigger={<button className="linkStyle">More details</button>}
                >
                  <h3>Case details</h3>
                  <br />
                  <table>
                    <tbody>
                      <tr>
                        <th>Tenancy ID</th>
                        <td>
                          {customer.housingNeeds.currentPlacement.tenancyId}
                        </td>
                      </tr>
                      <tr>
                        <th>Placement Type</th>
                        <td>{customer.housingNeeds.currentPlacement.type}</td>
                      </tr>
                      <tr>
                        <th>Duty</th>
                        <td>{customer.housingNeeds.currentPlacement.duty}</td>
                      </tr>
                      <tr>
                        <th>Placement Address</th>
                        <td>
                          {customer.housingNeeds.currentPlacement.address}
                        </td>
                      </tr>
                      <tr>
                        <th>Start date</th>
                        <td>
                          {customer.housingNeeds.currentPlacement.startDate}
                        </td>
                      </tr>
                      <tr>
                        <td>
                          {Utils.formatCurrency(
                            customer.housingNeeds.currentPlacement
                              .rentCostCustomer
                          )}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </Modal>
              </li>
            )}
          </ul>
        </div>
      </div>
    );
  }
}
