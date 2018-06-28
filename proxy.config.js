const proxy = [
  {
    context: '/api',
    target: 'https://ninjatags.com.br',
    pathRewrite: { '^/api': '' }
  }
];
module.exports = proxy;
