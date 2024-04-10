"use client"
import { awsConfig } from "@/config/aws-config"
import { useAuthenticator } from "@aws-amplify/ui-react"
import { Amplify } from "aws-amplify"

Amplify.configure({
	Auth: {
		Cognito: {
			userPoolId: awsConfig.USER_POOL_ID,
			userPoolClientId: awsConfig.USER_POOL_CLIENT_ID
		}
	}
})

export default function CurrentUser() {
	const { user } = useAuthenticator()

	return (
		<div className='flex items-center gap-2 p-layout'>
			<span>Hello, {user?.username}! </span>
		</div>
	)
}
