import React, { Component } from 'react';

export default class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedValue: props.initialValue
    };
  }

  select = e => {
    this.setState({ selectedValue: e.target.value }, () => {
      this.props.onChange(this.state.selectedValue);
    });
  };
  render() {
    return (
      <div className="govuk-form-group">
        <label className="govuk-label" for="items-per-page" hidden>
          Items per page
        </label>
        <select
          onChange={this.select}
          value={this.state.selectedValue}
          className="govuk-select"
          id="items-per-page"
          name="items-per-page"
        >
          {this.props.values.map(option => {
            const [key, value] = Object.entries(option)[0];
            return <option value={key}>{value}</option>;
          })}
        </select>
      </div>
    );
  }
}
