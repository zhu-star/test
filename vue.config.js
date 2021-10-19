module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        //其中@ 表示src。
      //在这个文件夹里主要是配置别名
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  }
}

