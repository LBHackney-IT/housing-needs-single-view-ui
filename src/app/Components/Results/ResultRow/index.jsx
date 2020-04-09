import React, { Component } from 'react';
import './index.scss';

export default class ResultRow extends Component {
  constructor(props) {
    super(props);
    this.state = { selected: false, filtered: false };
  }

  static getDerivedStateFromProps(props) {
    if (props.filter) {
      for (var k in props.filter) {
        if (
          props.result[k] &&
          props.result[k] !== '' &&
          props.result[k] !== props.filter[k]
        ) {
          return { filtered: true };
        }
      }
    }
    return { filtered: false };
  }

  checkbox = id => {
    console.log(this.props);
    if (this.props.selectable) {
      return (
        <td>
          <label htmlFor={`checkbox_${id}`} className="visuallyhidden">
            Checkbox
          </label>
          <div className="govuk-checkboxes">
            <div className="govuk-checkboxes__item">
              <input
                className="govuk-checkboxes__input"
                type="checkbox"
                checked={this.state.selected}
                onChange={this.click}
                onClick={this.click}
                disabled={this.state.filtered}
                id={`checkbox_${id}`}
              ></input>
            </div>
          </div>
        </td>
      );
    }
  };

  click = () => {
    if (!this.state.filtered && this.props.selectable) {
      this.setState(state => {
        let selected = !state.selected;
        if (selected) {
          this.props.onSelected(this.props.result);
        } else {
          this.props.onDeselected(this.props.result);
        }
        return { selected: selected };
      });
    }
  };

  className() {
    return [
      this.state.selected ? 'selected' : null,
      this.state.filtered ? 'filtered' : null
    ]
      .filter(x => x)
      .join(' ');
  }

  render() {
    return (
      <tr
        onClick={this.click}
        className={this.className()}
        title={
          this.state.filtered
            ? "This record has a conflicting date of birth or Ni No and can't be connected"
            : null
        }
      >
        {this.checkbox(this.props.result.id)}
        {this.props.result.system && <td>{this.props.result.system}</td>}
        <td>{this.props.result.firstName}</td>
        <td>{this.props.result.lastName}</td>
        <td>{this.props.result.dob}</td>
        <td>{this.props.result.nino}</td>
        <td>{this.props.result.address}</td>
      </tr>
    );
  }
}
