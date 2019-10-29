import React, { Component } from 'react';

export default class SelectPage extends Component {
  render() {
    const redirect_uri = `${window.location.protocol}//${window.location.host}/callback&token_in_query=true`;

    return (
      <div className="loginPage">
        <h1>Please log in</h1>
        <a
          href={`https://lbh-google-auth.herokuapp.com/auth?redirect_uri=${redirect_uri}`}
        >
          Log in with Google
        </a>
      </div>
    );
  }
}
