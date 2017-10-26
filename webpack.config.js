module.exports = {
    entry: "./src/app/app.tsx",

    output: {
        filename: "bundle.js",
        path: __dirname + "/src",
        library: "app"
    },

    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },

    module: {
        loaders: [
          {
              test: /\.tsx?$/,
              exclude: /node_modules/,
              loaders: ["ts-loader"]
          }
        ]
    }
};