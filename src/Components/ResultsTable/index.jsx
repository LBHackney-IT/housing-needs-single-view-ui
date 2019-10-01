import React, {Component} from 'react';
import ResultRow from '../ResultRow';
import './index.css';


export default class ResultsTable extends Component {

  constructor(props) {
    super(props);
    this.state = {selected: {}};
  }

  rowSelected = (row) => {
    this.setState(state => {
      let selected = state.selected;
      selected[row.source] = selected[row.source] || {}
      selected[row.source][row.id] = row;
      this.props.onChange && this.props.onChange(selected)
      return {selected: selected}
    });
  }

  rowDeselected = (row) => {
    this.setState(state => {
      let selected = state.selected;
      delete selected[row.source][row.id];
      this.props.onChange && this.props.onChange(selected)
      return {selected: selected}
    });
  }

  render(){
    if(Object.keys(this.props.results).length > 0){
      return(
        <table className="results">
          <thead>
            <tr>
              { this.props.selectable ? <td></td> : null }
              <td key="first">First Name</td>
              <td key="last">Last Name</td>
              <td key="dob">Date of Birth</td>
              <td key="nino">National Insurance No</td>  
              <td key="address">Address</td>
            </tr>
          </thead>
          <tbody>
            { this.props.results.map( res => {
              return <ResultRow key={res.id} result={res} selectable={this.props.selectable} onSelected={this.rowSelected} onDeselected={this.rowDeselected}/>
            }) }
          </tbody>
        </table>
      );
    }else{
      return null;
    }
  }
}
