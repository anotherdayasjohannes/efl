module.exports = function(eleventyConfig) {
  
  console.log("--- LESE .ELEVENTY.JS KONFIGURATION ---"); // DAS IST DIE TEST-ZEILE

  // Dieser Befehl sagt Eleventy, dass es den "media" Ordner 
  // komplett in die finale Webseite kopieren soll.
  eleventyConfig.addPassthroughCopy("media");

  return {
    // Diese Einstellungen sagen Eleventy, wo es nach Dateien suchen soll.
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site"
    }
  };
};