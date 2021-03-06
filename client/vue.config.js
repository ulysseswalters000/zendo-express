const path = require('path');

module.exports = {
  // scss imports for use across components
  // AKA 'Global' scss
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "./node_modules/normalize.scss/normalize.scss";
          @import "@/scss/base/_variables.scss";
          @import "@/scss/base/_mixins.scss";
          @import "@/scss/base/_global.scss";
          @import "@/scss/modules/_btn.scss";
          @import "@/scss/modules/_wrapper.scss";
          @import "@/scss/modules/_headline.scss";
          @import "@/scss/modules/_page-section.scss";
          @import "@/scss/modules/_row.scss";
          @import "@/scss/modules/_generic-content-container.scss";
          @import "@/scss/modules/_section-title.scss";
          @import "@/scss/modules/_grid.scss";
        `
      }
    }
  },
  outputDir: path.resolve(__dirname, '../public')
}
