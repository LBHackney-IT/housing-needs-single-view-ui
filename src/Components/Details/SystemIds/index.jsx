import React, { Component } from 'react';

export default class SystemIds extends Component {
  getProp(prop) {
    return prop ? prop : 'No data';
  }

  render() {
    const { customer } = this.props;

    return (
      <div className="details__left-column__item">
        <h2>System IDs</h2>
        <table>
          <tbody>
            <tr>
              <td>Application ref:</td>
              <td>{this.getProp(customer.housingRegister.applicationRef)}</td>
            </tr>
            <tr>
              <td>Jigsaw customer no:</td>
              <td>{this.getProp(customer.systemIds.jigsaw)}</td>
            </tr>
            <tr>
              <td>Jigsaw case ref:</td>
              <td>{this.getProp(customer.housingNeeds.jigsawCaseId)}</td>
            </tr>
            <tr>
              <td>Council tax ref:</td>
              <td>{this.getProp(customer.systemIds.academyCouncilTax)}</td>
            </tr>
            <tr>
              <td>Benefits ref:</td>
              <td>{this.getProp(customer.systemIds.academyBenefits)}</td>
            </tr>
            <tr>
              <td>UHW ref:</td>
              <td>{this.getProp(customer.systemIds.uhw)}</td>
            </tr>
            <tr>
              <td>Household ref:</td>
              <td>{this.getProp(customer.systemIds.householdRef)}</td>
            </tr>
            <tr>
              <td>Rent account ref:</td>
              <td>{this.getProp(customer.systemIds.rent)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
