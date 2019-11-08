import React, { Component } from 'react';
import ResultsTable from '../../Components/ResultsTable';
import GroupedTable from '../../Components/GroupedTable';
import { CreateCustomer, SearchCustomers } from '../../Gateways';
import { Redirect } from 'react-router-dom';

export default class ResultsPage extends Component {
  sources = [
    'SINGLEVIEW',
    'UHT-Contacts',
    'UHT-HousingRegister',
    'UHW',
    'JIGSAW',
    'ACADEMY'
  ];

  constructor(props) {
    super(props);
    this.state = { results: {}, selected: [], searching: true };
  }

  componentDidMount() {
    const search = {};
    const params = new URLSearchParams(this.props.location.search);
    params.forEach((v, k) => {
      search[k] = v;
    });
    SearchCustomers(search, response => {
      this.setState({ results: response, searching: false, filter: {} });
    });
  }

  connectNewCustomer = () => {
    this.setState({ connecting: true });
    // Create a new record
    CreateCustomer(this.state.selected, (err, result) => {
      if (err) console.log(err);
      this.setState({ connecting: false });
      this.redirectToCustomer(result.customer.id);
    });
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

  redirectToCustomer(id) {
    this.setState({ redirect: `/customer/${id}` });
  }

  selectExisting = data => {
    if (data.SINGLEVIEW && Object.keys(data.SINGLEVIEW).length === 1) {
      this.redirectToCustomer(Object.values(data.SINGLEVIEW)[0].id);
    }
  };

  prevResults() {
    if (this.state.results.connected.length > 0) {
      return [
        <section
          className="govuk-form-group results__prev-results"
          key="prevGroup"
        >
          <h2 key="prev">Previously connected records</h2>
          <ResultsTable
            key="prevResults"
            results={this.state.results.connected}
            selectable={false}
            onChange={this.selectExisting}
          />
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
              onSelect={this.addSelection}
              onDeselect={this.removeSelection}
              filter={this.state.filter}
            />
          </div>
        </section>
      ];
    }
  }

  render() {
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

    return (
      <div className="lbh-container results">
        <h1>Create a single view of a customer</h1>

        {this.prevResults()}

        <section className="govuk-form-group">
          <h2 key="matching">Customers with matching details</h2>

          <p>
            The following records have the same name and either date of birth or
            national insurance number.
          </p>

          <div>
            {this.state.results.grouped.map((group, index) => {
              return (
                <GroupedTable
                  key={index}
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

        <div className="govuk-form-group">
          <button
            className="govuk-button lbh-button"
            onClick={this.connectNewCustomer}
          >
            Connect records
          </button>
        </div>
      </div>
    );
  }
}
