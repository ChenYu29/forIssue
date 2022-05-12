module.exports = {
  runtimeChunk: {
    name: 'manifest'
  },
  splitChunks: {
    // 最大 split js 数，会包含入口文件的 js，默认为 3
    maxInitialRequests: 5,
    // 第三方打包
    cacheGroups: {
      default: false,
      commons: {
        test: /[\\/]node_modules[\\/]/,
        name: 'common',
        chunks: 'all'
      },
      react: {
        name: 'react',
        chunks: 'all',
        priority: 1,
        test: /react/
      },
      antd: {
        name: 'antd',
        chunks: 'all',
        priority: 2,
        test: function(module) {
          const context = module.context;
          return context && (
            context.indexOf('antd') >= 0 ||
            context.indexOf('@ant-design') >= 0 ||
            context.indexOf('rc-picker') >= 0 ||
            context.indexOf('rc-table') >= 0 ||
            context.indexOf('rc-tree') >= 0
          );
        }
      },
      iconfont: {
        name: 'iconfont',
        chunks: 'all',
        priority: 3,
        test: /iconfont/
      },
      fabric: {
        name: 'fabric',
        chunks: 'all',
        priority: 4,
        test: /fabric/
      },
      echarts: {
        name: 'echarts',
        chunks: 'all',
        priority: 5,
        test: /echarts/
      }
    }
  }
};
