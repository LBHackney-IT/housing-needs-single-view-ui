import React, { Component } from 'react';
import { goBack } from '../../lib/Utils';
import { FetchTenancyRecord } from '../../Gateways';
import Resident from '../../Components/Resident';

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
        <div className="lbh-container row details" data-test="tenancy-address">
          <h1>{this.state.tenancy.address}</h1>
        </div>
        <div className="lbh-container row details" data-test="tenancy-heading">
          <h2> Tenancy</h2>
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
        <div
          className="lbh-container row details"
          data-test="residents-heading"
        >
          <h2> Residents</h2>

          {this.state.tenancy.residents.map((resident, index) => {
            return <Resident key={index} {...resident} />;
          })}
        </div>
      </div>
    );
  }
}
