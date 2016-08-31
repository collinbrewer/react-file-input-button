'use strict';

let path = require('path');
let baseConfig = require('./base');
let defaultSettings = require('./defaults');

let config = Object.assign({}, baseConfig, {
	entry: './src/ReactFileInputButton.js',
	output: {
		path: path.join(__dirname, '/../lib'),
		filename: 'ReactFileInputButton.js',
		libraryTarget: 'commonjs2'
	},
	// cache: true,
	devtool: 'source-map',
	plugins: [],
	module: defaultSettings.getDefaultModules()
});

// Add needed loaders to the defaults here
config.module.loaders = [{
	test: /\.(js|jsx)$/,
	loader: 'babel',
	exclude: /node_modules/
}];

module.exports = config;
