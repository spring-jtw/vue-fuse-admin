import Cookies from 'js-cookie'

export function get(key) {
    return Cookies.get(key)
}

export function set(key, token) {
    return Cookies.set(key, token)
}

export function remove(key) {
    return Cookies.remove(key)
}