const MILLISECONDS_IN_MINUTE = 60000

export default function createCache(minutes) {
  const cacheDuration = minutes * MILLISECONDS_IN_MINUTE
  let expirationTime = getCurrentTime() + cacheDuration
  let initialized = false
  let cachedData

  function getData() {
    return cachedData
  }

  function isValid() {
    const isExpired = getCurrentTime() > expirationTime
    return initialized && !isExpired
  }

  function refresh(data) {
    expirationTime = getCurrentTime() + cacheDuration
    cachedData = data
  }

  function getCurrentTime() {
    return new Date().getTime()
  }

  return {
    isCached: isCached,
    getData: getData
  }
}
