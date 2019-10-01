import React, {Component} from 'react';
import './index.css';
import FetchCustomerNotes from '../../Gateways/FetchCustomerNotes';
import Notes from '../../Components/Notes';


export default class DetailsPage extends Component {

  constructor(props) {
    super(props);
    
    this.state = {notes: []};
  }
  componentDidMount(){
    FetchCustomerNotes(this.props.customer.id, (err, response) => {
      this.setState({notes: response.notes})
    })
  }

  address(){
    if(this.props.customer.address){
      return <span dangerouslySetInnerHTML={{__html: this.props.customer.address.split("\n").join("<br />")}}></span>
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
    if(this.props.customer.household.length > 0){
      return <ul>
        {this.props.customer.household.map((person, key) => {
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
    if(this.props.customer.jigsawId){
      return (<div className="housingNeedsStatus">
        <div className="externalLinks">
          <ul>
            <li><a href={`https://training.housingjigsaw.co.uk/customers/customer/${this.props.customer.jigsawId}`} target="blank">View Details</a></li>
            <li><a href="https://training.housingjigsaw.co.uk/">View PHP</a></li>
          </ul>
        </div>
        <h2>Status: {this.props.customer.housingNeedsStatus}</h2>
      </div>)
    }else{
      return null;
    }
  }

  render(){
    return(
      <div className="detailsPage">
        <div className="sideDetails">
          <div className="personDetails">
            <h2>{this.props.customer.title} {this.props.customer.firstName} {this.props.customer.lastName}</h2>
            <p className="phone">{this.props.customer.phone}</p>
            <p className="email"><a href="mailto:{this.props.customer.email}">{this.props.customer.email}</a></p>
            <table className="details">
              <tbody>
                <tr>
                  <td>NI No:</td>
                  <td>{this.props.customer.nino}</td>
                </tr>
                <tr>
                  <td>UHT ID:</td>
                  <td>{this.props.customer.uhtId}</td>
                </tr>
                <tr>
                  <td>UHW ID:</td>
                  <td>{this.props.customer.uhwId}</td>
                </tr>
                <tr>
                  <td>Claim ID:</td>
                  <td>{this.props.customer.benefitClaimId}</td>
                </tr>
                <tr>
                  <td>Jigsaw ID:</td>
                  <td>{this.props.customer.jigsawId}</td>
                </tr>
                <tr>
                  <td>Address:</td>
                  <td>{this.address()}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="tenancyDetails">
            <h2>Tenancy Details</h2>
            <table className="details">
              <tbody>
                <tr>
                  <td>Tenancy Start:</td>
                  <td>{this.props.customer.tenancyStart}</td>
                </tr>
                <tr>
                  <td>Tenancy End:</td>
                  <td>{this.props.customer.tenancyEnd}</td>
                </tr>
              </tbody>
            </table>
            <h2>Household</h2>
            {this.household()}
          </div>
        </div>
        <div className="mainDetails">
          {this.housingNeedsStatus()}
          <div className="otherInfo">
            <div className="infoBox">
              <h3>Rent Information</h3>
              <p><strong>Account Ref:</strong> {this.props.customer.rentAccountRef}</p>
              <p><strong>Balance:</strong> {this.formatCurrency(this.props.customer.rentAccountBalance)}</p>
              <a href="http://hackney.gov.uk">Show Details</a>
            </div>
            <div className="infoBox">
              <h3>Benefit Information</h3>
              <p><strong>Status:</strong> {this.props.customer.benefitStatus}</p>
              <a href="http://hackney.gov.uk">Show Details</a>
            </div>
            <div className="infoBox">
              <h3>Housing Register</h3>
              <p><strong>Bidding No:</strong> {this.props.customer.housingRegister.biddingNo}</p>
              <p><strong>Band:</strong> {this.props.customer.housingRegister.band}</p>
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
