import path from 'path';
import { buildWebpackConfig } from './config/build/webpack-config';
import { BuildEnv, BuildPaths } from './config/build/types/config';

export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
  };

  const mode = env.mode || 'development';
  const PORT = env.port || 3000;
  const isDev = mode === 'development';
  const apiUrl = 'http://localhost:8000';

  return buildWebpackConfig({
    mode,
    paths,
    isDev,
    apiUrl,
    port: PORT,
  });
};
