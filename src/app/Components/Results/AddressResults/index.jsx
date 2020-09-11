import React, { Component } from 'react';

export default class AddressResults extends Component {
  recordIndex = 0;
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log('PASSED PROP', this.props);
    console.log('LENGTH', this.props.tenancies.length);
    if (this.props.tenancies.length > 0) {
      return (
        <table className="govuk-table">
          <thead className="govuk-table__head">
            <tr className="govuk-table__row">
              <th scope="col" className="govuk-table__header">
                Address
              </th>
              <th scope="col" className="govuk-table__header">
                Postcode
              </th>
              <th scope="col" className="govuk-table__header">
                Name
              </th>
              <th scope="col" className="govuk-table__header">
                Date of birth
              </th>
              <th scope="col" className="govuk-table__header">
                Tenancy type
              </th>
              <th scope="col" className="govuk-table__header">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="govuk-table__body">
            {this.props.tenancies.map(tenancy => (
              <tr className="govuk-table__row">
                <td className="govuk-table__cell">{tenancy.address}</td>
                <td className="govuk-table__cell">{tenancy.postcode}</td>

                <td className="govuk-table__cell">
                  {tenancy.residents.map(resident => (
                    <p>{resident.firstName + ' ' + resident.lastName}</p>
                  ))}
                </td>
                <td className="govuk-table__cell">
                  {tenancy.residents.map(resident => (
                    <p>{resident.dateOfBirth}</p>
                  ))}
                </td>
                <td className="govuk-table__cell">{tenancy.tenureType}</td>
                <td className="govuk-table__cell">
                  {tenancy.terminated ? 'Terminated' : 'Ongoing'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    }
    return <h2>There are no results matching your search</h2>;
  }
}
