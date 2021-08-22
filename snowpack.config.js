// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
export default {
  mount: {
    example: "/",
    src: "/",
    /* ... */
  },
  plugins: [
    "@snowpack/plugin-postcss",
    /* ... */
  ],
  packageOptions: {
    /* ... */
  },
  devOptions: {
    port: 3003,
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
};
