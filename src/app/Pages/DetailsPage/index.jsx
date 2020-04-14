import React, { Component } from 'react';
import {
  FetchCustomerNotes,
  FetchCustomerRecord,
  FetchCustomerDocuments
} from '../../Gateways';
import {
  ContactDetails,
  Activity,
  PersonalDetails,
  QuickAccess,
  SystemIds,
  Team,
  AddressDetails,
  PrototypesLink
} from '../../Components/Details';
import moment from 'moment';
import { goBack } from '../../lib/Utils';

export default class DetailsPage extends Component {
  constructor(props) {
    super(props);

    this.state = { notes: [], fetching: true };
  }

  componentDidMount() {
    let notesAndDocs = [];
    FetchCustomerRecord(this.props.match.params.id)
      .then(result => {
        this.setState({ customer: result.customer });
        return FetchCustomerNotes(this.props.match.params.id);
      })
      .then(result => {
        const notes = result.notes.map(note => {
          note.type = 'note';
          return note;
        });
        notesAndDocs = notesAndDocs.concat(notes);
        return FetchCustomerDocuments(this.props.match.params.id);
      })
      .then(result => {
        const docs = result.documents.map(doc => {
          doc.type = 'document';
          return doc;
        });
        notesAndDocs = notesAndDocs.concat(docs).filter(x => x !== null);
        notesAndDocs.sort((a, b) => moment(b.date) - moment(a.date));
        this.setState({ notes: notesAndDocs, fetching: false });
      })
      .catch(err => console.log(err));
  }

  render() {
    if (this.state.fetching) {
      return (
        <div className="lbh-container">
          <h1>Fetching customer record...</h1>
        </div>
      );
    }

    return (
      <div>
        <div className="lbh-container row details">
          <p>
            <button onClick={goBack} className="govuk-back-link">
              Back to search
            </button>
          </p>
        </div>
        <div className="lbh-container row details">
          <div className="details__left-column">
            <PersonalDetails
              customer={this.state.customer}
              id={this.props.match.params.id}
            />
            <ContactDetails customer={this.state.customer} />
            <AddressDetails customer={this.state.customer} />
            <Team customer={this.state.customer} />
            <SystemIds customer={this.state.customer} />
            <PrototypesLink
              customer={this.state.customer}
              id={this.props.match.params.id}
            />
          </div>
          <div className="details__right-column">
            <QuickAccess customer={this.state.customer} />
            <Activity notes={this.state.notes} />
          </div>
        </div>
      </div>
    );
  }
}
