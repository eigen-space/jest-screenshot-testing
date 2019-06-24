const path = require('path');
const fs = require('fs');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

const packageJson = fs.readFileSync(path.resolve(__dirname, 'package.json'), 'utf8');
const libraryName = JSON.parse(packageJson).name;

module.exports = {
    entry: './src/package-api.js',
    mode: 'production',
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
        new CopyWebpackPlugin([
            { from: 'package.json', to: 'package.json' },
            // Temporary using. It will be replaced by dts bundle
            { from: './src/index.d.ts', to: 'index.d.ts' },
            { from: './src/@types/jest.d.ts', to: 'jest.d.ts' },
            { from: './src/@types/jest-types-workaround.d.ts', to: 'jest-types-workaround.d.ts' }
        ])
    ],
    target: 'node',
    externals: [nodeExternals()]
};
