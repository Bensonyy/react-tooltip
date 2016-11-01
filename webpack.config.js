var path = require('path')
var webpack = require('webpack')
var autoprefixer = require('autoprefixer')

module.exports = {
  devtool: 'source-map',
  entry: {
    //vendor:['react','react-dom'],
    tooltip: './demo/demo.js'
  },
  output: {
    path: path.join(__dirname, 'build'),  //文件输出目录
    filename: '[name].js',  //打包生成文件
    publicPath: '/build/'   //用于配置文件发布路径，如CDN或本地服务器
  },
  reslove: {
    extensions: ['', '.js', '.json', '.jsx', '.scss', '.css']
  },
  plugins: [
    new webpack.ProvidePlugin({ //这个可以使其变成全局变量，不用在文件中require('')了
      /*React: "react",
      ReactDOM: "react-dom"*/
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),  //启动代码热替换
    //将依赖配置vendor打包成vendor.bundle.js
    new webpack.optimize.CommonsChunkPlugin('vendor.bundle.js'),
    new webpack.NoErrorsPlugin()    //编译错误时不打断
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,   //用正则来匹配文件路径，这段意思是匹配 js 或者 jsx
      loaders: ["babel"],
      exclude: /node_modules/,
      include: __dirname
    }, {
      test: /\.(png|jpg)$/,
      loader: 'url?limit=10000'
    }, {
      test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?limit=10000&mimetype=application/font-woff'
    }, {
      test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?limit=10000&mimetype=application/octet-stream'
    }, {
      test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'file'
    }, {
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?limit=10000&mimetype=image/svg+xml'
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader!postcss'
    }, {
      test: /\.scss$/,
      loader: 'style!css!sass?sourceMap!postcss',
      exclude: /node_modules/
    }]
  },
  postcss:[autoprefixer()]
}