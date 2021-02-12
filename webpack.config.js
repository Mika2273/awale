const path = require('path');

module.exports = {
    entry: {
        main: './src/index.js',
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: "bundle.js",
    },
    module: {
        rules: [
            {
                test: /\.(scss)$/,
                use: [
                    {
                        // Adds CSS to the DOM by injecting a `<style>` tag
                        loader: 'style-loader'
                    },
                    {
                        // Interprets `@import` and `url()` like `import/require()` and will resolve them
                        loader: 'css-loader'
                    },
                    {
                        // Loader for webpack to process CSS with PostCSS
                        loader: 'postcss-loader',
                        options: {
													postcssOptions: {
														plugins: [
															[
																"autoprefixer",
																{
																	// Options
																},
															],
														],
													},
                        }
                    },
                    {
											loader: 'sass-loader' // compiles Sass to CSS
										}
        				]
    					},
							{
								test: /\.(png|jpe?g|gif)$/i,
								use: [
									{
										loader: 'file-loader',
									},
								],
							},

						]
					}
};