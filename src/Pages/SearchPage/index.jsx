import React, { Component } from "react";

export default class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      dob: "",
      nino: "",
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
    let attrs = ["firstName", "lastName", "dob", "nino"];
    let params = attrs
      .map(attr => {
        return this.state[attr] === "" ? null : [attr, this.state[attr]];
      })
      .filter(el => el !== null)
      .map(items => {
        return items.join("=");
      })
      .join("&");

    return `/search?${params}`;
  }

  render() {
    return (
      <div className="lbh-container">
        {process.env.REACT_APP_HN_API_URL}

        <form action={this.searchLink()}>
          <h1>Search for a customer</h1>
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
            <label className="govuk-label" htmlFor="dob">
              Date of Birth
            </label>
            <input
              className="govuk-input"
              type="text"
              name="dob"
              onChange={this.handleChange}
              value={this.state.dob}
            />
          </div>
          <div className="govuk-form-group">
            <label className="govuk-label" htmlFor="nino">
              National Insurance number
            </label>
            <input
              className="govuk-input lbh-input"
              type="text"
              name="nino"
              onChange={this.handleChange}
              value={this.state.nino}
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
