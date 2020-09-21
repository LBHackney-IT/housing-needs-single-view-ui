import React, { Component } from 'react';
import { goBack } from '../../lib/Utils';
import { FetchTenancyRecord } from '../../Gateways';
import Tenant from '../../Components/Tenant';
import { isMemberOfGroups } from '../../lib/Cookie';
import {
  TenancyDetails,
  TenancyPatchDetails,
  HouseholdMembers
} from '../../Components/Details';
import './index.scss';

export default class TenancyDetailsPage extends Component {
  constructor(props) {
    super(props);

    this.state = { notes: [], fetching: true };
  }

  componentDidMount() {
    const tenancyId = this.props.match.params.id;

    FetchTenancyRecord(tenancyId).then(result => {
      this.setState({
        tenancy: result.tenancy,
        fetching: false,
        areaPatch: result.areaPatch.patch
      });
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

    const tenants = this.state.tenancy.contacts.filter(
      contact => contact.responsible
    );

    const householdMembers = this.state.tenancy.contacts.filter(
      contact => !contact.responsible
    );

    return (
      <div>
        <div className="lbh-container row details">
          <p>
            <button onClick={goBack} className="govuk-back-link">
              Back to search
            </button>
          </p>
        </div>

        <div className="lbh-container row details">
          <h1 data-test="tenancy-address">{this.state.tenancy.address}</h1>
        </div>

        <div className="lbh-container row details">
          <div className="details__left-column">
            <TenancyDetails tenancy={this.state.tenancy} />
            <TenancyPatchDetails areaPatch={this.state.areaPatch} />
          </div>

          <div className="details__right-column">
            <div id="tenant-container">
              <h2>Residents</h2>
              <div id="tenant-tiles">
                {tenants.map((tenant, index) => {
                  return <Tenant key={index} {...tenant} />;
                })}
              </div>
            </div>
            <HouseholdMembers members={householdMembers} />

            <div>
              {isMemberOfGroups([
                'HOUSING_OFFICER',
                'AREA_HOUSING_MANAGER'
              ]) && (
                <button
                  onClick={this.startTenancyProcess}
                  id="newTenancy"
                  className="govuk-button lbh-button"
                  type="submit"
                >
                  Start New Tenancy Process
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
