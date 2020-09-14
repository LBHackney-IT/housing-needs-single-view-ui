import React, { Component } from 'react';
import Dropdown from '../Dropdown';

export default class AddressResults extends Component {
  recordIndex = 0;
  constructor(props) {
    super(props);
    this.state = {
      recordsPerPage: 25,
      pageNumber: 0
    };
  }

  setRecordsPerPage(value) {
    this.setState({ recordsPerPage: value });
  }

  render() {
    console.log('PASSED PROP', this.props);
    console.log('LENGTH', this.props.tenancies.length);
    let resultsRange = [];

    const totalTenancies = this.props.tenancies.length;
    const firstPageItem = this.state.pageNumber * this.state.recordsPerPage;
    const remainingTenancies = totalTenancies - firstPageItem;
    const lastPageItem =
      remainingTenancies < this.state.recordsPerPage
        ? remainingTenancies + firstPageItem
        : firstPageItem + this.state.recordsPerPage;

    for (let i = firstPageItem; i < lastPageItem; i++) {
      resultsRange.push(i);
    }

    if (this.props.tenancies.length > 0) {
      return (
        <>
          <span>{firstPageItem + ' - ' + lastPageItem}</span>
          <Dropdown
            values={[{ 10: '10 items' }, { 25: '25 items' }]}
            initialValue={this.state.recordsPerPage}
            onChange={value => this.setRecordsPerPage(value)}
          />
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
              {resultsRange.map(i => (
                <tr className="govuk-table__row">
                  <td className="govuk-table__cell">
                    {this.props.tenancies[i].address}
                  </td>
                  <td className="govuk-table__cell">
                    {this.props.tenancies[i].postcode}
                  </td>

                  <td className="govuk-table__cell">
                    {this.props.tenancies[i].residents.map(resident => (
                      <p>{resident.firstName + ' ' + resident.lastName}</p>
                    ))}
                  </td>
                  <td className="govuk-table__cell">
                    {this.props.tenancies[i].residents.map(resident => (
                      <p>{resident.dateOfBirth}</p>
                    ))}
                  </td>
                  <td className="govuk-table__cell">
                    {this.props.tenancies[i].tenureType}
                  </td>
                  <td className="govuk-table__cell">
                    {this.props.tenancies[i].terminated
                      ? 'Terminated'
                      : 'Ongoing'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {this.state.pageNumber > 0 && (
            <button
              onClick={() => {
                this.setState({ pageNumber: this.state.pageNumber - 1 });
              }}
            >
              Previous page
            </button>
          )}
          <span>
            current page: {this.state.pageNumber + 1}remainingT:{' '}
            {remainingTenancies} firstPageItem : {firstPageItem} last:{' '}
            {lastPageItem}
          </span>
          {remainingTenancies >= this.state.recordsPerPage && (
            <button
              onClick={() => {
                this.setState({ pageNumber: this.state.pageNumber + 1 });
              }}
            >
              Next page
            </button>
          )}
        </>
      );
    }
    return <h2>There are no results matching your search</h2>;
  }
}
