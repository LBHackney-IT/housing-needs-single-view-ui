import React from 'react';

export default props => {
  const { areaPatch } = props;

  return (
    <div className="details__left-column__item tenancyAreaPatch">
      <h2>Area and Patch</h2>
      <table>
        <tbody>
          <tr data-test="area-patch-tenancy-patch">
            <th>Tenancy Patch:</th>
            <td>{areaPatch.patchCode || 'Unknown'}</td>
          </tr>
          <tr data-test="area-patch-tenancy-area">
            <th>Tenancy Area:</th>
            <td>{areaPatch.areaName}</td>
          </tr>
          <tr data-test="area-patch-officer-name">
            <th>Officer name:</th>
            <td>{areaPatch.officerFullName}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
