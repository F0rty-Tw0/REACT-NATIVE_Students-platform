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
            '@': './',
            '@/hooks': './hooks',
            '@/models': './models',
            '@/navigation': './navigation',
            '@/redux': './redux',
            '@/features': './features',
            '@/types': './types',
            '@/images': './assets/images',
          },
        },
      ],
    ],
  };
};
