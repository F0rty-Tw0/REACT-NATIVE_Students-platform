module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module:react-native-dotenv',
        {
          moduleName: '@env',
          path: '.env',
          blacklist: null,
          whitelist: null,
          safe: false,
          allowUndefined: true,
        },
      ],
      ['inline-react-svg'],
      [
        require.resolve('babel-plugin-module-resolver'),
        {
          root: '.',
          alias: {
            '@app': './app/src',
            '@libs': './app/libs',
            '@images': './app/assets/images',
            '@styles': './lib/shared/styles',
          },
        },
      ],
    ],
  };
};
