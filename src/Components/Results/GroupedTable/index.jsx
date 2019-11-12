import React, { Component } from 'react';
import ResultRow from '../ResultRow';
import './index.css';

export default class GroupedTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: {},
      groupedRecords: this.groupRecords(props.records)
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
              {this.props.selectable ? <td></td> : null}
              <td key="first">First Name</td>
              <td key="last">Last Name</td>
              <td key="dob">Date of Birth</td>
              <td key="nino">National Insurance No</td>
              <td key="address">Address</td>
            </tr>
          </thead>
          <tbody>
            {Object.keys(this.state.groupedRecords).map(source => {
              return [this.divider(source)].concat(
                this.state.groupedRecords[source].map(record => {
                  return (
                    <ResultRow
                      key={record.id}
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
