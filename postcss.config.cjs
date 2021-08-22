const cssImport = require("postcss-import");
const simpleExtend = require("postcss-simple-extend");
const cssnano = require("cssnano");

const useMinify = process.env.CSS_MINIFY === "true";

module.exports = (config) => {
  return {
    plugins: [
      cssImport,
      simpleExtend,
      useMinify &&
        cssnano({
          preset: "default",
        }),
    ],
  };
};
