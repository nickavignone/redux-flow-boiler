const req = require.context('.', true, /^.+\/([^/]+)\/index\.jsx?$/);

req.keys().forEach((key) => {
  const componentName = key.replace(/^.+\/([^/]+)\/index\.jsx?$/, '$1');
  module.exports[componentName] = req(key).default;
});
