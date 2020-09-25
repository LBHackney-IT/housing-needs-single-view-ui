import React, { Component } from 'react';

export default class RentTransactions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transactionsDisplayed: 10
    };
  }

  render() {
    const transactions = this.props.transactions
      .slice(0, this.state.transactionsDisplayed)
      .map(transaction => {
        return transaction;
      });

    if (transactions.length > 0) {
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
              {transactions.map((transaction, index) => (
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
        </>
      );
    }
    return <h2>There are no rent transactions</h2>;
  }
}
