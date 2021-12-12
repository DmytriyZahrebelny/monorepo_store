const nrwlConfig = require('@nrwl/react/plugins/webpack.js');

module.exports = (config) => {
  nrwlConfig(config);

  config.module.rules.forEach(function addRules(data) {
    if (data.oneOf) {
      data.oneOf.shift({
        loader: require.resolve('file-loader'),
        exclude: [/\.(js|mjs|jsx|ts|tsx|gql|graphql)$/, /\.html$/, /\.json$/],
        options: {
          name: 'static/media/[name].[hash:8].[ext]',
        },
      });
    }
  });

  config.module.rules.push({
    test: /\.(graphql|gql)$/,
    exclude: /node_modules/,
    loader: 'graphql-tag/loader',
  });

  return config;
};
