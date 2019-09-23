import React, {Component} from 'react';
import './index.css';


export default class ResultRow extends Component {

  checkbox = () => {
    if( this.props.selectable){
      return <td><input type="checkbox"></input></td>
    }
  }

  formatAddress = (address) => {
    return address ? address.split("\n").map(el => el.trim()).join(', ') : ''
  }

  render(){
    return(
      <tr>
        {this.checkbox()}
        <td>{this.props.result.firstName}</td>
        <td>{this.props.result.lastName}</td>
        <td>{this.props.result.dob}</td>
        <td>{this.props.result.nino}</td>
        <td>{this.formatAddress(this.props.result.address)}</td>
      </tr>
    );
  }
}
