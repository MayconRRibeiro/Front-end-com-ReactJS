const path = require('path');

module.exports = {
  // Arquivo de entrada da aplicação
  entry: path.resolve(__dirname, 'src', 'index.js'),
  // Arquivo gerado após conversão (bundle.js)
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  devServer: {
    // Caminho para o diretório que contem os arquivos públicos da aplicação
    contentBase: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
