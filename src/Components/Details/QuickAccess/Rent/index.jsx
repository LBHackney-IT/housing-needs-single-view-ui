import React, {Component} from 'react';

export default class Rent extends Component {
  formatCurrency(amount) {
    if (amount) {
      return `£${amount.toFixed(2)}`;
    } else {
      return "£---";
    }
  }

  render() {
    if(!this.props.customer.rentAccountRef) {
      return <></>
    }
    return (
      <div className="quick-access__item">
        <h3>
         Rent
        </h3>
        <table>
          <tbody>
            <tr>
              <td>Account ref:</td>
              <td>{this.props.customer.rentAccountRef}</td>
            </tr>
            <tr>
              <td>Balance:</td>
              <td>{this.formatCurrency(this.props.customer.rentAccountBalance)}</td>
            </tr>
          </tbody>
        </table>
        <div>
          <p><a href="#">More details</a></p>
        </div>
      </div>
    );
  }
}