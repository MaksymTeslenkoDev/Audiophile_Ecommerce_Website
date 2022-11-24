const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("mini-css-extract-plugin");
const path = require("path");
const webpack = require("webpack");
const ESLintPlugin = require("eslint-webpack-plugin");

module.exports = (env = {}) => {
	const { mode = "development" } = env;
	const isProd = mode === "production";
	const isDev = mode === "development";
	const getStyleLoaders = () => {
		return [
			isProd ? MiniCssExtractPlugin.loader : "style-loader",
			"css-loader",
		];
	};

	const getPlugins = () => {
		const plugins = [
			new HtmlWebpackPlugin(
				Object.assign(
					{},
					{
						title: "Paint Online",
						buildTime: new Date().toString(),
						template: "public/index.html",
					},
					isProd
						? {
								minify: {
									removeComments: true,
									collapseWhitespace: true,
									removeRedundantAttributes: true,
									useShortDoctype: true,
									removeEmptyAttributes: true,
									removeStyleLinkTypeAttributes: true,
									keepClosingSlash: true,
									minifyJS: true,
									minifyCSS: true,
									minifyURLs: true,
								},
						  }
						: undefined,
				),
			),
			new ESLintPlugin({ extensions: ["ts", "tsx"] }),
			new webpack.DefinePlugin({
				IS_DEV_MODE: isDev,
				IS_PRODUCTION_MODE: isProd,
				DEV_MODE: mode,
			}),
		];

		if (isProd) {
			plugins.push(
				new MiniCssExtractPlugin({
					filename: "main-[hash:8].css",
				}),
				new OptimizeCSSAssetsPlugin({
					cssProcessorOptions: {
						map: {
							inline: false,
							annotation: true,
						},
					},
				}),
			);
		}

		return plugins;
	};

	const getOptimization = () => {
		if (isProd) {
			return {
				minimize: true,
				minimizer: [
					new TerserPlugin({
						terserOptions: {
							parse: {
								ecma: 8,
							},
							compress: {
								ecma: 5,
								warning: false,
								inline: 2,
							},
							mangle: {
								// Find work around for Safari 10+
								safari10: true,
							},
							output: {
								ecma: 5,
								comments: false,
								ascii__only: true,
							},
						},
						// Use multi-process parallel running to improve the build speed
						parallel: true,
						// Enable file caching
						cache: true,
					}),
				],
			};
		}
		return undefined;
	};

	return {
		mode: isProd ? "production" : isDev && "development",
		devtool: "inline-source-map",
		entry: "./src/index.tsx",
		output: {
			filename: isProd ? "main-[hash:8].js" : undefined,
			path: path.resolve(__dirname, "dist"),
			publicPath: "/",
		},
		module: {
			rules: [
				//Loading TS
				{
					test: /\.tsx?$/,
					loader: "ts-loader",
					include: path.resolve(__dirname, "src"),
					exclude: /node_modules/,
				},
				//Loading BABEl
				{
					test: /\.jsx?$/,
					exclude: /node_modules/,
					include: path.resolve(__dirname, "src"),
					loader: "babel-loader",
				},
				//loading CSS
				{
					test: /\.(css)$/,
					use: getStyleLoaders(),
				},
				//Loading SASS/SCSS
				{
					test: /\.(s[ca]ss)$/,
					use: [...getStyleLoaders(), "sass-loader"],
				},
				//Loading Images
				{
					test: /\.(png|jpg|jpeg|gif|icon)$/,
					type: "asset/resource",
					generator: {
						filename: `assets/[name][hash:8][ext][query]`,
					},
					// esModule: false,
				},
				{
					test: /\.(svg)$/,
					// type: "asset/inline",
					use: [{ loader: "@svgr/webpack", options: { icon: true } }],
					// generator: {
					// 	filename: `assets/[name][hash:8][ext][query]`,
					// },
					// esModule: false,
				},
				//Loading Fonts
				{
					test: /\.(ttf|otf|eot|woff|woff2)$/,
					type: "asset/resource",
					generator: {
						filename: `fonts/[name][ext]`,
					},
				},
			],
		},
		resolve: {
			alias: {
				styles: path.resolve(__dirname, "src/scss"),
				shared: path.resolve(__dirname, "src/shared"),
				assets: path.resolve(__dirname, "public/assets"),
				helpers: path.resolve(__dirname, "src/helpers"),
				types: path.resolve(__dirname, "src/types"),
				// assets: path.resolve(__dirname, "src/assets"),
			},
			modules: ["node_modules"],
			extensions: [".tsx", ".ts", ".js", ".jpg", ".svg", ".scss"],
		},
		plugins: getPlugins(),
		devServer: {
			open: true,
			https: false,
			client: {
				overlay: {
					errors: true,
					warnings: false,
				},
			},
			historyApiFallback: true,
		},

		optimization: getOptimization(),
	};
};
