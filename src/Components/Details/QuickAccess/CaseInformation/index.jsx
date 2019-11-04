import React, { Component } from 'react';

export default class CaseInformation extends Component {
  render() {
    const { customer } = this.props;

    if (!customer.systemIds.jigsaw) {
      return <></>;
    }

    return (
      <div className="quick-access__item">
        <h3>Case Information</h3>

        <table>
          <tbody>
            <tr>
              <td>Stage:</td>
              <td>{customer.housingNeeds.status}</td>
            </tr>
          </tbody>
        </table>
        <div className="quick-access__item__links">
          <ul>
            <li>
              <a
                href={`https://training.housingjigsaw.co.uk/prah/case/${customer.housingNeeds.jigsawCaseId}/php`}
              >
                Link to PHP
              </a>
            </li>
            <li>
              <a
                href={`https://training.housingjigsaw.co.uk/customers/customer/${customer.systemIds.jigsaw}`}
              >
                More details
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
