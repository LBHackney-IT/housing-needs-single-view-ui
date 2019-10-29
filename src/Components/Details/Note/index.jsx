import React, { Component } from 'react';
var moment = require('moment');

export default class Note extends Component {
  formatDate(date) {
    return moment(date).format('DD/MM/YYYY');
  }
  render() {
    return (
      <tr>
        <td key="date">{this.formatDate(this.props.note.date)}</td>
        <td key="text">
          <p>
            <strong>{this.props.note.title}</strong>
          </p>
          <p>{this.props.note.text}</p>
        </td>
        <td key="sys">
          <p>
            <strong>{this.props.note.user}</strong>
          </p>
          <p>{this.props.note.system}</p>
        </td>
      </tr>
    );
  }
}
