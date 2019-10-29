import React, { Component } from 'react';

export default class SelectPage extends Component {
  render() {
    return (
      <div className="loginPage">
        <h1>Please log in</h1>
        <a
          href={`https://lbh-google-auth.herokuapp.com/auth?redirect_uri=${process.env.REACT_APP_HN_API_URL}/callback&token_in_query=true`}
        >
          Log in with Google
        </a>
      </div>
    );
  }
}
