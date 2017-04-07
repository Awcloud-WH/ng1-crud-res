let path = require('path')
let webpack = require('webpack')
let HTMLPlugin = require('html-webpack-plugin')

let config = {
	context: path.join(__dirname, 'src'),
	entry: {
		index: ['./js/index.js']
	},
	module: {
		rules: [
			{
				loader: 'babel-loader',
				test: /\.jsx?$/,
				exclude: /\bnode_modules\b/,
				options: {
					presets: ['es2015']
				}
			},
			{
				loaders: ['style-loader', 'css-loader', 'less-loader'],
				test: /\.less$/
			},
			{
				loader: 'file-loader',
				test: /\.(?:gif|png|jpg|jpeg|svg|ttf|woff2?|eot)\b/,
				query: {
					name: '/img/[name].[hash].[ext]'
				}
			}
		]
	},
	output: {
		path: path.join(__dirname, 'built'),
		filename: './js/[name].js'
	},
	devtool: 'source-map',
	plugins: [
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery',
			'window.jQuery': 'jquery'
		}),
		new HTMLPlugin({
			filename: 'index.html',
			template: './index.html'
		})
	],
	devServer: {
		port: 23456,
		host: '0.0.0.0',
		contentBase: path.join(__dirname, 'src')
	}
}

module.exports = config
