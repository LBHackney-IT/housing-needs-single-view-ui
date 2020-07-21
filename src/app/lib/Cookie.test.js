jest.mock('js-cookie');
jest.mock('jsonwebtoken');
jest.mock('./groups.json', () => ({
  production: ['a-valid-prod-group'],
  dev: ['a-valid-dev-group']
}));

import { isLoggedIn } from './Cookie';
import Cookies from 'js-cookie';
import jwt from 'jsonwebtoken';

describe('Cookie', () => {
  describe('isLoggedIn', () => {
    it('returns true if users group is in the allowed groups', () => {
      process.env.REACT_APP_ENV = 'production';
      Cookies.get.mockReturnValue(true);
      jwt.decode.mockReturnValue({ groups: ['a-valid-prod-group'] });
      expect(isLoggedIn()).toBe(true);
    });

    it('returns false if users group is not in the allowed groups', () => {
      process.env.REACT_APP_ENV = 'production';
      Cookies.get.mockReturnValue(true);
      jwt.decode.mockReturnValue({ groups: ['a-invalid-prod-group'] });
      expect(isLoggedIn()).toBe(false);
    });

    it('returns false if no hackney token', () => {
      process.env.REACT_APP_ENV = 'production';
      Cookies.get.mockReturnValue(undefined);
      expect(isLoggedIn()).toBe(false);
    });

    it('returns false if no hackney token', () => {
      process.env.REACT_APP_ENV = 'production';
      Cookies.get.mockReturnValue(undefined);
      expect(isLoggedIn()).toBe(false);
    });

    it('can use groups in different environments', () => {
      process.env.REACT_APP_ENV = 'dev';
      Cookies.get.mockReturnValue(true);
      jwt.decode.mockReturnValue({ groups: ['a-valid-dev-group'] });
      expect(isLoggedIn()).toBe(true);
    });
  });
});
