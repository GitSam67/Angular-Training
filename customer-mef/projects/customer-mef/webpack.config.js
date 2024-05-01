const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  name: 'customer-mef',
  exposes: {
    './Module': './projects/customer-mef/src/app/customer/customer.module.ts',
  },
  shared: {
    ...shareAll({
        singleton: true,
        strictVersion: true,
        requiredVersion: 'auto'
      }),
  },
});
