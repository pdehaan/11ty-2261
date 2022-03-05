module.exports = function(eleventyConfig) {
  eleventyConfig.addShortcode("user", firstName => firstName);
  eleventyConfig.addPairedShortcode("user2", (content, firstName) => {
      return `${content.trim()} ${firstName}`.trim();
  });

  return {
    dir: {
      input: "src",
      output: "www",
    }
  };
};
