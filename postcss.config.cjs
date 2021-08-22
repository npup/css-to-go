const cssnano = require("cssnano");
const cssImport = require("postcss-import");

const useMinify = process.env.CSS_MINIFY === "true";

module.exports = (config) => {
  return {
    plugins: [
      cssImport(),
      useMinify &&
        cssnano({
          preset: "default",
        }),
    ],
  };
};
