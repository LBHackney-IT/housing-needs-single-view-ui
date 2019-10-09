import React, {Component} from 'react';
//import './index.css';

export default class SelectPage extends Component {
  render(){
    return(
      <div className="loginPage">
        <h1>Please log in</h1>
        <a href="https://lbh-google-auth.herokuapp.com/auth?redirect_uri=http://localhost:3000/callback&token_in_query=true">Log in with Google</a>
      </div>
    );
  }
}
