import Cookies from 'js-cookie';
import jwt from 'jsonwebtoken';
import allGroups from './Groups.json';
const allowedGroups = allGroups[process.env.REACT_APP_ENV];

const isInValidGroup = function(userGroups) {
  if (!userGroups) return false;
  for (var group of userGroups) {
    if (allowedGroups.indexOf(group) > -1) return true;
  }
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
