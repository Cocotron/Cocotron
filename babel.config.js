module.exports = {
  presets: [
    [
      "@babel/env",
      {
        targets: {
          chrome: "106",
          safari: "10.1",
          firefox: "106",
        },
      },
    ],
  ],
  plugins: [
    [
      "@babel/plugin-transform-react-jsx",
      {
        pragmaFrag: "null",
        pragma: "O",
      },
    ],
  ],
};
