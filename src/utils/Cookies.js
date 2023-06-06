import Cookies from "js-cookie"

export const SetToken = (tokenName, token) => {
    Cookies.set(`${tokenName}`, token, {
        path: '/',
        sameSite: 'lax',
        expires: 365,
    })
}
export const getToken = () => {
    return Cookies.get('accessToken')
}
export const deleteToken = () => {
    Cookies.remove('accessToken')
    return Cookies.remove('accessToken')
}