const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const nodeExternals = require('webpack-node-externals')

function generateConfig() {
    const externalsMap = {
        vue: 'Vue'
    }
    return {
        mode: 'production',
        entry: {
            app: './src/index.js'
        },
        output: {
            path: path.resolve(process.cwd(), 'lib'),
            filename: 'sy-vue2-component.common.js',
            chunkFilename: '[id].js',
            publicPath: '/dist/',
            libraryExport: 'default',
            library: 'ELEMENT',
            libraryTarget: 'commonjs2'
        },
        resolve: {
            extensions: ['.js', '.vue', '.json'],
            modules: ['node_modules']
        },
        externals: [externalsMap, nodeExternals()],
        performance: {
            hints: false
        },
        stats: {
            children: false
        },
        optimization: {
            minimize: false
        },
        module: {
            rules: [
                {
                    test: /\.vue$/,
                    loader: 'vue-loader',
                    options: {
                        compilerOptions: {
                            preserveWhitespace: false
                        }
                    }
                }
            ]
        },
        plugins: [
            new VueLoaderPlugin()
        ]
    }
}

module.exports = generateConfig();