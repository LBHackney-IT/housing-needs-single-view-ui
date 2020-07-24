import React, { Component } from 'react';
import {
  FetchCustomerNotes,
  FetchCustomerRecord,
  FetchCustomerDocuments,
  FindSnapshots
} from '../../Gateways';
import {
  ContactDetails,
  Activity,
  PersonalDetails,
  QuickAccess,
  SystemIds,
  Team,
  AddressDetails,
  PrototypesLink,
  ThingsToNote
} from '../../Components/Details';
import moment from 'moment';
import { goBack } from '../../lib/Utils';
import { isMemberOfGroups } from '../../lib/Cookie';

export default class DetailsPage extends Component {
  constructor(props) {
    super(props);

    this.state = { notes: [], fetching: true };
  }

  componentDidMount() {
    let notesAndDocs = [];
    const customerId = this.props.match.params.id;

    FetchCustomerRecord(customerId)
      .then(result => {
        this.setState({ customer: result.customer });
        return FetchCustomerNotes(customerId);
      })
      .then(result => {
        const notes = result.notes.map(note => {
          note.type = 'note';
          return note;
        });
        notesAndDocs = notesAndDocs.concat(notes);
        return FetchCustomerDocuments(customerId);
      })
      .then(result => {
        const docs = result.documents.map(doc => {
          doc.type = 'document';
          return doc;
        });
        notesAndDocs = notesAndDocs.concat(docs).filter(x => x !== null);
        this.setState({ notes: notesAndDocs });
        return isMemberOfGroups([
          'HOUSING_NEEDS_SV',
          'HOUSING_NEEDS',
          'HOUSING_COUNTER',
          'BENEFIT_COUNTER'
        ])
          ? FindSnapshots({ customerId })
          : [];
      })
      .then(({ data: snapshots }) => {
        const snapshotNotes = snapshots.map(snapshot => ({
          ...snapshot,
          id: snapshot.id,
          text: snapshot.notes,
          type: 'snapshot',
          title: 'Vulnerability snapshot',
          system: 'Vulnerability snapshot',
          date: snapshot.created,
          user: snapshot.createdBy
        }));
        notesAndDocs = notesAndDocs.concat(snapshotNotes);
        this.setState({ notes: notesAndDocs });
      })
      .then(() => {
        notesAndDocs.sort((a, b) => moment(b.date) - moment(a.date));
        this.setState({
          notes: notesAndDocs,
          fetching: false
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    document.title = 'Customer details - Single View';
    const customerId = this.props.match.params.id;

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
            <PersonalDetails customer={this.state.customer} id={customerId} />
            {isMemberOfGroups([
              'HOUSING_NEEDS_SV',
              'HOUSING_NEEDS',
              'HOUSING_COUNTER',
              'BENEFIT_COUNTER'
            ]) && <ThingsToNote customerId={customerId} />}
            <ContactDetails customer={this.state.customer} />
            <AddressDetails customer={this.state.customer} />
            <Team customer={this.state.customer} />
            <SystemIds customer={this.state.customer} />
            <PrototypesLink />
          </div>
          <div className="details__right-column">
            <QuickAccess
              customer={this.state.customer}
              customerId={customerId}
            />
            <Activity notes={this.state.notes} />
          </div>
        </div>
      </div>
    );
  }
}
