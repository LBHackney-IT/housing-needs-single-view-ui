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
    document.title = 'Vulnerabilities - Single View';
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

        <br />

        <div className="row">
          <h3 className="lbh-heading-h3">What to look out for</h3>
        </div>
        <div
          className="govuk-accordion lbh-accordion"
          data-module="govuk-accordion"
        >
          <div className="govuk-accordion__section ">
            <div className="govuk-accordion__section-header">
              <h5 className="govuk-accordion__section-heading">
                <span className="govuk-accordion__section-button">
                  Active case with other services?
                </span>
              </h5>
            </div>
            <div className="govuk-accordion__section-content">
              <ul className="lbh-list lbh-list--bullet">
                <li>Example item 1</li>
              </ul>
            </div>
          </div>
          <div className="govuk-accordion__section ">
            <div className="govuk-accordion__section-header">
              <h5 className="govuk-accordion__section-heading">
                <span className="govuk-accordion__section-button">
                  At risk of arrears?
                </span>
              </h5>
            </div>
            <div className="govuk-accordion__section-content">
              <ul className="lbh-list lbh-list--bullet">
                <li>Example item 2</li>
              </ul>
            </div>
          </div>
          <div className="govuk-accordion__section ">
            <div className="govuk-accordion__section-header">
              <h5 className="govuk-accordion__section-heading">
                <span className="govuk-accordion__section-button">
                  Benefits trigger events?
                </span>
              </h5>
            </div>
            <div className="govuk-accordion__section-content">
              <ul className="lbh-list lbh-list--bullet">
                <li>Example item 2</li>
              </ul>
            </div>
          </div>
          <div className="govuk-accordion__section ">
            <div className="govuk-accordion__section-header">
              <h5 className="govuk-accordion__section-heading">
                <span className="govuk-accordion__section-button">
                  Unusual behaviour?
                </span>
              </h5>
            </div>
            <div className="govuk-accordion__section-content">
              <ul className="lbh-list lbh-list--bullet">
                <li>Example item 2</li>
              </ul>
            </div>
          </div>
          <div className="govuk-accordion__section ">
            <div className="govuk-accordion__section-header">
              <h5 className="govuk-accordion__section-heading">
                <span className="govuk-accordion__section-button">
                  Significant change or transition?
                </span>
              </h5>
            </div>
            <div className="govuk-accordion__section-content">
              <ul className="lbh-list lbh-list--bullet">
                <li>Example item 2</li>
              </ul>
            </div>
          </div>
          <div className="govuk-accordion__section ">
            <div className="govuk-accordion__section-header">
              <h5 className="govuk-accordion__section-heading">
                <span className="govuk-accordion__section-button">
                  Emotional shock?
                </span>
              </h5>
            </div>
            <div className="govuk-accordion__section-content">
              <ul className="lbh-list lbh-list--bullet">
                <li>Example item 2</li>
              </ul>
            </div>
          </div>
          <div className="govuk-accordion__section ">
            <div className="govuk-accordion__section-header">
              <h5 className="govuk-accordion__section-heading">
                <span className="govuk-accordion__section-button">
                  Level of stress?
                </span>
              </h5>
            </div>
            <div className="govuk-accordion__section-content">
              <ul className="lbh-list lbh-list--bullet">
                <li>Example item 2</li>
              </ul>
            </div>
          </div>
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
