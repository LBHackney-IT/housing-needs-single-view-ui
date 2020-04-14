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
  setIndex(i) {
    this.setState({
      index: i
    });
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
