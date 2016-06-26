/* eslint no-console: 0 */

const autoprefixer = require('autoprefixer');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

const PROD = process.env.NODE_ENV === 'production';

const sassLoaders = [
	'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
	'postcss-loader',
	`sass-loader?indentedSyntax=sass&includePaths[]=${path.join(__dirname, 'source')}`
];

const config = {
	devtool: PROD ? 'hidden-source-map' : 'eval-source-map',
	entry: {
		index: [path.join(__dirname, 'source', 'index')]
	},
	output: {
		path: path.join(__dirname, 'public'),
		filename: '[name].js'
	},
	module: {
		loaders: [{
			test: /\.(js|jsx)$/,
			exclude: /node_modules/,
			loader: 'babel'
		}, {
			test: /\.(sass|scss)$/,
			loader: ExtractTextWebpackPlugin.extract('style-loader', sassLoaders.join('!'))
		}, {
			test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
			loader: 'url-loader?limit=10000&mimetype=application/font-woff'
		}, {
			test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
			loader: 'file-loader'
		}],
		preLoaders: [{
			test: /\.js$/,
			loader: 'eslint-loader',
			exclude: [/vendor/]
		}]
	},
	plugins: [
		new ExtractTextWebpackPlugin('[name].css')
	],
	postcss: [
		autoprefixer({
			browsers: ['last 2 versions']
		})
	],
	resolve: {
		extensions: ['', '.js', '.jsx', '.sass', '.scss'],
		modulesDirectories: ['node_modules'],
		fallback: path.join(__dirname, 'node_modules')
	},
	devServer: {
		contentBase: './public',
		colors: true,
		historyApiFallback: true,
		inline: true
	}
};

if (PROD) {
	config.devtool = false;
	config.plugins = [
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.optimize.UglifyJsPlugin({ comments: false }),
		new webpack.DefinePlugin({
			'process.env': { NODE_ENV: JSON.stringify('production') }
		})
	];
}

module.exports = config;
