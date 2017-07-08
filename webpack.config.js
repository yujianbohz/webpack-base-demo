
module.exports = {
  entry:  __dirname + "/src/main.js",//已多次提及的唯一入口文件
  output: {
    path: __dirname + "/public/js",//打包后的文件存放的地方
    filename: "bundle.js"//打包后输出文件的文件名
  },
  module: {
  	loaders: [
      {
      	test:/\.jsx?/,
      	exclude:/node_modules/,
      	loader:'babel-loader'
      },
      {
      	test: /\.s?css$/,
      	loader: 'style-loader!css-loader'//
      }
  	]
  },
   devServer: {
    contentBase: "./public",//本地服务器所加载的页面所在的目录
    historyApiFallback: true,//不跳转
    inline: true//实时刷新
  } 
}