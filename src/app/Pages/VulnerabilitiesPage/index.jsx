import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { AddVulnerability } from '../../Gateways';
import { username } from '../../lib/Cookie';

export default class VulnerabilitiesPage extends Component {
  constructor(props) {
    super(props);

    this.state = { text: '', redirect: false };
  }

  setText = event => {
    this.setState({ text: event.target.value });
  };

  addVulnerability = async () => {
    await AddVulnerability(this.props.match.params.id, {
      text: this.state.text,
      user: username()
    });
    this.setState({ redirect: true });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to={`/customers/${this.props.match.params.id}/view`} />;
    }
    return (
      <div className="lbh-container">
        <div className="row">
          <h2 className="lbh-heading-h2">Add a note about vulnerabilities</h2>
        </div>
        <div className="govuk-form-group lbh-form-group">
          <label
            className="govuk-label lbh-label"
            htmlFor="vulnerabilities-detail"
          >
            Write a description about any vulnerabilities you are aware of here.
          </label>
          <textarea
            className="govuk-textarea lbh-textarea"
            id="vulnerabilities-detail"
            name="vulnerabilities-detail"
            rows="5"
            onChange={this.setText}
            value={this.state.text}
          ></textarea>
        </div>
        <div className="row">
          <button
            className="govuk-button lbh-button"
            data-module="govuk-button"
            onClick={this.addVulnerability}
          >
            Save and continue
          </button>
        </div>
      </div>
    );
  }
}
