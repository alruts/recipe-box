module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");

  return {
    pathPrefix: "/recipe-box/",
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site"
    }
  };
};
