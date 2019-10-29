import React, { Component } from 'react';

export default class SystemIds extends Component {
  getProp(prop) {
    return prop ? prop : 'No data';
  }

  render() {
    const cust = this.props.customer;

    return (
      <div className="details__left-column__item">
        <h2>System IDs</h2>
        <table>
          <tbody>
            <tr>
              <td>Application ref:</td>
              <td>{this.getProp(cust.housingRegister.applicationRef)}</td>
            </tr>
            <tr>
              <td>Academy claim ID:</td>
              <td>{this.getProp(cust.systemIds.academy)}</td>
            </tr>
            <tr>
              <td>Jigsaw customer no:</td>
              <td>{this.getProp(cust.systemIds.jigsaw)}</td>
            </tr>
            <tr>
              <td>Jigsaw case ref:</td>
              <td>{this.getProp(cust.housingNeeds.jigsawCaseId)}</td>
            </tr>
            <tr>
              <td>Council tax ref:</td>
              <td>need this</td>
            </tr>
            <tr>
              <td>Rent account ref:</td>
              <td>need this</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
