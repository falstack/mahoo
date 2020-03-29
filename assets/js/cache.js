import { getUserInfo } from '~/api/userApi'

export const getUserFromSessionStore = (ctx, slug) => {
  const getUser = async() => {
    const user = await getUserInfo(ctx, { slug })
    user && setUserSessionStore(user)
    return user
  }
  try {
    const user = sessionStorage.getItem(`user-item-${slug}`)
    if (!user) {
      return getUser()
    }
    return JSON.parse(sessionStorage.getItem(`user-item-${slug}`))
  } catch (e) {
    return getUser()
  }
}

export const setUserSessionStore = (user) => {
  try {
    sessionStorage.setItem(`user-item-${user.slug}`, JSON.stringify(user))
  } catch (e) {}
}

export const clear = () => {
  try {
    localStorage.clear()
  } catch (e) {}
}

export const set = (key, value, timeout) => {
  if (typeof window === 'undefined') {
    return
  }
  try {
    localStorage.setItem(key, JSON.stringify(value))
    if (timeout) {
      localStorage.setItem(`${key}-timeout`, Date.now() + timeout * 1000)
    }
  } catch (e) {}
}

export const get = (key, def = null) => {
  if (typeof window === 'undefined') {
    return def
  }
  try {
    const value = localStorage.getItem(key)
    if (!value) {
      return def
    }
    const timeout = localStorage.getItem(`${key}-timeout`)
    if (timeout && parseInt(timeout) < Date.now()) {
      localStorage.removeItem(key)
      localStorage.removeItem(`${key}-timeout`)
      return def
    }
    return JSON.parse(value)
  } catch (e) {
    return def
  }
}

export const del = (key) => {
  if (typeof window === 'undefined') {
    return
  }
  try {
    localStorage.removeItem(key)
  } catch (e) {
    // do nothing
  }
}

export const has = (key) => {
  if (typeof window === 'undefined') {
    return false
  }
  try {
    return !!localStorage.getItem(key)
  } catch (e) {
    return false
  }
}
