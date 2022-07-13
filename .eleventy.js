const litPlugin = require('@lit-labs/eleventy-plugin-lit');

module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy('./_js');
    eleventyConfig.addPlugin(litPlugin, {
        componentModules: [
            './_js/demo-greeter.js',
            './_js/demo-hello.js'
        ]
    });
};