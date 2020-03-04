import React, { Component } from 'react';
import moment from 'moment';
import DocumentModal from '../../DocumentModal';

export default class Note extends Component {
  state = {
    showDoc: false,
    docUrl: null,
    expanded: false
  };

  formatDate(date) {
    return moment(date).format('DD/MM/YYYY');
  }

  click = () => {
    if (
      this.props.note &&
      this.props.note.type === 'document' &&
      this.props.note.id
    ) {
      if (this.props.note.system === 'UHW') {
        this.setState({
          docUrl: `${process.env.REACT_APP_UHW_DOCUMENT_API_URL}/documents/${this.props.note.id}/view`,
          showDoc: true
        });
      } else if (this.props.note.system === 'COMINO') {
        this.setState({
          docUrl: `${process.env.REACT_APP_COMINO_DOCUMENT_API_URL}/documents/${this.props.note.id}/view`,
          showDoc: true
        });
      }
    }
  };

  closeDoc = () => {
    this.setState({
      showDoc: false
    });
  };

  toggleNote = () => {
    this.setState(state => {
      state.expanded = !state.expanded;
      return state;
    });
  };

  render() {
    const { note } = this.props;
    const noteLength = 128;

    const checkLength = (text, length) => {
      return text.length <= length;
    };

    const trimText = (note, length) => {
      return checkLength(note, length) || this.state.expanded
        ? note
        : `${note.substring(0, length)} ...`;
    };

    const createButton = (note, length) => {
      if (checkLength(note, length)) {
        return;
      }
      if (this.state.expanded) {
        return (
          <span onClick={this.toggleNote} className="govuk-details__summary">
            Read less
          </span>
        );
      }
      return (
        <span onClick={this.toggleNote} className="govuk-details__summary">
          Read more
        </span>
      );
    };

    return (
      <tr onClick={this.click}>
        <td key="date">{this.formatDate(note.date)}</td>
        <td key="text">
          <p>
            <strong>{note.title}</strong>
          </p>
          <p style={{ overflowWrap: 'break-word', maxWidth: '350px' }}>
            {trimText(note.text, noteLength)}
          </p>
          {createButton(note.text, noteLength)}
          <DocumentModal
            open={this.state.showDoc}
            onClose={this.closeDoc}
            url={this.state.docUrl}
          />
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
