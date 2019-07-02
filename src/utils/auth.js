const ITEM = 'token'

export function getToken(){
  return sessionStorage.getItem(ITEM)
}

export function setToken(token){
  sessionStorage.setItem(ITEM, token)
}

export function removeToken(){
  sessionStorage.removeItem(ITEM)
}
