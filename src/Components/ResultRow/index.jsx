import React, { Component } from 'react';
import './index.css';

export default class ResultRow extends Component {
  constructor(props) {
    super(props);
    this.state = { selected: false };
  }

  checkbox = () => {
    if (this.props.selectable) {
      return (
        <td>
          <div className="govuk-checkboxes">
            <div className="govuk-checkboxes__item">
              <input
                className="govuk-checkboxes__input"
                type="checkbox"
                checked={this.state.selected}
                onChange={this.click}
                onClick={this.click}
              ></input>
            </div>
          </div>
        </td>
      );
    }
  };

  formatAddress = address => {
    return address
      ? address
          .split('\n')
          .map(el => el.trim())
          .join(', ')
      : '';
  };

  click = () => {
    this.setState(state => {
      let selected = !state.selected;
      if (selected) {
        this.props.onSelected(this.props.result);
      } else {
        this.props.onDeselected(this.props.result);
      }
      return { selected: selected };
    });
  };

  render() {
    return (
      <tr
        onClick={this.click}
        className={this.state.selected ? 'selected' : null}
      >
        {this.checkbox()}
        <td>{this.props.result.firstName}</td>
        <td>{this.props.result.lastName}</td>
        <td>{this.props.result.dob}</td>
        <td>{this.props.result.nino}</td>
        <td>{this.formatAddress(this.props.result.address)}</td>
      </tr>
    );
  }
}
