module.exports = api => {
  api.env('test');
  return {
    presets: [
      [
        '@babel/preset-env',
        {
          targets: {
            node: 'current'
          }
        }
      ],
      '@babel/preset-react'
    ]
  };
};
