import React, { Component } from 'react';
import Utils from '../../../lib/Utils';
import './index.css';

export default class PreviousRecord extends Component {
  constructor(props) {
    super(props);
    this.state = { visible: false };
  }

  view = () => {
    this.setState(state => {
      const visible = !state.visible;
      return { visible: visible };
    });
  };

  render() {
    return (
      <div className={`previousRecord ${this.state.visible ? 'open' : ''}`}>
        <div className="row">
          <h3>
            {Utils.nameCase(
              `${this.props.record.firstName} ${this.props.record.lastName}`
            )}
          </h3>
          <a
            href={`/customer/${this.props.record.id}`}
            role="button"
            className="govuk-button lbh-button"
          >
            View Record
          </a>
        </div>
        <div className="row">
          <a href="#/" onClick={this.view}>
            View connected records &gt;
          </a>
        </div>
        {this.state.visible && (
          <>
            <div className="row">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
            <div className="row">
              <a href="#/" role="button" className="govuk-button lbh-button">
                Update
              </a>
            </div>
          </>
        )}
      </div>
    );
  }
}
