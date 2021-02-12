// const path = require('path');

// module.exports = {
//     entry: {
//         main: './src/index.js',
//         bootstrap: './src/bootstrap.js'
//     },
//     output: {
//         path: path.resolve(__dirname, 'public'),
//         filename: "[name].js",
//         sourceMapFilename: "[name].js.map"
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.(scss)$/,
//                 use: [
//                     {
//                         // Adds CSS to the DOM by injecting a `<style>` tag
//                         loader: 'style-loader'
//                     },
//                     {
//                         // Interprets `@import` and `url()` like `import/require()` and will resolve them
//                         loader: 'css-loader'
//                     },
//                     {
//                         // Loader for webpack to process CSS with PostCSS
//                         loader: 'postcss-loader',
//                         options: {
//                             plugins: function () {
//                                 return [
//                                     require('precss'),
//                                     require('autoprefixer')
//                                 ];
//                             }
//                         }
//                     },
//                     {
//                         // Loads a SASS/SCSS file and compiles it to CSS
//                         loader: 'sass-loader'
//                     }
//                 ]
//             },
//             // {
//             //     test: /\.(scss)$/,
//             //     use: [
//             //         {
//             //             // Adds CSS to the DOM by injecting a `<style>` tag
//             //             loader: 'style-loader'
//             //         },
//             //         {
//             //             // Interprets `@import` and `url()` like `import/require()` and will resolve them
//             //             loader: 'css-loader'
//             //         },
//             //         {
//             //             // Loader for webpack to process CSS with PostCSS
//             //             loader: 'postcss-loader',
//             //             options: {
//             //                 plugins: function () {
//             //                     return [
//             //                         require('autoprefixer')
//             //                     ];
//             //                 }
//             //             }
//             //         },
//             //         {
//             //             // Loads a SASS/SCSS file and compiles it to CSS
//             //             loader: 'sass-loader'
//             //         }
//             //     ]
//             // }
//         ]
//     },
//     devtool: 'source-map'
// };