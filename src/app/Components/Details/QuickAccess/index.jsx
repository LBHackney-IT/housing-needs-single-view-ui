import React, { Component } from 'react';
import Benefits from './Benefits';
import CaseInformation from './CaseInformation';
import CouncilTax from './CouncilTax';
import HousingRegister from './HousingRegister';
import Tenancy from './Tenancy';
import SharedPlanQuickBox from './SharedPlan';
import { hasFeatureFlag } from '../../../lib/FeatureFlag';

export default class QuickAccess extends Component {
  render() {
    const { customer, customerId } = this.props;

    return (
      <div id="quickAccess">
        <h2>Quick Access</h2>
        <div className="quick-access row">
          <CaseInformation customer={customer} />
          <HousingRegister customer={customer} />
          <Tenancy customer={customer} />
          <Benefits customer={customer} />
          <CouncilTax customer={customer} />
          {hasFeatureFlag('shared_plan') && (
            <SharedPlanQuickBox customerId={customerId} />
          )}
        </div>
      </div>
    );
  }
}
