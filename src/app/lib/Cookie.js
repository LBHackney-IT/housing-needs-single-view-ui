import Cookies from 'js-cookie';
import jwt from 'jsonwebtoken';
import allGroups from './groups.json';

const isInValidGroup = function(userGroups) {
  const allowedGroups = allGroups[process.env.REACT_APP_ENV];
  if (!userGroups) return false;
  for (const group of userGroups) {
    if (allowedGroups.indexOf(group) > -1) return true;
  }
  return false;
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
