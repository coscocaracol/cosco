/*  =============================
      DECLARACIÓN CONSTANTES
    ============================= */
const path = require('path'),
      HtmlWebpackPlugin = require('html-webpack-plugin'),
      { CleanWebpackPlugin } = require('clean-webpack-plugin'),
      webpack = require('webpack'),
      endPath = path.resolve(__dirname, '..', 'dist')


/*  =============================
        MODULO EXPORTACIÓN
    ============================= */
module.exports = {

  /*=======================================
    EXTENSIONES QUE DEBE INTERPRETAR
  ========================================= */
  resolve: {
    extensions: ['*', '.js', '.jsx', '.json', '.css', '.scss', '.ts', '.tsx']
  },

  cache: true,

  /* tambien puede ser declarado así 
  module.exports = () => {
    return {
      entry: 
      output: {

      },
      module: {
        rules: [
          {

          }
        ]
      }
    };
  };
  */

  /*=======================================
      DIRECTORIO Y NOMBRE ARCHIVO ENTRADA
  ========================================= */

  entry: [
    'react-hot-loader/patch', // Activa Hot Module Reloading HMR para React
    'webpack-dev-server/client?http://localhost:9999',
    'webpack/hot/only-dev-server',
    './src/js/index.js'
  ],

  /*=======================================
        ENTRADA PARA VARIOS ARCHIVOS
  ========================================= */
    /*{
      inicio: './src/js/index.js',
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
    filename: 'js/[name].js',
    publicPath: './' // Obligatorio si se activa el Hot-Reloading (Caso contrario puede omitirse)
  },

  /*===============================
            MODULOS
  ================================= */
  module: {
    rules: [

      /*====================================
        TRANSPILACIÓN DE JAVASCRIPT Y REACT
      ====================================== */
      {
        test: /\.(js|jsx|mjs)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ]
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
        use: 'html-loader',
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
          'css-loader',
          'resolve-url-loader',
          'sass-loader'
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
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.handlebars',
      filename: 'index.html',
      //chunks: ['inicio']
    }), // Fin plugin HtmlWebpackPlugin

  /*
    new HtmlWebpackPlugin({
      template: './src/conocenos.handlebars',
      filename: 'conocenos.html',
      chunks: ['conocenos']
    }), // Fin plugin HtmlWebpackPlugin

    new HtmlWebpackPlugin({
      template: './src/eventos.handlebars',
      filename: 'eventos.html',
      chunks: ['eventos']
    }), // Fin plugin HtmlWebpackPlugin

    new HtmlWebpackPlugin({
      template: './src/servicios.handlebars',
      filename: 'servicios.html',
      chunks: ['servicios']
    }), // Fin plugin HtmlWebpackPlugin

    new HtmlWebpackPlugin({
      template: './src/contacto.handlebars',
      filename: 'contacto.html',
      chunks: ['contacto']
    }), // Fin plugin HtmlWebpackPlugin
  */
  ],

  devtool: 'source-map', 

  /*=================================
    SERVIDOR VIRTUAL PARA DESARROLLO
  =================================== */
  devServer: {
    hot: true,
    contentBase: endPath,
    inline: true,
    compress: true,
    port: 9999,
    publicPath: '/',
    open: true
  }, 

} // Fin módulo exports