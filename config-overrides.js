// 扩展webpack的功能
//  addLessLoader配置定制主题

const {override, fixBabelImports, addLessLoader} = require('customize-cra');
module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    //style 值 css 引入css样式 ; true 引入less样式
    style: true
  }),
  //antd定制主题
  addLessLoader({
    javascriptEnabled: true,
  })
)