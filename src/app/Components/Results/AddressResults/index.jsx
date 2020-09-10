import React, { Component } from 'react';

export default class AddressResults extends Component {
  recordIndex = 0;
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <table class="govuk-table">
        <caption class="govuk-table__caption">Dates and amounts</caption>
        <thead class="govuk-table__head">
          <tr class="govuk-table__row">
            <th scope="col" class="govuk-table__header">
              Date
            </th>
            <th scope="col" class="govuk-table__header">
              Amount
            </th>
          </tr>
        </thead>
        <tbody class="govuk-table__body">
          <tr class="govuk-table__row">
            <th scope="row" class="govuk-table__header">
              First 6 weeks
            </th>
            <td class="govuk-table__cell">£109.80 per week</td>
          </tr>
          <tr class="govuk-table__row">
            <th scope="row" class="govuk-table__header">
              Next 33 weeks
            </th>
            <td class="govuk-table__cell">£109.80 per week</td>
          </tr>
          <tr class="govuk-table__row">
            <th scope="row" class="govuk-table__header">
              Total estimated pay
            </th>
            <td class="govuk-table__cell">£4,282.20</td>
          </tr>
        </tbody>
      </table>
    );
  }
}
