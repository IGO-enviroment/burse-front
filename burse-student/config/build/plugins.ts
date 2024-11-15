import HTMLWebpackPlugin from 'html-webpack-plugin';
import type { WebpackPluginInstance } from 'webpack';
import { ProgressPlugin, DefinePlugin, HotModuleReplacementPlugin } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { BuildOptions } from './types/config';

export const buildPlugins = ({ paths, isDev, apiUrl }: BuildOptions): WebpackPluginInstance[] => {
  const devPlugins = isDev ? [
    new ReactRefreshWebpackPlugin(),
    new HotModuleReplacementPlugin(),
    new BundleAnalyzerPlugin({
      openAnalyzer: false,
    }),
  ] : [];

  return [
    new HTMLWebpackPlugin({
      template: paths.html,
    }),
    new ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
    new DefinePlugin({
      __IS_DEV__: isDev,
      __API__: JSON.stringify(apiUrl),
    }),
    ...devPlugins,
  ];
};
