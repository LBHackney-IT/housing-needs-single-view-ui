import React, {Component} from 'react';
import './index.css';


export default class SearchPage extends Component {
  render(){
    return(
      <div className="searchPage">
        <h1>Search for a customer</h1>
        <div className="inputBlock">
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" />
        </div>
        <div className="inputBlock">
          <label htmlFor="first_name">Last Name</label>
          <input type="text" id="lastName"  />
        </div>
        <div className="inputBlock">
          <label htmlFor="dob">Date of Birth</label>
          <input type="text" id="dob"  />
        </div>
        <div className="inputBlock">
          <label htmlFor="nino">National Insurance number</label>
          <input type="text" id="nino"  />
        </div>
        <button>Search</button>
      </div>
    );
  }
}
