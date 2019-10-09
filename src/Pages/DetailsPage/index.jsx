import React, {Component} from 'react';
import './index.css';
import FetchCustomerNotes from '../../Gateways/FetchCustomerNotes';
import FetchCustomer from '../../Gateways/FetchCustomer';
import Notes from '../../Components/Notes';


export default class DetailsPage extends Component {

  constructor(props) {
    super(props);
    
    this.state = {notes: [], fetching: true};
  }

  componentDidMount(){
    FetchCustomer(this.props.match.params.id, (err, result) => {
      if(err) console.log(err)
      this.setState({customer: result.customer, fetching: false})
      FetchCustomerNotes(this.state.customer.id, (err, response) => {
        this.setState({notes: response.notes})
      })
    })
  }

  address(){
    if(this.state.customer.address){
      return <span dangerouslySetInnerHTML={{__html: this.state.customer.address.split("\n").join("<br />")}}></span>
    }else{
      return null;
    }
  }

  formatCurrency(amount){
    if(amount){
      return `£${amount.toFixed(2)}`
    }else{
      return '£---';
    }
  }

  household(){
    if(this.state.customer.household.length > 0){
      return <ul>
        {this.state.customer.household.map((person, key) => {
          return <li key={key}>
            <h3>{person.name}</h3>
            <p>{person.relationship} <span className="dob">{person.dob}</span></p>
          </li>
        })}
      </ul>
    }else{
      return null;
    }
  }

  housingNeedsStatus(){
    if(this.state.customer.jigsawId){
      return (<div className="housingNeedsStatus">
        <div className="externalLinks">
          <ul>
            <li><a href={`https://training.housingjigsaw.co.uk/customers/customer/${this.state.customer.jigsawId}`} target="blank">View Details</a></li>
            <li><a href={`https://training.housingjigsaw.co.uk/prah/case/${this.state.customer.jigsawCaseId}/php`}>View PHP</a></li>
          </ul>
        </div>
        <h2>Status: {this.state.customer.housingNeedsStatus}</h2>
      </div>)
    }else{
      return null;
    }
  }

  tenancyDetails(){
    if(this.state.customer.tenancyStart){
      return (<div className="tenancyDetails">
        <h2>Tenancy Details</h2>
        <table className="details">
          <tbody>
            <tr>
              <td>Tenancy Start:</td>
              <td>{this.state.customer.tenancyStart}</td>
            </tr>
            <tr>
              <td>Tenancy End:</td>
              <td>{this.state.customer.tenancyEnd}</td>
            </tr>
          </tbody>
        </table>
        <h2>Household</h2>
        {this.household()}
      </div>)
    }else{
      return null;
    }
  }

  render(){
    if(this.state.fetching){
      return(
        <div className="detailsPage">
          <h1>Fetching customer record</h1>
        </div>
      )
    }
    return(
      <div className="detailsPage">
        <div className="sideDetails">
          <div className="personDetails">
            <h2>{this.state.customer.title} {this.state.customer.firstName} {this.state.customer.lastName}</h2>
            <p className="phone">{this.state.customer.phone}</p>
            <p className="email"><a href="mailto:{this.state.customer.email}">{this.state.customer.email}</a></p>
            <table className="details">
              <tbody>
                <tr>
                  <td>NI No:</td>
                  <td>{this.state.customer.nino}</td>
                </tr>
                <tr>
                  <td>UHT ID:</td>
                  <td>{this.state.customer.uhtId}</td>
                </tr>
                <tr>
                  <td>UHW ID:</td>
                  <td>{this.state.customer.uhwId}</td>
                </tr>
                <tr>
                  <td>Claim ID:</td>
                  <td>{this.state.customer.benefitClaimId}</td>
                </tr>
                <tr>
                  <td>Jigsaw ID:</td>
                  <td>{this.state.customer.jigsawId}</td>
                </tr>
                <tr>
                  <td>Address:</td>
                  <td>{this.address()}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {this.tenancyDetails()}
        <div className="mainDetails">
          {this.housingNeedsStatus()}
          <div className="otherInfo">
            <div className="infoBox">
              <h3>Rent Information</h3>
              <p><strong>Account Ref:</strong> {this.state.customer.rentAccountRef}</p>
              <p><strong>Balance:</strong> {this.formatCurrency(this.state.customer.rentAccountBalance)}</p>
              <a href="http://hackney.gov.uk">Show Details</a>
            </div>
            <div className="infoBox">
              <h3>Benefit Information</h3>
              <p><strong>Status:</strong> {this.state.customer.benefitStatus}</p>
              <a href="http://hackney.gov.uk">Show Details</a>
            </div>
            <div className="infoBox">
              <h3>Housing Register</h3>
              <p><strong>Bidding No:</strong> {this.state.customer.housingRegister.biddingNo}</p>
              <p><strong>Band:</strong> {this.state.customer.housingRegister.band}</p>
              <a href="http://hackney.gov.uk">Show Details</a>
            </div>
          </div>
          <div className="activity">
            <h2>Activity</h2>
            <Notes notes={this.state.notes}/>
          </div>
        </div>
      </div>
    );
  }
}
