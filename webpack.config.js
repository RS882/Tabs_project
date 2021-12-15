'use strict';


const path = require('path');

module.exports = {
	entry: './#src/js/script.js',
	output: {
		path: path.resolve(__dirname, '#src/js/'),
		filename: 'bundle.js',
	},

	watch: true,

	devtool: "source-map",

	module: {}
};