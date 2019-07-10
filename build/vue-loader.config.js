module.exports = isDev => {
  return {
    preserveWhitespace: true,//去空格
    extractCSS: !isDev,
    cssModules: {
      localIdentName: isDev ? '[path]-[name]-[hash:base64:5]' : '[hash:base64:5]',
      // localIdentName: '[path]-[name]-[hash:base64:5]',
      camelCase: true
    }
    /* 
    hotReload: false 根据环境变量生成
    自定义模块
    loaders: {
      'docs': docsLoader
    },
    preLoader:{},
    postLoader:{},
    postcss
    */
  }
}
