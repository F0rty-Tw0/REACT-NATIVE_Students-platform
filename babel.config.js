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
      [
        require.resolve('babel-plugin-module-resolver'),
        {
          root: '.',
          alias: {
            '@/components': './components',
            '@/constants': './constants',
            '@/hooks': './hooks',
            '@/models': './models',
            '@/navigation': './navigation',
            '@/redux': './redux',
            '@/screens': './screens',
            '@/types': './types',
          },
        },
      ],
    ],
  };
};
