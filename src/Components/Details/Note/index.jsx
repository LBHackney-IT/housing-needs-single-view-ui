import React, { Component } from 'react';
import moment from 'moment';

export default class Note extends Component {
  formatDate(date) {
    return moment(date).format('DD/MM/YYYY');
  }
  render() {
    const { note } = this.props;

    return (
      <tr>
        <td key="date">{this.formatDate(note.date)}</td>
        <td key="text">
          <p>
            <strong>{note.title}</strong>
          </p>
          <p style={{ overflowWrap: 'break-word', maxWidth: '350px' }}>
            {note.text}
          </p>
        </td>
        <td key="sys">
          <p>
            <strong>{note.user}</strong>
          </p>
          <p>{note.system.join ? note.system.join(', ') : note.system}</p>
        </td>
      </tr>
    );
  }
}
