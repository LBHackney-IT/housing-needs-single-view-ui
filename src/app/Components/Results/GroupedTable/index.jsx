import React, { Component } from 'react';
import ResultRow from '../ResultRow';
import './index.scss';

export default class GroupedTable extends Component {
  recordIndex = 0;
  constructor(props) {
    super(props);
    this.state = {
      selected: {},
      groupedRecords: this.groupRecords(props.records),
      index: 0
    };
  }

  groupRecords(records) {
    return records.reduce((acc, record) => {
      if (!acc[record.source]) {
        acc[record.source] = [];
      }
      acc[record.source].push(record);
      return acc;
    }, {});
  }

  rowSelected = row => {
    this.props.onSelect && this.props.onSelect(row);
  };

  rowDeselected = row => {
    this.props.onDeselect && this.props.onDeselect(row);
  };

  divider(name) {
    return (
      <tr key={name}>
        <td colSpan="5" className="subHeader">
          {name}
        </td>
      </tr>
    );
  }

  render() {
    if (Object.keys(this.props.records).length > 0) {
      return (
        <table className="groupedTable">
          <thead>
            <tr>
              {this.props.selectable ? (
                <th>
                  <span className="visuallyhidden">select</span>
                </th>
              ) : null}
              <th key="first">First Name</th>
              <th key="last">Last Name</th>
              <th key="dob">Date of Birth</th>
              <th key="nino">National Insurance No</th>
              <th key="address">Address</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(this.state.groupedRecords).map(source => {
              return [this.divider(source)].concat(
                this.state.groupedRecords[source].map((record, i) => {
                  this.recordIndex += 1;
                  return (
                    <ResultRow
                      key={i}
                      checkbox={`group_${this.props.group}_record_${this.recordIndex}`}
                      result={record}
                      selectable={this.props.selectable}
                      onSelected={this.rowSelected}
                      onDeselected={this.rowDeselected}
                      filter={this.props.filter}
                    />
                  );
                })
              );
            })}
          </tbody>
        </table>
      );
    } else {
      return null;
    }
  }
}
