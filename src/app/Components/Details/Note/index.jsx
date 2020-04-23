import React, { Component } from 'react';
import moment from 'moment';
import DocumentModal from '../../DocumentModal';

export default class Note extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showDoc: false,
      docUrl: null,
      expanded: false
    };

    this.maxNoteLength = 128;
  }

  isViewableDoc = () => {
    return (
      this.props.note &&
      this.props.note.type === 'document' &&
      ['UHW', 'COMINO', 'JIGSAW'].includes(this.props.note.system)
    );
  };

  componentDidMount() {
    if (this.isViewableDoc()) {
      if (this.props.note.system === 'UHW') {
        this.setState({
          docUrl: `${process.env.REACT_APP_UHW_DOCUMENT_API_URL}/documents/${this.props.note.id}/view`
        });
      } else if (this.props.note.system === 'COMINO') {
        this.setState({
          docUrl: `${process.env.REACT_APP_COMINO_DOCUMENT_API_URL}/documents/${this.props.note.id}/view`
        });
      } else if (this.props.note.system === 'JIGSAW') {
        this.setState({
          docUrl: `${process.env.REACT_APP_JIGSAW_DOCUMENT_API_URL}/customers/${this.props.note.userid}/documents/${this.props.note.id}`
        });
      }
    }
  }

  click = () => {
    this.setState({
      showDoc: true
    });
  };

  closeDoc = () => {
    this.setState({
      showDoc: false
    });
  };

  toggleNote = () => {
    this.setState({
      expanded: !this.state.expanded
    });
  };

  noteText = () => {
    if (
      this.props.note.text.length > this.maxNoteLength &&
      !this.state.expanded
    ) {
      return `${this.props.note.text.substring(0, 128)} ...`;
    }
    return this.props.note.text;
  };

  expandButton = () => {
    if (this.props.note.text.length > this.maxNoteLength) {
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

  render() {
    return (
      <tr>
        <td key="date">{moment(this.props.note.date).format('DD/MM/YYYY')}</td>
        <td key="text">
          <p>
            <strong>
              {this.isViewableDoc() ? (
                <button onClick={this.click} className="linkStyle govuk-link">
                  {this.props.note.title}
                </button>
              ) : (
                this.props.note.title
              )}
            </strong>
          </p>
          <p style={{ overflowWrap: 'break-word', maxWidth: '350px' }}>
            {this.noteText()}
          </p>
          {this.expandButton()}
          <DocumentModal
            open={this.state.showDoc}
            onClose={this.closeDoc}
            url={this.state.docUrl}
          />
        </td>
        <td key="sys">
          <p>
            <strong>{this.props.note.user}</strong>
          </p>
          <p>
            {this.props.note.system.join
              ? this.props.note.system.join(', ')
              : this.props.note.system}
          </p>
        </td>
      </tr>
    );
  }
}
