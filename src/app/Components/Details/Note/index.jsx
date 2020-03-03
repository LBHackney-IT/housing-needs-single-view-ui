import React, { Component } from 'react';
import moment from 'moment';
import DocumentModal from '../../DocumentModal';

export default class Note extends Component {
  state = {
    showDoc: false,
    docUrl: null
  };

  formatDate(date) {
    return moment(date).format('DD/MM/YYYY');
  }

  //  if note is doc
  //    make a tag with title and href #
  //   else
  //     return just title

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

  render() {
    const linkStyle = {
      textDecoration: 'underline',
      border: 'none',
      background: 'transparent',
      fontSize: '100%',
      color: '#00664f'
    };
    const { note } = this.props;
    let noteComponent = '';
    if (
      note &&
      note.type === 'document' &&
      (note.system === 'UHW' || note.system === 'COMINO')
    ) {
      noteComponent = (
        <a href="#/">
          <strong style={linkStyle}>{note.title}</strong>
        </a>
      );
    } else {
      noteComponent = (
        <p>
          <strong>{note.title}</strong>
        </p>
      );
    }
    return (
      <tr onClick={this.click}>
        <td key="date">{this.formatDate(note.date)}</td>
        <td key="text">
          {noteComponent}
          <p style={{ overflowWrap: 'break-word', maxWidth: '350px' }}>
            {note.text}
          </p>
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
