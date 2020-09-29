import React, { Component } from 'react';
import './index.scss';

export default class RentTransactions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transactionsDisplayed: 20,
      pageNumber: 0
    };
  }

  render() {
    let resultsRange = [];

    const totalTransactions = this.props.transactions.length;
    const firstPageItem =
      this.state.pageNumber * parseInt(this.state.transactionsDisplayed);
    const remainingTransactions = totalTransactions - firstPageItem;
    const lastPageItem =
      remainingTransactions < parseInt(this.state.transactionsDisplayed)
        ? remainingTransactions + firstPageItem
        : firstPageItem + parseInt(this.state.transactionsDisplayed);

    for (let i = firstPageItem; i < lastPageItem; i++) {
      resultsRange.push(i);
    }

    if (totalTransactions > 0) {
      return (
        <>
          <h2>Rent</h2>
          <table className="govuk-table">
            <thead className="govuk-table__head">
              <tr className="govuk-table__row">
                <th scope="col" className="govuk-table__header">
                  Date
                </th>
                <th scope="col" className="govuk-table__header">
                  Transaction type
                </th>
                <th scope="col" className="govuk-table__header">
                  Charges
                </th>
                <th scope="col" className="govuk-table__header">
                  Payments
                </th>
                <th scope="col" className="govuk-table__header">
                  Balance
                </th>
              </tr>
            </thead>
            <tbody className="govuk-table__body">
              {resultsRange.map(index => (
                <tr
                  className="govuk-table__row"
                  key={`${index}-key`}
                  data-testid={`transaction-row-${index}`}
                >
                  <td className="govuk-table__cell">
                    {this.props.transactions[index].date}
                  </td>
                  <td className="govuk-table__cell">
                    {this.props.transactions[index].description}
                  </td>

                  <td className="govuk-table__cell">
                    {this.props.transactions[index].out.replace('¤', '£') || ''}
                  </td>
                  <td className="govuk-table__cell">
                    {this.props.transactions[index].in.replace('¤', '£') || ''}
                  </td>
                  <td className="govuk-table__cell">
                    {this.props.transactions[index].balance.replace('¤', '£') ||
                      ''}
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
            {remainingTransactions >= this.state.transactionsDisplayed && (
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
    return <h2>There are no rent transactions</h2>;
  }
}
