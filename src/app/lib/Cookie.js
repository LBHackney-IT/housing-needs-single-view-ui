import Cookies from 'js-cookie';
import jwt from 'jsonwebtoken';
import { getAuthGroups, getGroupName } from './AuthGroups';

const isInValidGroup = userGroups => {
  if (!userGroups) return false;
  const authGroups = getAuthGroups();
  return userGroups.filter(g => authGroups.includes(g)).length > 0;
};

export const isLoggedIn = function() {
  const token = hackneyToken();
  if (!token) return false;
  const payload = jwt.decode(token);
  return payload && isInValidGroup(payload.groups);
};

export const username = function() {
  const token = hackneyToken();
  if (!token) return false;
  const decoded = jwt.decode(token);
  return decoded ? decoded.name : '';
};

export const email = function() {
  const token = hackneyToken();
  if (!token) return null;
  const decoded = jwt.decode(token);
  return decoded ? decoded.email : null;
};

export const hackneyToken = function() {
  return Cookies.get('hackneyToken');
};

export const isMemberOfGroups = function(groupKeys) {
  const token = hackneyToken();
  if (!token) return false;
  const payload = jwt.decode(token);
  return (
    payload.groups.filter(g => groupKeys.map(k => getGroupName(k)).includes(g))
      .length > 0
  );
};
