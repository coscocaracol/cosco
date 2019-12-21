/*  =============================
      DECLARACIÓN CONSTANTES
    ============================= */
const path = require('path'),
      endPath = path.resolve(__dirname, '..', 'dist'),
      MiniCssExtractPlugin = require('mini-css-extract-plugin'),
      HtmlWebpackPlugin = require('html-webpack-plugin'),
      autoprefixer = require('autoprefixer'),
      { CleanWebpackPlugin } = require('clean-webpack-plugin'),
      TerserJSPlugin = require('terser-webpack-plugin'),
      OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')


/*  =============================
      MÓDULO EXPORTS
  ============================= */
module.exports = {
  //devtool: 'source-map', 

  /*=======================================
   NOMBRE Y DIRECTORIO ENTRADA ARCHIVOS
  ========================================= */
  entry:
    {
      inicio: './src/js/index.js'
    },
 /*
    {
      index: './src/js/index.js'
      conocenos: './src/js/conocenos.js',
      eventos: './src/js/eventos.js',
      servicios: './src/js/servicios.js',
      contacto: './src/js/contacto.js'
    },
    */
  /*=====================================
   NOMBRE Y DIRECTORIO SALIDA ARCHIVOS
  ======================================= */
  output: {
    path: endPath,
    filename: 'js/[name].[chunkhash].js',
    publicPath: './' // Solo necesario si se activa el Hot-Reloading
  }, // Fin output

  // Resolver extensiones de ECMAScript 6, css, ts y React
  resolve: {
    extensions: ['*', '.js', '.jsx', '.json', '.css', '.ts', '.tsx'],
  }, // Fin resolve

  /*===============================
          MODULOS
  ================================= */
  module: {
    rules:[

      /*====================================
        TRANSPILACIÓN DE JAVASCRIPT Y REACT
      ====================================== */
      {
        test: /\.(js|jsx|mjs)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },

      /*====================================
        TRANSPILACIÓN DE HANDLEBARS
      ====================================== */
      {
        test: /\.(handlebars|hbs)$/,
        use: 'handlebars-loader',
      },

      /*====================================
        TRANSPILACIÓN DE HTML
      ====================================== */
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {minimize: true}
          }
        ] 
      },

      /*====================================
        TRANSPILACIÓN DE CSS Y SASS Y 
        EXTRACCIÓN CSS DEL JAVASCRIPT
      ====================================== */
      {
        test: /\.(sa|sc|c)ss$/i,
        //exclude: /node_modules/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              autoprefixer: {
                browser: [
                  'last 3 versions'
                ]
              },
              plugins: () => [autoprefixer]
            }
          },
          'resolve-url-loader',
          'sass-loader',
        ]
      },

      /*====================================
        TRANSPILACIÓN ARCHIVOS TYPESCRIPT
      ====================================== 
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader'
        }
      }, 

      /*====================================
        TRANSPILACIÓN DE IMAGENES
      ====================================== */
      {
        test: /\.(png|jpe?g|gif|webp)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              template: '../src/static/img',
              outputPath: 'static/img/'
              //useRelativePath: true
            },
          },
                  /* (A día 15-11-2019 no funciona)
          {
            loader: 'image-webpack-loader',
            options: {
              gifsicle: {
                interlaced: false
              },
              optipng: {
                optimizationLevel: 7
              },
              pngquant: {
                quality: '65-90',
                speed: 4
              },
              mozjpeg: {
                progressive: true,
                quality: 65
              }
            }
          }         */
        ],
      },

      /*====================================
      TRANSPILACIÓN ARCHIVOS ICO Y SVG
      ====================================== */
      {
        test: /\.(svg|ico)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              template: '../src/static/img/ico',
              outputPath: 'static/img/ico'
              //useRelativePath: true
            },
          },
        ]
      }, 

      /*====================================
        TRANSPILACIÓN ARCHIVOS FUENTES Y
        ARCHIVOS TXT, XML, DOC, DOCX Y PDF
      ====================================== */
      {
        test: /\.(ttf|eot|woff2?|txt|xml|pdf)(\?v=[0-9]\.[0-9]\.[0-9])?$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              template: '../src/static/img/fonts',
              outputPath: 'static/fonts'
              //useRelativePath: true
            },
          },
        ],
      }, 

      /*====================================
        TRANSPILACIÓN ARCHIVOS DE AUDIO
      ====================================== */
      {
        test: /\.(mp3|ogg|wav)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              template: '../src/static/audio',
              outputPath: 'static/audio'
              //useRelativePath: true
            },
          },
        ],
      }, 

      /*====================================
        TRANSPILACIÓN ARCHIVOS DE VIDEO
      ====================================== */
      {
        test: /\.(mp4|ogv|webm)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              template: '../src/static/video',
              outputPath: 'static/video'
              //useRelativePath: true
            },
          },
        ],
      }, 
    ]// Fin Reglas
  }, // Fin modulos

  /*===============================
          PLUGINS
  ================================= */
  plugins: [

    new CleanWebpackPlugin(),

    new MiniCssExtractPlugin({
      filename: 'css/[name].[chunkhash].css',
      chunkFilename: '[id].css'
    }),

    new HtmlWebpackPlugin({
      template: './src/index.handlebars',
      filename: 'index.html',
      //chunks: ['inicio']
    }), // Fin plugin HtmlWebpackPlugin

/*    new HtmlWebpackPlugin({
      template: './src/conocenos.handlebars',
      filename: 'conocenos.html',
      chunks: ['conocenos']
    }), // Fin plugin HtmlWebpackPlugin

    new HtmlWebpackPlugin({
      template: './src/servicios.handlebars',
      filename: 'servicios.html',
      chunks: ['servicios']
    }), // Fin plugin HtmlWebpackPlugin

    new HtmlWebpackPlugin({
      template: './src/eventos.handlebars',
      filename: 'eventos.html',
      chunks: ['eventos']
    }), // Fin plugin HtmlWebpackPlugin

    new HtmlWebpackPlugin({
      template: './src/contacto.handlebars',
      filename: 'contacto.html',
      chunks: ['contacto']
    }), // Fin plugin HtmlWebpackPlugin

  */
  ], // Fin plugins

  optimization: {
    minimizer: [
      new TerserJSPlugin({}),
      new OptimizeCSSAssetsPlugin({})
    ],

    splitChunks: {
      chunks: 'all'
    }

  },

} // Fin módulo exports