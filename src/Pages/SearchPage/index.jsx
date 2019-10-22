import React, {Component} from 'react';
import './index.css';
import { Link } from "react-router-dom";


export default class SearchPage extends Component {

  constructor(props) {
    super(props);
    this.state = {firstName: '', lastName: '', dob: '', nino: '', searching: false};
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  search = () => {
    this.props.onSearch(this.state);
    this.setState({searching: true});
  }

  searchLink () {
    let attrs = ['firstName', 'lastName', 'dob', 'nino'];
    let params = attrs.map(attr => {
      return this.state[attr] === '' ? null : [attr, this.state[attr]]
    }).filter(el => el !== null)
    .map(items => {
      return items.join('=')
    })
    .join('&');

    return `/search?${params}`;
  }

  button = () => {
    return <button type="submit">Search</button>;
  };

  render() {
    return (
      <form className="searchPage" action={this.searchLink()}>
        <h1>Search for a customer</h1>
        <div className="inputBlock">
          <label htmlFor="firstName">First Name</label>
          <input type="text" name="firstName" onChange={this.handleChange} value={this.state.firstname} />
        </div>
        <div className="inputBlock">
          <label htmlFor="first_name">Last Name</label>
          <input type="text" name="lastName" onChange={this.handleChange} value={this.state.lastName} />
        </div>
        <div className="inputBlock">
          <label htmlFor="dob">Date of Birth</label>
          <input type="text" name="dob"  onChange={this.handleChange} value={this.state.dob} />
        </div>
        <div className="inputBlock">
          <label htmlFor="nino">National Insurance number</label>
          <input type="text" name="nino"  onChange={this.handleChange} value={this.state.nino} />
        </div>
        {this.button()}
      </form>
    );
  }
}
