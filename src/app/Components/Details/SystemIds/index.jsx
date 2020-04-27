import React, { Component } from 'react';

export default class SystemIds extends Component {
  getProp(prop) {
    return prop ? prop : 'No Data';
  }

  separateId(ids) {
    if (typeof ids === 'string') return <p> {ids} </p>;
    return ids.map((id, i) => <p key={i}> {id} </p>);
  }

  render() {
    const { customer } = this.props;

    let appRef = 'No Data';
    if (customer.housingRegister[0]) {
      appRef = this.separateId(
        this.getProp(customer.housingRegister[0].applicationRef),
        'applicationRef'
      );
    }

    return (
      <div className="details__left-column__item">
        <h2>System IDs</h2>
        <table>
          <tbody>
            <tr>
              <th>Application ref:</th>
              <td>{appRef}</td>
            </tr>
            <tr>
              <th>Jigsaw customer no:</th>
              <td>
                {this.separateId(this.getProp(customer.systemIds.jigsaw))}
              </td>
            </tr>
            <tr>
              <th>Jigsaw case ref:</th>
              <td>
                {this.separateId(
                  this.getProp(customer.housingNeeds.jigsawCaseId)
                )}
              </td>
            </tr>
            <tr>
              <th>Council tax ref:</th>
              <td>
                {this.separateId(
                  this.getProp(customer.systemIds.academyCouncilTax)
                )}
              </td>
            </tr>
            <tr>
              <th>Benefits ref:</th>
              <td>
                {this.separateId(
                  this.getProp(customer.systemIds.academyBenefits)
                )}
              </td>
            </tr>
            <tr>
              <th>UHW contact ref:</th>
              <td>{this.separateId(this.getProp(customer.systemIds.uhw))}</td>
            </tr>
            <tr>
              <th>Household ref:</th>
              <td>
                {this.separateId(this.getProp(customer.systemIds.householdRef))}
              </td>
            </tr>
            <tr>
              <th>Tenancy ref:</th>
              <td>{this.separateId(this.getProp(customer.systemIds.rent))}</td>
            </tr>
            <tr>
              <th>Payment ref:</th>
              <td>
                {this.separateId(this.getProp(customer.systemIds.paymentRef))}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
