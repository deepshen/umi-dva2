export default {
  "publicPath": "/static/",
  // "proxy": {
  //   "/api": {
  //     "target": "http://jsonplaceholder.typicode.com/",
  //     "changeOrigin": true,
  //     "pathRewrite": { "^/api" : "" }
  //   }
  // },
  "theme":'./src/theme-config.js',
  env: {
    development: {
      extraBabelPlugins: ['dva-hmr'],
    },
  },
}
