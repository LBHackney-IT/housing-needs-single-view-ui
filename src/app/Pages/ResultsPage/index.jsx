import React, { Component } from 'react';
import { CreateCustomer, SearchCustomers } from '../../Gateways';
import { Redirect } from 'react-router-dom';
import { PreviousRecord, GroupedTable } from '../../Components/Results';
import { goBack } from '../../lib/Utils';

export default class ResultsPage extends Component {
  sources = [
    'SINGLEVIEW',
    'UHT-Contacts',
    'UHT-HousingRegister',
    'UHW',
    'JIGSAW',
    'ACADEMY'
  ];

  group = 0;
  constructor(props) {
    super(props);
    this.state = { results: {}, selected: [], searching: true };
  }

  componentDidMount() {
    SearchCustomers(this.props.location.search)
      .then(results => {
        this.setState({ results, searching: false, filter: {} });
      })
      .catch(() => {
        this.setState({
          searching: false,
          error: 'Error when searching for records. Please reload to try again.'
        });
      });
  }

  connectNewCustomer = () => {
    this.setState({ connecting: true });

    CreateCustomer(this.state.selected)
      .then(result => {
        this.setState({
          connecting: false,
          redirect: `/customers/${result.customer.id}`
        });
      })
      .catch(err => console.log(err));
  };

  generateFilter() {
    return this.state.selected.reduce((acc, record) => {
      if (!acc.dob && record.dob) acc.dob = record.dob;
      if (!acc.nino && record.nino) acc.nino = record.nino;
      return acc;
    }, {});
  }

  addSelection = record => {
    this.setState(() => {
      let selected = this.state.selected;
      selected.push(record);
      return { selected: selected, filter: this.generateFilter() };
    });
  };

  removeSelection = record => {
    this.setState(() => {
      let selected = this.state.selected;
      delete selected[selected.indexOf(record)];
      selected = selected.filter(x => x);
      return { selected: selected, filter: this.generateFilter() };
    });
  };

  prevResults() {
    if (this.state.results.connected.length > 0) {
      return [
        <section className="govuk-form-group" key="prevGroup">
          <h2 key="prev">
            There are previously connected records for your search
          </h2>
          <div className="results__prev-results">
            {this.state.results.connected.map((record, i) => {
              return <PreviousRecord key={i} record={record} />;
            })}
          </div>
        </section>
      ];
    }
  }

  otherResults() {
    if (this.state.results.ungrouped.length > 0) {
      return [
        <section className="govuk-form-group" key="new">
          <h2>Other potential matches</h2>
          <p>
            The following records are partial matches. Please check them in
            their original system before connecting.
          </p>

          <div>
            <GroupedTable
              records={this.state.results.ungrouped}
              selectable={true}
              group={this.group + 1}
              onSelect={this.addSelection}
              onDeselect={this.removeSelection}
              filter={this.state.filter}
            />
          </div>
        </section>
      ];
    }
  }

  resultsOutcome() {
    if (
      this.state.results.ungrouped.length > 0 &&
      this.state.results.grouped.length > 0
    )
      return (
        <p>
          The following records have the same name and either date of birth or
          national insurance number.
        </p>
      );
    else return <p>There are no records that match those details</p>;
  }

  render() {
    document.title = 'Search results - Single View';
    if (this.state.connecting) {
      return (
        <div className="lbh-container">
          <h1>Connecting records...</h1>
        </div>
      );
    }

    if (this.state.redirect) {
      return <Redirect push to={this.state.redirect} />;
    }

    if (this.state.searching) {
      return (
        <div className="lbh-container">
          <h1>Searching for customers...</h1>
        </div>
      );
    }

    if (this.state.error) {
      return (
        <div className="lbh-container">
          <h1>{this.state.error}</h1>
        </div>
      );
    }

    return (
      <div className="lbh-container results">
        <button onClick={goBack} className="govuk-back-link">
          Back to search
        </button>
        <h1>Matching customers</h1>
        {this.prevResults()}
        <div className="connectRecords">
          <div className="row">
            <div>
              <h2>Create a single view of a customer</h2>
            </div>
            {(this.state.results.ungrouped.length > 0 ||
              this.state.results.grouped.length > 0) && (
              <button
                disabled={this.state.selected.length === 0}
                className={'govuk-button lbh-button '}
                onClick={this.connectNewCustomer}
              >
                Create new connected record
              </button>
            )}
          </div>
        </div>
        <section className="govuk-form-group">
          <h2 key="matching">Customers with matching details</h2>
          {this.resultsOutcome()}
          <div>
            {this.state.results.grouped.map((group, index) => {
              this.group = index + 1;
              return (
                <GroupedTable
                  key={index}
                  group={this.group}
                  records={group}
                  selectable={true}
                  onSelect={this.addSelection}
                  onDeselect={this.removeSelection}
                  filter={this.state.filter}
                />
              );
            })}
          </div>
        </section>
        {this.otherResults()}
        <button onClick={goBack} className="govuk-button lbh-button">
          Search again
        </button>
      </div>
    );
  }
}
