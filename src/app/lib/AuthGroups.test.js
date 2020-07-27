jest.mock('./auth-groups.json', () => ({
  production: {
    A_GROUP: 'a-valid-prod-group',
    ANOTHER_GROUP: 'another-valid-prod-group'
  },
  dev: { A_GROUP: 'a-valid-dev-group' }
}));

import { getAuthGroups, getGroupName } from './AuthGroups';

describe('AuthGroups', () => {
  describe('getAuthGroups', () => {
    it('can get auth groups for different environments', () => {
      process.env.REACT_APP_ENV = 'dev';
      expect(getAuthGroups()).toEqual(['a-valid-dev-group']);
      process.env.REACT_APP_ENV = 'production';
      expect(getAuthGroups()).toEqual([
        'a-valid-prod-group',
        'another-valid-prod-group'
      ]);
    });
  });

  describe('getGroupName', () => {
    it('returns group name if group exists', () => {
      process.env.REACT_APP_ENV = 'production';
      expect(getGroupName('ANOTHER_GROUP')).toBe('another-valid-prod-group');
    });
    it('returns undefined if group does not exist', () => {
      process.env.REACT_APP_ENV = 'production';
      expect(getGroupName('A_NON_EXISTANT_GROUP')).toBe(undefined);
    });
  });
});
