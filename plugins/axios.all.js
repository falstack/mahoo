import generateRequestError from '~/assets/js/generateRequestError'
import parseToken from '~/assets/js/parseToken'

export default ({ $axios, app }) => {
  const isClient = typeof window !== 'undefined'

  $axios.setToken(parseToken(app), 'Bearer')

  $axios.onRequest((config) => {
    config.baseURL = isClient ? process.env.API_URL_BROWSER : process.env.API_URL
    config.timeout = 10000
  })

  $axios.onResponse((resp) => {
    return resp.data
  })

  $axios.onError((error) => {
    return Promise.reject(generateRequestError(error))
  })
}
