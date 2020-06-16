import Cookies from 'js-cookie';

const cookieName = 'singleViewFeatures';

const getFeatureFlags = () => {
  try {
    const existingFeatures = Cookies.get(cookieName);
    return JSON.parse(existingFeatures) ?? [];
  } catch {
    return [];
  }
};

const setFeatureFlag = featureKey => {
  if (hasFeatureFlag(featureKey)) return;
  const features = getFeatureFlags();
  features.push(featureKey);
  Cookies.set(cookieName, features, { expires: 365 });
};

const hasFeatureFlag = featureKey => {
  const features = getFeatureFlags();
  return features.includes(featureKey);
};

export { hasFeatureFlag, setFeatureFlag };
