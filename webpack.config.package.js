const path = require('path');
const fs = require('fs');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const packageJson = fs.readFileSync(path.resolve(__dirname, 'package.json'), 'utf8');
const libraryName = JSON.parse(packageJson).name;

module.exports = {
    entry: './src/package-api.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        library: libraryName,
        libraryTarget: 'commonjs2'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: 'ts-loader'
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin('./dist/*'),
        new CopyWebpackPlugin([{ from: 'package.json', to: 'package.json' }]),
        // Temporary using. It will be replaced by dts bundle
        new CopyWebpackPlugin([{ from: './src/index.d.ts', to: 'index.d.ts' }]),
        new CopyWebpackPlugin([{ from: './src/@types/jest-types-workaround.d.ts', to: 'jest-types-workaround.d.ts' }])
    ],
    externals: {
        react: {
            root: 'React',
            commonjs2: 'react',
            commonjs: 'react',
            amd: 'react',
            umd: 'react',
        },
        'react-dom': {
            root: 'ReactDOM',
            commonjs2: 'react-dom',
            commonjs: 'react-dom',
            amd: 'react-dom',
            umd: 'react-dom',
        },
        'react-dom/server': {
            root: 'ReactDOMServer',
            commonjs2: 'react-dom/server',
            commonjs: 'react-dom/server',
            amd: 'react-dom/server',
            umd: 'react-dom/server',
        },
        'enzyme-to-json': {
            root: 'enzyme-to-json',
            commonjs2: 'enzyme-to-json',
            commonjs: 'enzyme-to-json',
            amd: 'enzyme-to-json',
            umd: 'enzyme-to-json',
        },
        enzyme: {
            root: 'enzyme',
            commonjs2: 'enzyme',
            commonjs: 'enzyme',
            amd: 'enzyme',
            umd: 'enzyme',
        },
        jest: {
            root: 'jest',
            commonjs2: 'jest',
            commonjs: 'jest',
            amd: 'jest',
            umd: 'jest',
        },
       'jest-image-snapshot': {
            root: 'jest-image-snapshot',
            commonjs2: 'jest-image-snapshot',
            commonjs: 'jest-image-snapshot',
            amd: 'jest-image-snapshot',
            umd: 'jest-image-snapshot',
        },
        'react-test-renderer': {
            root: 'react-test-renderer',
            commonjs2: 'react-test-renderer',
            commonjs: 'react-test-renderer',
            amd: 'react-test-renderer',
            umd: 'react-test-renderer'
        }
    }
};
