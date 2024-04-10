import Cookies from "js-cookie"

export enum EnumTokens {
	ACCESS_TOKEN = "accessToken",
	REFRESH_TOKEN = "refreshToken"
}

export const getAccessToken = (name: string) => {
	Cookies.get(name)
}

export const saveTokenStorage = (token: string) => {
	Cookies.set(EnumTokens.ACCESS_TOKEN, token, {
		domain: "localhost",
		sameSite: "strict",
		expires: 1
	})
}

export const removeFromStorage = () => {
	Cookies.remove(EnumTokens.ACCESS_TOKEN)
}
