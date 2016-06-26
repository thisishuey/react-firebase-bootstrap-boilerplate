/* eslint no-console: 0 */

const autoprefixer = require('autoprefixer');
const path = require('path');
const webpack = require('webpack');

const PROD = process.env.NODE_ENV === 'production';

const sassLoaders = [
	'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
	'postcss',
	'sass'
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
			loaders: ['style', sassLoaders.join('!')]
		}, {
			test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
			loader: 'url?limit=10000&mimetype=application/font-woff'
		}, {
			test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
			loader: 'file'
		}],
		preLoaders: [{
			test: /\.js$/,
			loader: 'eslint'
		}]
	},
	sassLoader: {
		includePaths: [path.resolve(__dirname, 'source')],
		indentedSyntax: 'sass'
	},
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
