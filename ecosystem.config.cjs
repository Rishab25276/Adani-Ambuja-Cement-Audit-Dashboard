module.exports = {
  apps: [
    {
      name: 'adani-dashboard',
      script: 'python3',
      args: '-m http.server 3000',
      cwd: '/home/user/webapp',
      env: {
        NODE_ENV: 'production'
      },
      watch: false,
      instances: 1,
      exec_mode: 'fork'
    }
  ]
}
