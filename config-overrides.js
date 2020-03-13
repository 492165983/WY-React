const { 
  override,
  addPostcssPlugins,
  addLessLoader,
  fixBabelImports,
  addDecoratorsLegacy,
  addWebpackAlias
 } = require('customize-cra');

 const { resolve } = require('path');

module.exports = override(
  // less
  addLessLoader({}),
  // 移动端适配
  addPostcssPlugins([require('postcss-pxtorem')({
    rootValue: 37.5,
    propList: ['*']
    })]),
    
    // 按需加载
    fixBabelImports('import', {
      libraryName: 'antd-mobile',
      style: true,
    }),  
    // ES7 装饰器语法兼容
    // @babel/plugin-proposal-decorators
      addDecoratorsLegacy(),

    // 配置webpack路径别名
    addWebpackAlias({
      $comp: resolve(__dirname, './src/components'),
      $cont: resolve(__dirname, './src/container'),
      $utils: resolve(__dirname, './src/utils'),
      $conf: resolve(__dirname, './src/config'),
      // $api: resolve(__dirname, './src/api'),
      // $redux: resolve(__dirname, './src/redux')
    })  
)