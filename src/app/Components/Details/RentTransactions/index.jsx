import React, { Component } from 'react';
import moment from 'moment';
//import './index.scss';

export default class RentTransactions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transactionsDisplayed: 5
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
              {transactions.map(transaction => (
                <tr className="govuk-table__row">
                  <td className="govuk-table__cell">
                    {moment(transaction.date).format('DD/MM/YYYY')}
                  </td>
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
    return <h2>There are no results matching your search</h2>;
  }
}
