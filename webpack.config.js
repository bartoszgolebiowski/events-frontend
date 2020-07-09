const webpackMerge = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");
const webpack = require("webpack");

module.exports = (webpackConfigEnv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "events",
    projectName: "dashboard",
    webpackConfigEnv,
  });

  return webpackMerge.smart(defaultConfig, {
    plugins: [
      new webpack.DefinePlugin({
        "process.env": {
          API_SERVER: JSON.stringify(webpackConfigEnv.API_SERVER),
        },
      }),
    ],
  });
};
