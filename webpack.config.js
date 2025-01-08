const path = require('path');

module.exports = {
  // Other webpack configurations like entry, output, etc.
  module: {
    rules: [
      {
        test: /\.(png|jpe?g)$/i, // Match PNG and JPEG files
        use: [
          {
            loader: 'file-loader', // Emits the files
            options: {
              name: '[name].[hash].[ext]',
              outputPath: 'images/', // Output folder
            },
          },
          {
            loader: 'image-webpack-loader',
            options: {
              disable: process.env.NODE_ENV !== 'production', // Disable in development
              mozjpeg: {
                progressive: true,
                quality: 75,
              },
              optipng: {
                enabled: true,
              },
              pngquant: {
                quality: [0.65, 0.9],
                speed: 4,
              },
              gifsicle: {
                interlaced: false,
              },
              webp: {
                quality: 75, // Converts to WebP
              },
              avif: {
                quality: 50, // Converts to AVIF
              },
            },
          },
        ],
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
  },
};
