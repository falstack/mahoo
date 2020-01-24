const BASE_URL = {
  API_URL: {
    development: 'http://localhost:5200/',
    production: 'http://localhost/'
  },
  API_URL_BROWSER: {
    development: 'http://localhost:5200/',
    production: 'https://api.calibur.tv/'
  }
}

const REDIS_URL = {
  development: 'redis://localhost:6379',
  production: 'redis://:Qq414927352@r-uf686e351aa9bff4.redis.rds.aliyuncs.com:6379'
}

const SOCKET_HOST = {
  development: 'ws://localhost:5200/ws',
  production: 'wss://api.calibur.tv/ws'
}

module.exports = {
  BASE_URL,
  REDIS_URL,
  SOCKET_HOST
}
