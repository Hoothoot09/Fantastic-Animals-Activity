const path = require("path");

module.exports = {
  entry: "./js/script.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  resolve: {
    fallback: {
      util: require.resolve("util/"),
      path: require.resolve("path-browserify"),
      crypto: require.resolve("crypto-browserify"),
      zlib: require.resolve("browserify-zlib"),
      stream: require.resolve("stream-browserify"),
      buffer: require.resolve("buffer/"),
      https: require.resolve("https-browserify"),
      http: require.resolve("stream-http"),
      url: require.resolve("url/"),
      vm: require.resolve("vm-browserify"),
      querystring: require.resolve("querystring-es3"),
      os: require.resolve("os-browserify/browser"),
      constants: require.resolve("constants-browserify"),
      assert: require.resolve("assert/"),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["@babel/plugin-transform-runtime"],
          },
        },
      },
    ],
  },
};
