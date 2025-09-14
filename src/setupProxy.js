const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    "/misc",
    createProxyMiddleware({
      target: "https://eccdn.com.au",
    })
  );
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://dinnerdeal.backendless.com",
      secure: true,
    })
  );
};
