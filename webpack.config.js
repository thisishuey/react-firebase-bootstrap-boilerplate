const webpack = require('webpack');

const config = {
	devtool: 'eval-source-map',
	entry: __dirname + '/scripts/App.js',
	output: {
		path: __dirname + '/public',
		filename: 'bundle.js'
	},
	module: {
		loaders: [{
			test: /\.jsx?$/,
			exclude: /node_modules/,
			loader: 'babel',
			query: {
				presets: ['es2015', 'react']
			}
		}]
	},
	devServer: {
		contentBase: './public',
		colors: true,
		historyApiFallback: true,
		inline: true
	}
};

if (process.env.NODE_ENV === 'production') {
	config.devtool = false;
	config.plugins = [
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.optimize.UglifyJsPlugin({ comments: false }),
		new webpack.DefinePlugin({
			'process.env': { NODE_ENV: Json.stringify('production') }
		})
	];
}

module.exports = config;
