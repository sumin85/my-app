module.exports = {
  apps:[{
    name: [{
      name: 'my-app',
      script: './app.js',
      instances: 1,
      autorestart: true,
      watch: false
  }]
};
