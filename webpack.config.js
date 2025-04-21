import path from 'node:path'
import nodeExternals from 'webpack-node-externals'
import Dotenv from 'dotenv-webpack'
import NodemonPlugin from 'nodemon-webpack-plugin'

const NODE_ENV = process.env.NODE_ENV

/** @type {import('webpack').Configuration} */
export default {
  entry: {
    index: path.resolve('src', 'index.ts')
  },
  target: 'node',
  mode: NODE_ENV,
  externals: [nodeExternals()],
  output: {
    path: path.resolve('dist'),
    filename: '[name].cjs',
    library: {
      type: 'commonjs'
    }
  },
  resolve: {
    extensions: ['.ts'],
    alias: {
      '@': path.resolve('src')
    }
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new Dotenv(),
    new NodemonPlugin({
      script: path.resolve('dist', 'index.cjs')
    })
  ]
}
