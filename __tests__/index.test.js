const simpleCacheControlMiddleware = require('../lib/index')

const mockResponse = {
  set: jest.fn()
}
const next = jest.fn()
const mockRequest = (method) => ({ method })
const FIVE_MINUTES = 60 * 5
const TEN_MINUTES = FIVE_MINUTES * 2

beforeEach(jest.clearAllMocks)

describe('simple-cache-control-middleware', () => {
  it('Should provide a default 5m cache if no maxAge argument provided', () => {
    const middleware = simpleCacheControlMiddleware()
    middleware(mockRequest('GET'), mockResponse, next)
    expect(mockResponse.set).toHaveBeenCalledWith('Cache-control', `public, max-age=${FIVE_MINUTES}`)
    expect(next).toHaveBeenCalled()
  })

  it('Should provide a custom cache if maxAge provided', () => {
    const middleware = simpleCacheControlMiddleware({ maxAge: TEN_MINUTES })
    middleware(mockRequest('GET'), mockResponse, next)
    expect(mockResponse.set).toHaveBeenCalledWith('Cache-control', `public, max-age=${TEN_MINUTES}`)
    expect(next).toHaveBeenCalled()
  })

  it('Should provide a no-store cache if method is not GET', () => {
    const middleware = simpleCacheControlMiddleware()
    middleware(mockRequest('POST'), mockResponse, next)
    expect(mockResponse.set).toHaveBeenCalledWith('Cache-control', 'no-store')
    expect(next).toHaveBeenCalled()
  })
})
