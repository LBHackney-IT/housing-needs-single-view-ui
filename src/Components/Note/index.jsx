import React, {Component} from 'react';
import './index.css';
var moment = require('moment');

export default class Note extends Component {
  formatDate(date){
    return moment(date).format("DD/MM/YYYY hh:mm:ss");
  }
  render(){
    return (<tr>
      <td key="date">{this.formatDate(this.props.note.date)}</td>
      <td key="sys" className="system">{this.props.note.system}</td>
      <td key="text">{this.props.note.text}</td>
    </tr>)
  }
}
