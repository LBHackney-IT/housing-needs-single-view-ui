import React, {Component} from 'react';

export default class HousingRegister extends Component {
  render() {
    if(this.props.customer.housingRegister.length < 1) {
      return <></>
    }

    return (
      <div className="quick-access__item">
        <h3>
         Housing Register
        </h3>
        <table>
          <tbody>
            <tr>
              <td>Bidding no:</td>
              <td>{this.props.customer.housingRegister.biddingNo}</td>
            </tr>
            <tr>
              <td>Band:</td>
              <td>{this.props.customer.housingRegister.band}</td>
            </tr>
          </tbody>
        </table>
        <div>
          <ul><li><a href="#">More details</a></li></ul>
        </div>
      </div>
    );
  }
}