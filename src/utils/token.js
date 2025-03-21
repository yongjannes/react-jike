//封装和token相关的方法 存 取 删

const TOKENKEY = 'token_key'

function setToken (token) {
    return localStorage.setItem(TOKENKEY, token)
  }
  
  function getToken () {
    return localStorage.getItem(TOKENKEY)
  }
  
  function clearToken () {
    return localStorage.removeItem(TOKENKEY)
  }
  
  export {
    setToken,
    getToken,
    clearToken
  }