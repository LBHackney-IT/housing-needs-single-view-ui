import React, { Component } from 'react';
import { goBack } from '../../lib/Utils';
import { FetchTenancyRecord } from '../../Gateways';
import { FetchTransactions } from '../../Gateways';
import Tenant from '../../Components/Tenant';
import { isMemberOfGroups } from '../../lib/Cookie';
import {
  TenancyDetails,
  TenancyPatchDetails,
  HouseholdMembers,
  TenancyProcesses
} from '../../Components/Details';
import './index.scss';
import CautionaryAlerts from '../../Components/Details/CautionaryAlerts';
import RentTransactions from '../../Components/Details/RentTransactions';

export default class TenancyDetailsPage extends Component {
  constructor(props) {
    super(props);

    this.state = { notes: [], fetching: true, transactions: [] };
  }

  componentDidMount() {
    const tenancyId = this.props.match.params.id;

    FetchTenancyRecord(tenancyId).then(result => {
      this.setState({
        tenancy: result.tenancy,
        fetching: false,
        areaPatch: result.tenancy.areaPatch
      });
    });

    FetchTransactions(tenancyId).then(result => {
      this.setState({
        transactions: result.transactions.transactions
      });
    });
  }

  startTenancyProcess = () => {
    window.location.href = `${process.env.REACT_APP_MANAGE_A_TENANCY_APP_URL}/tasks/new?tag_ref=${this.props.match.params.id}&uprn=${this.state.tenancy.uprn}`;
  };

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
            {householdMembers.length > 0 && (
              <HouseholdMembers members={householdMembers} />
            )}
            {this.state.tenancy.contacts.some(
              tenancy => tenancy.alerts.length > 0
            ) && <h2>Notifications</h2>}
            <div className="alert-tiles">
              {this.state.tenancy.contacts.map(contact => {
                return contact.alerts.map((alert, index) => {
                  return (
                    <CautionaryAlerts
                      key={`${index}-alert`}
                      label="Cautionary"
                      alert={alert}
                      name={contact.firstName + ' ' + contact.lastName}
                    />
                  );
                });
              })}
            </div>
            <br />
            <RentTransactions transactions={this.state.transactions} />
            <TenancyProcesses tasks={this.state.tenancy.tasks} />
            <div>
              {isMemberOfGroups([
                'HOUSING_OFFICER',
                'AREA_HOUSING_MANAGER',
                'DEV_TEAM'
              ]) && (
                <button
                  onClick={this.startTenancyProcess}
                  id="newTenancy"
                  className="govuk-button lbh-button"
                  type="submit"
                >
                  Create new process
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
