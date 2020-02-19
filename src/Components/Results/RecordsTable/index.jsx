import React, { Component } from 'react';
import ResultRow from '../ResultRow';
import './index.scss';

export default class RecordsTable extends Component {
  render() {
    if (Object.keys(this.props.records).length === 0) {
      return <></>;
    }
    return (
      <table className="recordsTable">
        <thead>
          <tr>
            <td key="system">System</td>
            <td key="first">First Name</td>
            <td key="last">Last Name</td>
            <td key="dob">Date of Birth</td>
            <td key="nino">National Insurance No</td>
            <td key="address">Address</td>
          </tr>
        </thead>
        <tbody>
          {this.props.records.map((r, i) => {
            return <ResultRow key={i} result={r} selectable={false} />;
          })}
        </tbody>
      </table>
    );
  }
}
