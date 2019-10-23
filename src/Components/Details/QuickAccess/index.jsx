import React, {Component} from 'react';
import Benefits from './Benefits'
import CaseInformation from './CaseInformation'
import CouncilTax from './CouncilTax'
import HousingRegister from './HousingRegister'
import Rent from './Rent'

export default class QuickAccess extends Component {
  render() {
    return (
      <div >
        <h2>
         Quick Access
        </h2>
        <div className="quick-access row">
          <CaseInformation customer={this.props.customer} />
        <HousingRegister customer={this.props.customer} />
        <Rent customer={this.props.customer} />
        <Benefits />
        <CouncilTax /> </div>  
      </div>
    );
  }
}
