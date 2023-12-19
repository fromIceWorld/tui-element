const WebpackAssetsManifest = require("webpack-assets-manifest");
module.exports = {
  module: {
    rules: [
      {
        test: /\.(eot|svg|ttf|woff|woff2)/,
        loader: "url-loader",
        options: {
          name: "store/tui/[name].[ext]?[hash]",
          limit: 1000,
        },
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: "url-loader",
        options: {
          name: "img/[name].[hash]",
          limit: 1000,
          outputPath: "img/",
        },
      },
    ],
  },
  optimization: {
    runtimeChunk: false,
  },
  plugins: [new WebpackAssetsManifest()],
};
