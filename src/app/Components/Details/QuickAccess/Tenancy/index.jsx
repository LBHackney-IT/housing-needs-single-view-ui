import React, { Component } from 'react';
import Utils from '../../../../lib/Utils';
import Modal from '../../../Modal';
import moment from 'moment';
import './index.scss';

export default class Tenancy extends Component {
  tenancyInfo() {
    const { customer } = this.props;

    if (customer.tenancies.current.length > 0) {
      return (
        <table>
          <tbody>
            <tr>
              <td>Account ref:</td>
              <td>{customer.tenancies.current[0].tagRef}</td>
            </tr>
            <tr>
              <td>Balance:</td>
              <td>
                {Utils.formatCurrency(
                  customer.tenancies.current[0].currentBalance
                )}
              </td>
            </tr>
          </tbody>
        </table>
      );
    } else {
      return <p>No current tenancy</p>;
    }
  }

  tenancy(tenancy) {
    return (
      <table key={tenancy.propRef} className="tenancy">
        <tbody>
          <tr>
            <td>Address:</td>
            <td>{tenancy.address}</td>
          </tr>
          <tr>
            <td>Start Date:</td>
            <td>{moment(tenancy.startDate).format('DD/MM/YYYY')}</td>
          </tr>
          {tenancy.endDate ? (
            <tr>
              <td>End Date:</td>
              <td>{moment(tenancy.endDate).format('DD/MM/YYYY')}</td>
            </tr>
          ) : null}
          <tr>
            <td>Tenure:</td>
            <td>{tenancy.tenure}</td>
          </tr>
          <tr>
            <td>Property Ref:</td>
            <td>{tenancy.propRef}</td>
          </tr>
          <tr>
            <td>Rent:</td>
            <td>{Utils.formatCurrency(tenancy.rentAmount)}</td>
          </tr>
          <tr>
            <td>Balance:</td>
            <td>{Utils.formatCurrency(tenancy.currentBalance)}</td>
          </tr>
        </tbody>
      </table>
    );
  }

  currentTenancy() {
    const { customer } = this.props;

    if (customer.tenancies.current.length > 0) {
      return (
        <div key="current">
          <h3>Current Tenancy</h3>
          {customer.tenancies.current.map(t => this.tenancy(t))}
        </div>
      );
    }
  }

  previousTenancies() {
    const { customer } = this.props;

    if (customer.tenancies.previous.length > 0) {
      return (
        <div key="previous">
          <h3>Previous Tenancies</h3>
          {customer.tenancies.previous.map(t => this.tenancy(t))}
        </div>
      );
    }
  }

  render() {
    const { customer } = this.props;

    if (!customer.tenancies) {
      return <></>;
    }
    return (
      <div className="quick-access__item">
        <h3>Council Tenancy</h3>
        {this.tenancyInfo()}
        <div className="quick-access__item__links">
          <ul>
            <li>
              <Modal
                trigger={<button className="linkStyle">More details</button>}
              >
                {this.currentTenancy()}
                {this.previousTenancies()}
              </Modal>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
