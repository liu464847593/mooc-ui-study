const path = require('path');
const {VueLoaderPlugin} = require('vue-loader')
const glob = require('glob');
const list = {}

async function makeList(dirPath, list) {
  const files = glob.sync(`${dirPath}/**/index.js`);
  console.log('files：', files);
  for (const file of files) {
    const component = file.split(/[/.]/)[2];
    console.log('component：', component, file.split(/[/.]/));
    list[component] = `./${file}`;
  }
  console.log(list);
}

makeList('components/lib', list);

module.exports = {
  entry: list,
  mode: 'development',
  output: {
    filename: '[name].umd.js',
    path: path.resolve(__dirname,'dist'),
    library: 'mui', // 把所有打包输出到这个字段下
    libraryTarget: 'umd', // 打包成umd形式
  },
  plugins: [
    new VueLoaderPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          {loader: 'vue-loader'}
        ]
      }
    ]
  }
}
