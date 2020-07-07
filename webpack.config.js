const webpackMerge = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

module.exports = (webpackConfigEnv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "events",
    projectName: "dashboard",
    webpackConfigEnv,
  });

  return webpackMerge.smart(defaultConfig, {});
};
