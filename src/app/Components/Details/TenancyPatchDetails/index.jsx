import React from 'react';

export default props => {
  const { tenancy } = props;

  return (
    <div className="details__left-column__item tenancyAreaPatch">
      <h2>Area and Patch</h2>
      <table>
        <tbody>
          <tr data-test="area-patch-tenancy">
            <th>Tenancy Patch:</th>
            <td>{tenancy.tenancyPatch || 'Unknown'}</td>
          </tr>
          <tr data-test="area-patch-ic">
            <th>Income Collection Patch:</th>
            <td>{tenancy.incomeCollectionPatch}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
