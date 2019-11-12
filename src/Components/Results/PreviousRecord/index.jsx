import React, { Component } from 'react';
import Utils from '../../../lib/Utils';
import './index.css';
import { RecordsTable } from '../';

export default class PreviousRecord extends Component {
  constructor(props) {
    super(props);
    this.state = { visible: false };
  }

  show = () => {
    this.setState(state => {
      const visible = !state.visible;
      return { visible: visible };
    });
  };

  render() {
    return (
      <div className="previousRecord">
        <div className="row">
          <div>
            <h3>
              {Utils.nameCase(
                `${this.props.record.firstName} ${this.props.record.lastName}`
              )}
            </h3>
            <a href="#/" onClick={this.show}>
              {!this.state.visible
                ? 'Show connected records >'
                : '< Hide connected records'}
            </a>
          </div>

          <div>
            <a
              href={`/customers/${this.props.record.id}`}
              role="button"
              className="govuk-button lbh-button"
            >
              View Record
            </a>
            <a href={`#/`} role="button" className="govuk-button lbh-button">
              Disconnect Record
            </a>
          </div>
        </div>
        {this.state.visible && (
          <>
            <div className="row">
              <RecordsTable
                records={this.props.record.links.map(l => {
                  return {
                    system: l.system_name,
                    firstName: l.first_name,
                    lastName: l.last_name,
                    dob: l.dob,
                    nino: l.nino,
                    address: l.address
                  };
                })}
                selectable={false}
              />
            </div>
          </>
        )}
      </div>
    );
  }
}
