import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export default class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      address: '',
      selected_option: 'current_tenancies',
      searching: false,
      searchByAddressError: false,
      searchByNameError: false
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

  searchLink = e => {
    if (this.state.firstName === '' && this.state.lastName === '') {
      this.setState({
        searchByNameError: true
      });
      e.preventDefault();
      return false;
    }

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

    this.setState({
      redirect: `/search?${params}`
    });
  };

  searchByAddress = e => {
    if (this.state.selected_option === '' || this.state.address === '') {
      this.setState({
        searchByAddressError: true
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
          In Single View you can search on a name and view customer data from
          UHT, UHW, Jigsaw and Academy in one place.
        </p>
        <br />
        <p>
          You can also search our UH housing data by address and view tenancy
          information
        </p>
        <br />
        <h2>Search by name</h2>

        <form onSubmit={this.searchLink}>
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
            <button
              className="govuk-button lbh-button"
              type="submit"
              data-testid="search-by-name-button-test"
            >
              Search by name
            </button>
          </div>

          {this.state.searchByNameError ? (
            <>
              <span
                className="govuk-error-message lbh-error-message"
                data-testid="search-by-name-error-test"
              >
                Please enter a name
              </span>
              <br />
            </>
          ) : null}
        </form>

        <div className="lbh-container">
          <h2>
            Search by address for Council tenancies, leaseholders or freeholders
          </h2>

          <form onSubmit={this.searchByAddress}>
            <div class="govuk-form-group">
              <fieldset class="govuk-fieldset">
                <div class="govuk-radios">
                  <div
                    class="govuk-radios__item"
                    data-testid="current-tenants-test"
                  >
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
                  <div
                    class="govuk-radios__item"
                    data-testid="former-tenants-test"
                  >
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
                  <div
                    class="govuk-radios__item"
                    data-testid="leaseholders-test"
                  >
                    <input
                      class="govuk-radios__input"
                      id="leasehold_only"
                      onChange={this.handleOption}
                      name="leasehold_only"
                      type="radio"
                      checked={this.state.selected_option === 'leasehold_only'}
                      value="true"
                    />
                    <label
                      class="govuk-label govuk-radios__label"
                      for="leasehold_only"
                    >
                      Leaseholders
                    </label>
                  </div>
                  <div
                    class="govuk-radios__item"
                    data-testid="freeholders-test"
                  >
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
              <button
                className="govuk-button lbh-button"
                type="submit"
                data-testid="search-by-address-button-test"
              >
                Search by address
              </button>
            </div>

              {this.state.searchByAddressError ? (
                <span
                  className="govuk-error-message lbh-error-message"
                  data-testid="error-test"
                >
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
