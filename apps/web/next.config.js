const path = require('path');

module.exports = {
	reactStrictMode: true,
	transpilePackages: ['@redesign-steam/ui'],
	output: 'standalone',
	experimental: {
		outputFileTracingRoot: path.join(__dirname, '../../'),
	},
};
