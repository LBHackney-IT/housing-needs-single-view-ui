import React, { Component } from "react";
import {
  FetchCustomerNotes,
  FetchCustomer,
  FetchCustomerDocuments
} from "../../Gateways";
import {
  ContactDetails,
  Activity,
  PersonalDetails,
  QuickAccess,
  SystemIds,
  Team,
  TenancyDetails
} from "../../Components/Details";
import moment from "moment";

export default class DetailsPage extends Component {
  constructor(props) {
    super(props);

    this.state = { notes: [], fetching: true };
  }

  componentDidMount() {
    let notesAndDocs = [];
    FetchCustomer(this.props.match.params.id)
      .then(result => {
        this.setState({ customer: result.customer });
        return FetchCustomerNotes(this.state.customer.id);
      })
      .then(result => {
        notesAndDocs = notesAndDocs.concat(result.notes);
        return FetchCustomerDocuments(this.state.customer.id);
      })
      .then(result => {
        notesAndDocs = notesAndDocs.concat(result.documents);
        notesAndDocs.sort((a, b) => moment(b.date) - moment(a.date));
        this.setState({ notes: notesAndDocs, fetching: false });
      })
      .catch(err => console.log(err));
  }

  // tenancyDetails() {
  //   if (this.state.customer.tenancyStart) {
  //     return (
  //       <div className="tenancyDetails">
  //         <h2>Tenancy Details</h2>
  //         <table className="details">
  //           <tbody>
  //             <tr>
  //               <td>Tenancy Start:</td>
  //               <td>{this.state.customer.tenancyStart}</td>
  //             </tr>
  //             <tr>
  //               <td>Tenancy End:</td>
  //               <td>{this.state.customer.tenancyEnd}</td>
  //             </tr>
  //           </tbody>
  //         </table>
  //         <h2>Household</h2>
  //         {this.household()}
  //       </div>
  //     );
  //   } else {
  //     return null;
  //   }
  // }

  render() {
    if (this.state.fetching) {
      return (
        <div className="lbh-container">
          <h1>Fetching customer record...</h1>
        </div>
      );
    }
    return (
      <div className="lbh-container row details">
        <div className="details__left-column">
          <PersonalDetails customer={this.state.customer} />
          <SystemIds customer={this.state.customer} />
          <ContactDetails customer={this.state.customer} />
          <TenancyDetails customer={this.state.customer} />
          <Team />
        </div>
        <div className="details__right-column">
          <QuickAccess customer={this.state.customer} />
          <Activity notes={this.state.notes} />
        </div>
      </div>
    );
  }
}
