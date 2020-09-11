import React from 'react';
import moment from 'moment';

function tenancyType(code) {
  return (
    {
      SEC: 'Secure',
      INT: 'Introductory'
    }[code] || code
  );
}

export default props => {
  const { tenancy } = props;

  return (
    <div className="details__left-column__item tenancyDetails">
      <h2>Tenancy</h2>
      <table>
        <tbody>
          <tr data-test="tenancy-type">
            <th>Tenancy type:</th>
            <td>{tenancyType(tenancy.type)}</td>
          </tr>
          <tr data-test="tenancy-start-date">
            <th>Tenancy start date:</th>
            <td>{moment(tenancy.startDate).format('DD/MM/YYYY')}</td>
          </tr>
          <tr data-test="tenancy-reference">
            <th>Tenancy reference:</th>
            <td>{tenancy.id}</td>
          </tr>
          <tr data-test="uprn">
            <th>UPRN:</th>
            <td>{tenancy.uprn}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
