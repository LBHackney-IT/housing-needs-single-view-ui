import React, { Component } from 'react';
import Dropdown from '../Dropdown';
import moment from 'moment';
import { cleanTenureType } from '../../../lib/Utils';
import './index.scss';

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
    let resultsRange = [];

    const totalTenancies = this.props.tenancies.length;
    const firstPageItem =
      this.state.pageNumber * parseInt(this.state.recordsPerPage);
    const remainingTenancies = totalTenancies - firstPageItem;
    const lastPageItem =
      remainingTenancies < parseInt(this.state.recordsPerPage)
        ? remainingTenancies + firstPageItem
        : firstPageItem + parseInt(this.state.recordsPerPage);

    for (let i = firstPageItem; i < lastPageItem; i++) {
      resultsRange.push(i);
    }

    if (this.props.tenancies.length > 0) {
      return (
        <>
          <div className="page-range">
            <span className="records-range-label">
              {firstPageItem + 1 + ' - ' + lastPageItem + ' items'}
            </span>
            <Dropdown
              values={[
                { 10: '10 items' },
                { 25: '25 items' },
                { 50: '50 items' },
                { 100: '100 items' }
              ]}
              initialValue={this.state.recordsPerPage}
              onChange={value => this.setRecordsPerPage(value)}
            />
          </div>
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
                <tr
                  className="govuk-table__row"
                  data-testid={`address-row-${i}`}
                >
                  <td className="govuk-table__cell">
                    <a
                      href={`/tenancies/${this.props.tenancies[
                        i
                      ].tenancyAgreementReference.replace('/', '-')}`}
                    >
                      {this.props.tenancies[i].address}{' '}
                    </a>
                  </td>
                  <td className="govuk-table__cell">
                    {this.props.tenancies[i].postcode}
                  </td>

                  <td className="govuk-table__cell">
                    {this.props.tenancies[i].residents.map(
                      resident =>
                        resident.responsible && (
                          <p>
                            {resident.title +
                              ' ' +
                              resident.firstName +
                              ' ' +
                              resident.lastName}
                          </p>
                        )
                    )}
                  </td>
                  <td className="govuk-table__cell">
                    {this.props.tenancies[i].residents.map(
                      resident =>
                        resident.responsible && (
                          <p>
                            {resident.dateOfBirth
                              ? moment(resident.dateOfBirth).format(
                                  'DD/MM/YYYY'
                                )
                              : 'No date found'}
                          </p>
                        )
                    )}
                  </td>
                  <td className="govuk-table__cell">
                    {cleanTenureType(this.props.tenancies[i].tenureType)}
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
          <div className="page-navigation">
            {this.state.pageNumber > 0 && (
              <button
                className="govuk-button previous-page-button"
                data-module="govuk-button"
                onClick={() => {
                  this.setState({ pageNumber: this.state.pageNumber - 1 });
                }}
              >
                Previous page
              </button>
            )}
            <span className="current-page-number">
              Current page: {this.state.pageNumber + 1}
            </span>
            {remainingTenancies >= this.state.recordsPerPage && (
              <button
                className="govuk-button next-page-button"
                data-module="govuk-button"
                onClick={() => {
                  this.setState({ pageNumber: this.state.pageNumber + 1 });
                }}
              >
                Next page
              </button>
            )}
          </div>
        </>
      );
    }
    return <h2>There are no results matching your search</h2>;
  }
}
