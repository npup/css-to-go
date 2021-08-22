export default {
  //   projectRoot: ".", // Where to resolve all URLs relative to. Useful if you have a monorepo project.
  //   src: "./src", // Path to Astro components, pages, and data
  //   pages: "./src/pages", // Path to Astro components, pages, and data
  //   dist: "./example-dist", // When running `astro build`, path to final static output
  public: "./dist", // A folder of static files Astro will copy to the root. Useful for favicons, images, and other files that don't need processing.
  buildOptions: {
    // site: '',            // Your public domain, e.g.: https://my-site.dev/. Used to generate sitemaps and canonical URLs.
    //sitemap: true, // Generate sitemap (set to "false" to disable)
  },
  devOptions: {
    port: 3003, // The port to run the dev server on.
  },
  // component renderers which are enabled by default
  renderers: [],
};
