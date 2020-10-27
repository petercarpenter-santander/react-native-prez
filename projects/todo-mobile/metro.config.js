const path = require("path");

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  }, 
  watchFolders: [path.resolve(__dirname), path.resolve(__dirname, "../common")],
  resolver: {
    extraNodeModules: new Proxy(
      {
        common: path.resolve(__dirname + "/../common"),
      },
      {
        get: (target, name) =>
          //redirects dependencies referenced from common/ to local node_modules
          name in target
            ? target[name]
            : path.join(process.cwd(), `node_modules/${name}`),
      }
    ),
  },
};
