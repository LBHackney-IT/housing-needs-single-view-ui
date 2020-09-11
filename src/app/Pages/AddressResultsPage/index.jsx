import React, { Component } from 'react';

export default class AddressResultsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      searching: false
    };
  }

  render() {
    document.title = 'Search - Single View';
    return (
      <div className="lbh-container">
        <h1>Address results page!</h1>
      </div>
    );
  }
}
