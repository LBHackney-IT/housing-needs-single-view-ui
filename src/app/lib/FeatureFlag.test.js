import Cookies from 'js-cookie';
jest.mock('js-cookie');
import { hasFeatureFlag, setFeatureFlag } from './FeatureFlag';

describe('FeatureFlag', () => {
  describe('setFeatureFlag', () => {
    it('can set a feature flag', () => {
      setFeatureFlag('my-new-feature');
      expect(Cookies.set).toHaveBeenCalledWith(
        'singleViewFeatures',
        ['my-new-feature'],
        { expires: 365 }
      );
    });

    it('can set a feature flag when there are other flags', () => {
      Cookies.get.mockImplementation(() => '["my-new-feature"]');
      setFeatureFlag('my-newer-feature');
      expect(Cookies.get).toHaveBeenCalled();
      expect(Cookies.set).toHaveBeenCalledWith(
        'singleViewFeatures',
        ['my-new-feature', 'my-newer-feature'],
        { expires: 365 }
      );
    });

    it('does not create duplicate flags', () => {
      Cookies.get.mockImplementation(() => '["my-new-feature"]');
      setFeatureFlag('my-new-feature');
      expect(Cookies.get).toHaveBeenCalled();
      expect(Cookies.set).not.toHaveBeenCalled();
    });
  });

  describe('hasFeatureFlag', () => {
    it('returns true if feature flag exists', () => {
      Cookies.get.mockImplementation(() => '["my-new-feature"]');
      expect(hasFeatureFlag('my-new-feature')).toBe(true);
    });

    it('returns false if feature flag does not exists', () => {
      Cookies.get.mockImplementation(() => '[]');
      expect(hasFeatureFlag('my-new-feature')).toBe(false);
    });

    it('returns false if cookie is null', () => {
      Cookies.get.mockImplementation(() => null);
      expect(hasFeatureFlag('my-new-feature')).toBe(false);
    });

    it('returns false if cookie is malformed', () => {
      Cookies.get.mockImplementation(() => 'xxx');
      expect(hasFeatureFlag('my-new-feature')).toBe(false);
    });
  });
});
