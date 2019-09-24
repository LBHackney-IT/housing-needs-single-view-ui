import React, {Component} from 'react';
import './index.css';


export default class SearchPage extends Component {

  constructor(props) {
    super(props);
    this.state = {firstName: '', lastName: '', dob: '', nino: ''};
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  search = () => {
    this.props.onSearch(this.state);
  }

  button = () => {
    if(this.props.pageState === 'searching'){
      return  <button onClick={this.search} disabled={true}>Searching</button>
    }else{
      return <button onClick={this.search}>Search</button>
    }
  }

  render(){
    return(
      <div className="searchPage">
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
      </div>
    );
  }
}
