module.exports = {
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss)$": `identity-obj-proxy`
  },
  testPathIgnorePatterns: [`node_modules`, `\\.next`, `<rootDir>.*/public`],
  globals: {
    __PATH_PREFIX__: ``
  },
  testURL: `http://localhost`
}
