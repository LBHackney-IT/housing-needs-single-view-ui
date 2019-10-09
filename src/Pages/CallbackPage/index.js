import React, {Component} from 'react';
import { Redirect } from "react-router-dom";
import { saveToken } from '../../lib/Cookie';

export default class SelectPage extends Component {
  componentDidMount(){
    const params = new URLSearchParams(this.props.location.search);
    let token = params.get('token');
    saveToken(token);
    this.setState({tokenSaved: true})
  }

  render(){
    if(this.state && this.state.tokenSaved){
      return <Redirect to="/" />
    }
    return null;
  }
}
