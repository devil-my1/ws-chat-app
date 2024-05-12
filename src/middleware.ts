import { DASHBOARD_URL } from "./config/pages-url.config"
import { NextRequest, NextResponse } from "next/server"
import { Amplify } from "aws-amplify"
import { awsConfig } from "./config/aws-config"

Amplify.configure({
	Auth: {
		Cognito: {
			userPoolId: awsConfig.USER_POOL_ID,
			userPoolClientId: awsConfig.USER_POOL_CLIENT_ID
		}
	}
})

export async function middleware(req: NextRequest, resp: NextResponse) {
	const { url, cookies } = req

	const is_logined = cookies
		.getAll()
		.find(cookie => cookie.name.endsWith("logined"))?.value
	console.log(is_logined)

	const isDashboardPage = url.includes("/i")
	const isAuthPage = url.includes("/auth")

	if (isAuthPage && is_logined)
		return NextResponse.redirect(new URL(DASHBOARD_URL.CHAT, url))

	if (isDashboardPage && !is_logined)
		return NextResponse.redirect(new URL(DASHBOARD_URL.AUTH, url))

	if (isAuthPage) return NextResponse.next()

	if (!is_logined)
		return NextResponse.redirect(new URL(DASHBOARD_URL.AUTH, req.url))

	return
}

export const config = {
	matcher: ["/i/:path*", "/auth/:path"]
}
