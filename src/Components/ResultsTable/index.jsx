import React, {Component} from 'react';
import ResultRow from '../ResultRow';
import './index.css';


export default class ResultsTable extends Component {

  render(){
    if(Object.keys(this.props.results).length > 0){
      return(
        <table className="results">
          <thead>
            <tr>
              {  this.props.selectable ? <td></td> : null }
              <td>First Name</td>
              <td>Last Name</td>
              <td>Date of Birth</td>
              <td>National Insurance No</td>  
            </tr>
          </thead>
          <tbody>
            { this.props.results.map( res => {
              return <ResultRow key={res.id} result={res} selectable={this.props.selectable}/>
            }) }
          </tbody>
        </table>
      );
    }else{
      return null;
    }
  }
}
