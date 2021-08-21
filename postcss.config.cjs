const cssnano = require("cssnano");
const cssImport = require("postcss-import");

module.exports = {
  plugins: [
    cssImport(),
    cssnano({
      preset: "default",
    }),
  ],
};
