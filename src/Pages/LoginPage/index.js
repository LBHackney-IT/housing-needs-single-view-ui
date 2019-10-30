import React, { Component } from 'react';

export default class LoginPage extends Component {
  render() {
    const redirect_uri = `//${window.location.host}/callback`;

    return (
      <div className="loginPage">
        <h1>Please log in</h1>
        <a
          href={`https://auth.hackney.gov.uk/auth?redirect_uri=${redirect_uri}`}
        >
          Log in with Google
        </a>
      </div>
    );
  }
}
