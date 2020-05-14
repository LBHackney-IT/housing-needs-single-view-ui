const getFlagValue = featureName => {
  const name = `REACT_APP_FEATURE_${featureName.toUpperCase()}`;
  return process.env[name] === 'true';
};

const FeatureZone = ({ featureName, children }) => {
  if (!getFlagValue(featureName)) {
    return null;
  }

  return children;
};

export default FeatureZone;
