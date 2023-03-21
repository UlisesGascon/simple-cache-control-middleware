const debug = require('debug')('simple-cache-control-middleware')
const FIVE_MINUTES = 60 * 5

module.exports = ({ maxAge } = {}) => {
  const maxAgeValue = maxAge || FIVE_MINUTES
  debug(`Current Settings: maxAgeValue (${maxAgeValue})`)

  return (req, res, next) => {
    const cacheControlValue = req.method === 'GET' ? `public, max-age=${maxAgeValue}` : 'no-store'
    debug(`Current Cache-control value is (${cacheControlValue})`)
    res.set('Cache-control', cacheControlValue)
    next()
  }
}
