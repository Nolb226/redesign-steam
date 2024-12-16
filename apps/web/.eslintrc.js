/** @type {import("eslint").Linter.Config} */
module.exports = {
	root: true,
	extends: ['@redesign-steam/eslint-config/next.js'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: true,
	},
};
