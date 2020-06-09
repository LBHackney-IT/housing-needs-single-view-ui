import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLoggedIn } from '../../lib/Cookie';
import { setFeatureFlag } from '../../lib/FeatureFlag';

const PrivateRoute = ({ component: Component, ...rest }) => {
  if (isLoggedIn() === true) {
    if (window.location.hash) setFeatureFlag(window.location.hash.slice(1));
    return <Route {...rest} render={props => <Component {...props} />} />;
  }
  return <Route {...rest} render={() => <Redirect to="/login" />} />;
};

export default PrivateRoute;
