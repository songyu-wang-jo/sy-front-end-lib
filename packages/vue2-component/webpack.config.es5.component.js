const tools = require('@sy-ui/tools')
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

function generateConfig() {
    const componentsMap = tools.readDir('src/components');
    const componentsInputMap = {}
    componentsMap.forEach(component => {
        componentsInputMap[component] = `./src/components/${component}/index.js`
    })
    return {
        mode: 'production',
        entry: componentsInputMap,
        output: {
            path: path.resolve(process.cwd(), 'lib'),
            publicPath: '/dist/',
            filename: `[name].js`,
            chunkFilename: '[id].js',
            libraryExport: 'default',
            library: 'ELEMENT',
            libraryTarget: 'commonjs2'
        },
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