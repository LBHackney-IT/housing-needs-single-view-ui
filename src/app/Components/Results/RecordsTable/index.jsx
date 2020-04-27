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
            <th key="system">System</th>
            <th key="first">First Name</th>
            <th key="last">Last Name</th>
            <th key="dob">Date of Birth</th>
            <th key="nino">National Insurance No</th>
            <th key="address">Address</th>
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
