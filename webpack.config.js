module.exports = {
  entry: {
    'home/index': 'app/web/page/index/index.jsx',
  },
  module: {
    rules: [{
      less: {
        exclude: [/node_modules/],
      },
    }],
  },
  plugins: {
    /**
     * @description 拷贝重制样到静态文件
     */
    copy: [{
        from: 'app/web/assets/css/reset.css',
        to: 'asset/css/reset.css',
      },
      {
        from: 'app/web/assets/js/lib/polyfill/polyfill.7.10.4.min.js',
        to: 'assets/js/polyfill/polyfill.7.10.4.min.js',
      },
    ],
  }
};