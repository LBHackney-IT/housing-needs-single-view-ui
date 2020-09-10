import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { isMemberOfGroups } from '../../lib/Cookie';

export default class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      address: '',
      selected_option: '',
      searching: false,
      error: false
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleOption = event => {
    this.setState({ selected_option: event.target.name });
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

  searchByAddress = e => {
    if (this.state.selected_option === '' || this.state.address === '') {
      this.setState({
        error: true
      });
      e.preventDefault();
      return false;
    }

    let attrs = ['address'];
    let params = attrs
      .map(attr => {
        return this.state[attr] === '' || this.state[attr] === false
          ? null
          : [attr, this.state[attr]];
      })
      .filter(el => el !== null)
      .map(items => {
        return items.join('=');
      })
      .join('&');

    this.setState({
      redirect: `/tenancies?${params}&${this.state.selected_option}=true`
    });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect push to={this.state.redirect} />;
    }

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
              id="firstName"
              onChange={this.handleChange}
              value={this.state.firstname}
            />
          </div>
          <div className="govuk-form-group">
            <label className="govuk-label" htmlFor="lastName">
              Last Name
            </label>
            <input
              className="govuk-input"
              type="text"
              name="lastName"
              id="lastName"
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

        {isMemberOfGroups(['HOUSING_OFFICER', 'AREA_HOUSING_MANAGER']) && (
          <div className="lbh-container">
            <h2>
              Search by address for Council tenancies, leaseholders or
              freeholders
            </h2>

            <form onSubmit={this.searchByAddress}>
              <div class="govuk-form-group">
                <fieldset class="govuk-fieldset">
                  <div class="govuk-radios">
                    <div class="govuk-radios__item">
                      <input
                        class="govuk-radios__input"
                        id="current_tenancies"
                        onChange={this.handleOption}
                        name="current_tenancies"
                        type="radio"
                        checked={
                          this.state.selected_option === 'current_tenancies'
                        }
                        value="true"
                      />
                      <label
                        class="govuk-label govuk-radios__label"
                        for="current_tenancies"
                      >
                        Current tenants
                      </label>
                    </div>
                    <div class="govuk-radios__item">
                      <input
                        class="govuk-radios__input"
                        id="former_tenancies"
                        onChange={this.handleOption}
                        name="former_tenancies"
                        type="radio"
                        checked={
                          this.state.selected_option === 'former_tenancies'
                        }
                        value="true"
                      />
                      <label
                        class="govuk-label govuk-radios__label"
                        for="former_tenancies"
                      >
                        Former tenants
                      </label>
                    </div>
                    <div class="govuk-radios__item">
                      <input
                        class="govuk-radios__input"
                        id="leasehold_only"
                        onChange={this.handleOption}
                        name="leasehold_only"
                        type="radio"
                        checked={
                          this.state.selected_option === 'leasehold_only'
                        }
                        value="true"
                      />
                      <label
                        class="govuk-label govuk-radios__label"
                        for="leasehold_only"
                      >
                        Leaseholders
                      </label>
                    </div>
                    <div class="govuk-radios__item">
                      <input
                        class="govuk-radios__input"
                        id="freehold_only"
                        onChange={this.handleOption}
                        name="freehold_only"
                        type="radio"
                        checked={this.state.selected_option === 'freehold_only'}
                        value="true"
                      />
                      <label
                        class="govuk-label govuk-radios__label"
                        for="freehold_only"
                      >
                        Freeholders
                      </label>
                    </div>
                  </div>
                </fieldset>
              </div>
              <div className="govuk-form-group">
                <label className="govuk-label" htmlFor="firstName">
                  Address
                </label>
                <input
                  className="govuk-input"
                  type="text"
                  name="address"
                  id="address"
                  onChange={this.handleChange}
                  value={this.state.address}
                />
              </div>

              <div className="govuk-form-group">
                <button className="govuk-button lbh-button" type="submit">
                  Search by address
                </button>
              </div>

              {this.state.error ? (
                <span className="govuk-error-message lbh-error-message">
                  Please select at least one option and add an address
                </span>
              ) : null}
            </form>
          </div>
        )}
      </div>
    );
  }
}
