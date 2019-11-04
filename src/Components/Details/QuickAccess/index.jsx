import React, { Component } from 'react';
import Benefits from './Benefits';
import CaseInformation from './CaseInformation';
import CouncilTax from './CouncilTax';
import HousingRegister from './HousingRegister';
import Rent from './Rent';

export default class QuickAccess extends Component {
  render() {
    const { customer } = this.props;

    return (
      <div>
        <h2>Quick Access</h2>
        <div className="quick-access row">
          <CaseInformation customer={customer} />
          <HousingRegister customer={customer} />
          <Rent customer={customer} />
          <Benefits customer={customer} />
          <CouncilTax customer={customer} />{' '}
        </div>
      </div>
    );
  }
}
