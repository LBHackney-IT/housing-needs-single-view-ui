import React, { Component } from 'react';

export default class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      searching: false
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  search = () => {
    this.props.onSearch(this.state);
    this.setState({ searching: true });
  };

  searchLink() {
    let attrs = ['firstName', 'lastName'];
    let params = attrs
      .map(attr => {
        return this.state[attr] === '' ? null : [attr, this.state[attr]];
      })
      .filter(el => el !== null)
      .map(items => {
        return items.join('=');
      })
      .join('&');

    return `/search?${params}`;
  }

  render() {
    document.title = 'Search - Single View';
    return (
      <div className="lbh-container">
        <h1>Welcome to Single View</h1>
        <p>
          View customer data from UHT, UHW, Jigsaw and Academy in one place
          [read only]
        </p>
        <br />
        <h2>Search for a customer</h2>

        <form action={this.searchLink()}>
          <div className="govuk-form-group">
            <label className="govuk-label" htmlFor="firstName">
              First Name
            </label>
            <input
              className="govuk-input"
              type="text"
              name="firstName"
              onChange={this.handleChange}
              value={this.state.firstname}
            />
          </div>
          <div className="govuk-form-group">
            <label className="govuk-label" htmlFor="first_name">
              Last Name
            </label>
            <input
              className="govuk-input"
              type="text"
              name="lastName"
              onChange={this.handleChange}
              value={this.state.lastName}
            />
          </div>
          <div className="govuk-form-group">
            <button className="govuk-button lbh-button" type="submit">
              Search
            </button>
          </div>
        </form>
      </div>
    );
  }
}
