module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("media");
    eleventyConfig.addWatchTarget("./styles/");
    return {
        dir: {
            input: ".",
            includes: "_includes",
            output: "_site"
        }
    };
};