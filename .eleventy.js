module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/css/*.css");
  eleventyConfig.addPassthroughCopy("./src/js/*.js");
  eleventyConfig.addPassthroughCopy("./src/assets/fonts/*");
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
