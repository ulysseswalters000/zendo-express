const path = require('path');

module.exports = {
  // Pages configuration
  // pages: {
  //   index: {
  //     // entry for main page
  //     entry: 'src/main.js',
  //     // source template
  //     template: 'public/index.html',
  //     // output as dist/index.html
  //     filename: 'index.html',
  //     // Chunks to include on the page
  //     chunks: ['chunk-vendors','chunk-common','app']
  //   },
  //   contact: {
  //     entry: 'src/views/contact/contact.js',
  //     template: 'public/contact.html',
  //     filename: 'contact.html',
  //     chunks: ['chunk-vendors','chunk-common','contact']
  //   },
  //   pricing: {
  //     entry: 'src/views/pricing/pricing.js',
  //     template: 'public/pricing.html',
  //     filename: 'pricing.html',
  //     chunks: ['chunk-vendors','chunk-common','pricing']
  //   }
  // },

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
  }
}
  //   devServer: {
  //     proxy: {
  //       '/contact': {
  //         target: 'http://localhost:8081'
  //       }
  //     }
  //   },
  //   outputDir: path.resolve(__dirname, '../public')
  // }
