const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const VueLoaderPlugin = require("vue-loader/lib/plugin");

let mainJS = {
	entry: {"main.js": "./src/js/main.js"},
	output: {
		path: path.resolve(__dirname, "./static"),
		filename: "js/bundle.main.[hash].js",
		publicPath: "static/"
	},
	resolve: {
		extensions: ["*", ".js", ".vue", ".scss", ".css"],
		modules: ["node_modules", "js"]
	},
	optimization: {
		minimizer: [
			new TerserPlugin({terserOptions: {output: {comments: false}}})
		]
	},
	devtool: "source-map",
	plugins: [
		new CleanWebpackPlugin({dry: false, cleanOnceBeforeBuildPatterns: ["js/*"], cleanAfterEveryBuildPatterns: ["js/*"]}),
		// new BundleAnalyzerPlugin(),
		new HtmlWebpackPlugin({
			template: "./src/index.html",
			filename: "../index.html"
		}),
		new VueLoaderPlugin()
	],
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					"vue-style-loader", "css-loader", "sass-loader",
					{
						loader: "sass-resources-loader",
						options: {
							resources: "./src/scss/variables.scss"
						},
					}]
			},
			{
				test: /\.css$/,
				use: ["vue-style-loader", "css-loader"]
			},
			{
				test: /\.vue$/,
				exclude: /node_modules/,
				use: ["vue-loader"]
			}
		]
	}
};

module.exports = [
	mainJS
];