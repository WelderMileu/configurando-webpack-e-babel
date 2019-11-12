const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    /// Configurando o webpack
    /// arquivo de entrada.
    entry: './src/index.js',
    /// Gerando o arquivo onde ira armazenar os nosso arquivos para produção.
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bandle.js'
    },

    /// Configurando o nosso babel.
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    /// Configuando a nossa pagina de exibição no webpack.
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        })
    ]
}