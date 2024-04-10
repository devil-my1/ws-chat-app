"use client"

import { useRouter } from "next/navigation"
import { toast } from "sonner"

import { DASHBOARD_URL } from "@/config/pages-url.config"

import { Amplify } from "aws-amplify"
import { awsConfig } from "@/config/aws-config"
import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react"
import { signIn } from "@aws-amplify/auth"

import "@aws-amplify/ui-react/styles.css"
import "./Auth.scss"

Amplify.configure({
	Auth: {
		Cognito: {
			userPoolId: awsConfig.USER_POOL_ID,
			userPoolClientId: awsConfig.USER_POOL_CLIENT_ID
		}
	}
})

export function Auth() {
	const { push } = useRouter()
	const { skipVerification } = useAuthenticator()

	return (
		<div className='flex flex-col items-center justify-center min-h-screen'>
			<Authenticator
				// socialProviders={["amazon", "google"]}
				initialState='signIn'
				className='auth_main_container'
				components={{
					SignIn: {
						Header: () => (
							<h2 className='text-2xl font-bold text-center text-[#91c0f5]'>
								Sign In to Chat app
							</h2>
						)
					}
				}}
				services={{
					handleSignIn: async data => {
						const signInOutput = signIn(data)
						const { nextStep } = await signInOutput
						skipVerification()
						nextStep.signInStep = "DONE"
						toast.success("Successfully login!")
						push(DASHBOARD_URL.CHAT)
						return signInOutput
					}
				}}
			/>
		</div>
	)
}
