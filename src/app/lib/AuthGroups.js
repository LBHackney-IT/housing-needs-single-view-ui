import allAuthGroups from './auth-groups.json';

export const getAuthGroups = () =>
  Object.values(allAuthGroups[process.env.REACT_APP_ENV]);

export const getGroupName = groupKey =>
  allAuthGroups[process.env.REACT_APP_ENV][groupKey];
