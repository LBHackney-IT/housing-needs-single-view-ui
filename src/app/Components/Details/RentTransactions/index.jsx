import React, { Component } from 'react';
import './index.scss';

const transactionsDisplayed = 10;

export default class RentTransactions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageNumber: 0
    };
  }

  render() {
    const totalTransactions = this.props.transactions.length;
    const startIndex = this.state.pageNumber * transactionsDisplayed;
    const totalPages = parseInt(totalTransactions / transactionsDisplayed);
    const resultsRange = this.props.transactions.slice(
      startIndex,
      startIndex + transactionsDisplayed
    );

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
              {resultsRange.map((transaction, index) => (
                <tr
                  className="govuk-table__row"
                  key={`${index}-key`}
                  data-testid={`transaction-row-${index}`}
                >
                  <td className="govuk-table__cell">{transaction.date}</td>
                  <td className="govuk-table__cell">
                    {transaction.description}
                  </td>

                  <td className="govuk-table__cell">
                    {transaction.out.replace('¤', '£') || ''}
                  </td>
                  <td className="govuk-table__cell">
                    {transaction.in.replace('¤', '£') || ''}
                  </td>
                  <td className="govuk-table__cell">
                    {transaction.balance.replace('¤', '£') || ''}
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
              Page {this.state.pageNumber + 1} of {totalPages + 1}
            </span>
            {this.state.pageNumber < totalPages && (
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
