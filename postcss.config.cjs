const tailwindcss = require('tailwindcss');

module.exports = ({ env, cwd }) => {
  const isProduction = env === 'production';
  const plugins = [
    require('postcss-import'),
    require('tailwindcss')(),
    require('autoprefixer')(),
    isProduction
      ? require('cssnano')({
        preset: [
          'default',
          {
            discardComments: {
              removeAll: true,
            },
          },
        ],
      })
      : false,
  ];

  return {
    plugins,
  };
};
