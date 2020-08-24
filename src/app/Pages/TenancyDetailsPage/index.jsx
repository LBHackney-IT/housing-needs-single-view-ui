import React, { Component } from 'react';
import { goBack } from '../../lib/Utils';
import { FetchTenancyRecord } from '../../Gateways';
import Tenant from '../../Components/Tenant';
import './index.scss';

export default class TenancyDetailsPage extends Component {
  constructor(props) {
    super(props);

    this.state = { notes: [], fetching: true };
  }

  componentDidMount() {
    const tenancyId = this.props.match.params.id;

    FetchTenancyRecord(tenancyId).then(result => {
      this.setState({ tenancy: result.tenancy, fetching: false });
    });
  }

  render() {
    document.title = 'Tenancy details - Single View';

    if (this.state.fetching) {
      return (
        <div className="lbh-container">
          <h1>Fetching tenancy record...</h1>
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
        <div
          id="tenancy-full-address"
          className="lbh-container row details"
          data-test="tenancy-address"
        >
          <h1>{this.state.tenancy.address}</h1>
        </div>
        <div id="tenancy-area-patch-container">
          <div id="tenancy-tile">
            <div
              className="lbh-container row details"
              data-test="tenancy-heading"
            >
              <h2>Tenancy</h2>
            </div>
            <div className="lbh-container row details" data-test="tenancy-type">
              <p>Tenancy type: {this.state.tenancy.type}</p>
            </div>
            <div
              className="lbh-container row details"
              data-test="tenancy-start-date"
            >
              <p>Tenancy start date: {this.state.tenancy.startDate}</p>
            </div>
            <div
              className="lbh-container row details"
              data-test="tenancy-reference"
            >
              <p>Tenancy reference: {this.state.tenancy.id}</p>
            </div>
          </div>
          <div id="area-patch-tile">
            <div
              id="area-patch-heading"
              className="lbh-container row details"
              data-test="area-patch-heading"
            >
              <h2>Area and Patch</h2>
            </div>
            <div id="area-patch-tenancy" className="lbh-container row details">
              <p id="area-patch-content" data-test="area-patch-content">
                Tenancy:
                <span id="area-patch-contents" data-test="area-patch-contents">
                  HomertonFAKE <br /> HN10FAKE <br /> Tony JamesFAKE
                </span>
              </p>
            </div>
          </div>
        </div>

        <div
          id="tenant-container"
          className="lbh-container row details"
          data-test="tenant-heading"
        >
          <h2 data-test="tenant-header"> Residents</h2>
          <div id="tenant-tile">
           
            {this.state.tenancy.tenants.map((tenant, index) => {
              return <Tenant key={index} {...tenant} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}
