import React, { Component } from 'react';

export default class SystemIds extends Component {
  getProp(prop) {
    return prop ? prop : 'No Data';
  }

  separateId(ids) {
    if (typeof ids === 'string')
      return (
        <td>
          <p> {ids} </p>
        </td>
      );
    return (
      <td>
        {ids.map(id => (
          <p> {id} </p>
        ))}
      </td>
    );
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
              {this.separateId(
                this.getProp(customer.housingRegister.applicationRef),
                'applicationRef'
              )}
            </tr>
            <tr>
              <td>Jigsaw customer no:</td>
              {this.separateId(this.getProp(customer.systemIds.jigsaw))}
            </tr>
            <tr>
              <td>Jigsaw case ref:</td>
              {this.separateId(
                this.getProp(customer.housingNeeds.jigsawCaseId)
              )}
            </tr>
            <tr>
              <td>Council tax ref:</td>
              {this.separateId(
                this.getProp(customer.systemIds.academyCouncilTax)
              )}
            </tr>
            <tr>
              <td>Benefits ref:</td>
              {this.separateId(
                this.getProp(customer.systemIds.academyBenefits)
              )}
            </tr>
            <tr>
              <td>UHW ref:</td>
              {this.separateId(this.getProp(customer.systemIds.uhw))}
            </tr>
            <tr>
              <td>Household ref:</td>
              {this.separateId(this.getProp(customer.systemIds.householdRef))}
            </tr>
            <tr>
              <td>Rent account ref:</td>
              {this.separateId(this.getProp(customer.systemIds.rent))}
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
