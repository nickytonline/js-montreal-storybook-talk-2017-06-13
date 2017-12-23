const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  devtool: "source-map",
  entry: ["webpack-hot-middleware/client", "babel-polyfill", "./index"],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      hash: true,
      filename: 'index.html',
      inject: 'body'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.md$/,
        loader: "html-loader!markdown-loader?gfm=false"
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ["react", "es2015"],
          env: {
            development: {
              plugins: [
                [
                  "react-transform",
                  {
                    transforms: [
                      {
                        transform: "react-transform-hmr",
                        imports: ["react"],
                        locals: ["module"]
                      }
                    ]
                  }
                ]
              ]
            }
          }
        }
      },
      {
        test: /\.css$/,
        loaders: ["style", "raw"],
        include: __dirname
      },
      {
        test: /\.svg$/,
        loader: "url?limit=10000&mimetype=image/svg+xml",
        include: path.join(__dirname, "presentation/assets")
      },
      {
        test: /\.png$/,
        loader: "url-loader?mimetype=image/png",
        include: path.join(__dirname, "presentation/assets")
      },
      {
        test: /\.gif$/,
        loader: "url-loader?mimetype=image/gif",
        include: path.join(__dirname, "presentation/assets")
      },
      {
        test: /\.jpg$/,
        loader: "url-loader?mimetype=image/jpg",
        include: path.join(__dirname, "presentation/assets")
      }
    ]
  }
};
