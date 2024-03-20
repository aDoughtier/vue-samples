import cookies from "js-cookie"

const tokenKey = "ZXTOKEN"

const setToken = (token: string, expires?: number) => {
  cookies.set(tokenKey, token, { expires })
}
const getToken = () => {
  return cookies.get(tokenKey)
}
export {
  setToken,
  getToken
}