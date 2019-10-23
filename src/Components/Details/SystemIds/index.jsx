import React, { Component } from "react";

export default class SystemIds extends Component {
  render() {
    return (
      <div className="details__left-column__item">
        <h2>System IDs</h2>
        <table>
          <tbody>
            <tr>
              <td>Applicant ref:</td>
              <td>{this.props.customer.uhtId}</td>
            </tr>
            <tr>
              <td>Academy claim ID:</td>
              <td>{this.props.customer.benefitClaimId}</td>
            </tr>
            <tr>
              <td>Jigsaw customer no:</td>
              <td>{this.props.customer.jigsawId}</td>
            </tr>
            <tr>
              <td>Jigsaw case ref:</td>
              <td>{this.props.customer.jigsawCaseId}</td>
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
