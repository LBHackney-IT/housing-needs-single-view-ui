import React, { Component } from 'react';
import moment from 'moment';
import DocumentModal from '../../DocumentModal';
import NoteContent from './NoteContent';
import SnapshotNoteContent from './SnapshotNoteContent';
import './index.scss';

export default class Note extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showDoc: false,
      expanded: false
    };

    this.maxNoteLength = 128;

    if (this.props.note && this.props.note.type === 'document') {
      if (this.props.note.system === 'UHW') {
        this.docUrl = `${process.env.REACT_APP_UHW_DOCUMENT_API_URL}/documents/${this.props.note.id}/view`;
      }
      if (this.props.note.system === 'COMINO') {
        this.docUrl = `${process.env.REACT_APP_COMINO_DOCUMENT_API_URL}/documents/${this.props.note.id}/view`;
      }
      if (this.props.note.system === 'JIGSAW') {
        this.docUrl = `${process.env.REACT_APP_JIGSAW_DOCUMENT_API_URL}/customers/${this.props.note.userid}/documents/${this.props.note.id}`;
      }
    }
  }

  click = () => {
    this.setState({ showDoc: true });
  };

  closeDoc = () => {
    this.setState({ showDoc: false });
  };

  toggleNote = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  expandButton = () => {
    if (this.props.note.text?.length > this.maxNoteLength) {
      const className = this.state.expanded
        ? 'govuk-details__summary govuk-details__summary__arrow-up'
        : 'govuk-details__summary';
      const linkText = this.state.expanded ? 'Read less' : 'Read more';
      return (
        <span onClick={this.toggleNote} className={className}>
          {linkText}
        </span>
      );
    }
  };

  renderNote = () => {
    return (
      <>
        <div>
          <strong>{this.props.note.title}</strong>
        </div>
        <NoteContent
          text={this.props.note.text}
          trimmed={!this.state.expanded}
          trimmedLength={this.maxNoteLength}
          expandBtn={this.expandButton()}
        />
      </>
    );
  };

  renderSnapshot = () => {
    return (
      <>
        <div>
          <strong>{this.props.note.title}</strong>
          <span className="dots-group">
            {this.props.note.vulnerabilities.length > 0 && (
              <span
                className="vulnerabilities-dot"
                data-testid="vulnerabilities-dot"
              ></span>
            )}
            {this.props.note.assets.length > 0 && (
              <span className="assets-dot" data-testid="assets-dot"></span>
            )}
          </span>
        </div>
        <SnapshotNoteContent
          snapshot={this.props.note}
          trimmed={!this.state.expanded}
          trimmedLength={this.maxNoteLength}
          expandBtn={this.expandButton()}
        />
      </>
    );
  };

  renderDocument = () => {
    const title = this.docUrl ? (
      <button onClick={this.click} className="linkStyle govuk-link">
        {this.props.note.title}
      </button>
    ) : (
      this.props.note.title
    );

    return (
      <>
        <div>
          <strong>{title}</strong>
        </div>
        <NoteContent
          text={this.props.note.text}
          trimmed={!this.state.expanded}
          trimmedLength={this.maxNoteLength}
          expandBtn={this.expandButton()}
        />
        <DocumentModal
          open={this.state.showDoc}
          onClose={this.closeDoc}
          url={this.docUrl}
        />
      </>
    );
  };

  renderUpload = () => {
    return (
      <>
        <div>
          <strong>{this.props.note.title}</strong>
        </div>
        <NoteContent
          text={this.props.note.text}
          trimmed={!this.state.expanded}
          trimmedLength={this.maxNoteLength}
          expandBtn={this.expandButton()}
        />
        <a href={this.props.note.docUrl}>{this.props.note.filename}</a>
      </>
    );
  };

  render() {
    const note = this.props.note;
    let noteContent;

    switch (this.props.note.type) {
      case 'snapshot':
        noteContent = this.renderSnapshot();
        break;
      case 'document':
        noteContent = this.renderDocument();
        break;
      case 'upload':
        noteContent = this.renderUpload();
        break;
      default:
        noteContent = this.renderNote();
        break;
    }
    return (
      <tr>
        <td key="date">{moment(note.date).format('DD/MM/YYYY')}</td>
        <td key="text">{noteContent}</td>
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
