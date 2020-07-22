import Cookies from 'js-cookie';
import jwt from 'jsonwebtoken';
import allGroups from './groups.json';

const isInValidGroup = userGroups => {
  const allowedGroups = Object.values(allGroups[process.env.REACT_APP_ENV]);
  if (!userGroups) return false;
  return userGroups.filter(g => allowedGroups.includes(g)).length > 0;
};

export const isLoggedIn = function() {
  const hackneyToken = Cookies.get('hackneyToken');
  if (!hackneyToken) return false;
  const payload = jwt.decode(hackneyToken);
  return payload && isInValidGroup(payload.groups);
};

export const username = function() {
  const hackneyToken = Cookies.get('hackneyToken');
  if (!hackneyToken) return false;
  const decoded = jwt.decode(hackneyToken);
  return decoded ? decoded.name : '';
};

export const hackneyToken = function() {
  return Cookies.get('hackneyToken');
};
