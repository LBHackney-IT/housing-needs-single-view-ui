import Cookies from 'js-cookie';
import jwt from 'jsonwebtoken';

export const isLoggedIn = function() {
  const hackneyToken = Cookies.get('hackneyToken');
  if (!hackneyToken) return false;

  const payload = jwt.decode(hackneyToken);
  return (
    payload.groups &&
    payload.groups.indexOf('housingneeds-singleview-beta') > -1
  );
};

export const saveToken = function(token) {
  Cookies.set('hackneyToken', token, { expires: 7 });
};

export const hackneyToken = function() {
  return Cookies.get('hackneyToken');
};
