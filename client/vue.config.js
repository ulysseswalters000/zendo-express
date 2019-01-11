module.exports = {
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
        `
      }
    }
  }
};
