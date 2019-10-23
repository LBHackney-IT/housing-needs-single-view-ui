import React, {Component} from 'react';

export default class CaseInformation extends Component {
  render() {

    if(!this.props.customer.jigsawId) {
      return <></>
    }

    return (
      
      <div className="quick-access__item">
        <h3>
         Case Information
        </h3>
    
        <table>
        <tbody>
          <tr>
            <td>Stage:</td>
            <td>{this.props.customer.housingNeedsStatus}</td>
          </tr>
  
        </tbody>
      </table>
      <div>
        <ul>
          <li><a href={`https://training.housingjigsaw.co.uk/prah/case/${this.props.customer.jigsawCaseId}/php`}>Link to PHP</a></li>
          <li><a href={`https://training.housingjigsaw.co.uk/customers/customer/${this.props.customer.jigsawId}`}>More details</a></li>
        </ul>
      </div>
       

      </div>

    );
  }
}