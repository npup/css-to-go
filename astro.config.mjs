const isProd = "production" === process.env.NODE_ENV;

const dist = isProd ? "docs" : "docs-local";
export default {
  dist,
  devOptions: {
    port: 3003,
  },
};
