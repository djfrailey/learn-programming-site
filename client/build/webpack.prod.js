'use strict'
process.env.NODE_ENV = 'production'

const exec = require('child_process').execSync
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const ProgressPlugin = require('webpack/lib/ProgressPlugin')
const base = require('./webpack.base')
const pkg = require('../../package')
const _ = require('./utils')
const config = require('./config')
const fs = require('fs-extra')

// Remove dist directory
fs.removeSync('./dist/')

// Set source map
base.devtool = 'source-map'

// a white list to add dependencies to vendor chunk
base.entry.vendor = config.vendor
// use hash filename to support long-term caching
base.output.filename = '[name].[chunkhash:8].js'
// add webpack plugins
base.plugins.push(
	new ProgressPlugin(),
	new ExtractTextPlugin('styles.[contenthash:8].css'),
	new webpack.DefinePlugin({
		'process.env.NODE_ENV': JSON.stringify('production')
	}),
	new webpack.optimize.UglifyJsPlugin({
		sourceMap: true,
		compress: {
			warnings: false
		},
		output: {
			comments: false
		}
	}),
	// extract vendor chunks
	new webpack.optimize.CommonsChunkPlugin({
		name: 'vendor',
		filename: 'vendor.[chunkhash:8].js'
	})
)

// extract css in standalone .css files
base.module.loaders.push({
	test: /\.css$/,
	loader: ExtractTextPlugin.extract({
		use: [_.cssLoader, 'postcss-loader'],
		fallback: 'style-loader'
	})
})

module.exports = base
