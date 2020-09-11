import React, { Component } from 'react';
import { goBack } from '../../lib/Utils';
import { AddressResults } from '../../Components/Results';
import { SearchTenancies } from '../../Gateways';

export default class AddressResultsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      searching: true,
      results: {}
    };
  }

  componentDidMount() {
    const query = this.props.location.search;
    console.log('PARAMS', query);
    SearchTenancies(query)
      .then(result => {
        this.setState({ results: result, searching: false });
      })
      .catch(() => {
        this.setState({
          error: 'Error when searching for address.'
        });
      });
  }

  getAddress() {
    const pageLink = window.location.href;
    const url = new URL(pageLink);
    const address = url.searchParams.get('address');
    console.log('THE ADDRESS IS: ', address);
    return address;
  }

  render() {
    if (this.state.searching) {
      return (
        <div className="lbh-container">
          <h1>Searching for address...</h1>
        </div>
      );
    }
    document.title = 'Search - Single View';
    console.log('STATE', this.state.results);
    return (
      <div className="lbh-container results">
        <button onClick={goBack} className="govuk-back-link">
          Back to search
        </button>
        <h1>Search by address</h1>
        <h2>Search results for: {this.getAddress()}</h2>

        <AddressResults tenancies={this.state.results.tenancies} />
      </div>
    );
  }
}
