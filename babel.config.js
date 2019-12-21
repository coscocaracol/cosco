module.exports = {
  presets: [
    [
      "babel-preset-gatsby-package",
      {
        "targets": {
          "browsers": [
            ">0.25%", "not dead"
          ]
        }
      }
    ],
    [
      "@babel/preset-env",
      {
        "modules": false,
        "targets": {
          "browsers": [
            ">0.25%", "not dead"
          ]
        }
      }
    ],
      "@babel/preset-react"
  ],

  plugins: [
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-proposal-object-rest-spread",
    "@babel/plugin-proposal-optional-chaining",
    "@babel/plugin-syntax-dynamic-import",
    "@babel/plugin-transform-runtime",
    "@babel/plugin-transform-spread",
    "react-hot-loader/babel"
  ]
}