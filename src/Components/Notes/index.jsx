import React, {Component} from 'react';
import './index.css';
import Note from '../Note';


export default class Notes extends Component {

  render(){
    if(this.props.notes.length > 0){
      return <table className="notes">
        <tbody>
        {this.props.notes.map((note, id) => {
          return <Note key={id} note={note}/>
        })}
        </tbody>
      </table>
    }else{
      return null;
    }
  }
}
