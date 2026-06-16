module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/css/*.css");
  eleventyConfig.addWatchTarget("./src/assets/*");

  return {
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    dir: {
      input: "src",
      output: "public",
    },
  };
};
