"use client"

import { Authenticator } from "@aws-amplify/ui-react"
import { Amplify } from "aws-amplify"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { PropsWithChildren, useState } from "react"
import { awsConfig } from "@/config/aws-config"

Amplify.configure({
	Auth: {
		Cognito: {
			userPoolId: awsConfig.USER_POOL_ID,
			userPoolClientId: awsConfig.USER_POOL_CLIENT_ID
		}
	}
})

export function Providers({ children }: PropsWithChildren) {
	const [client] = useState(
		new QueryClient({
			defaultOptions: {
				queries: {
					refetchOnWindowFocus: false
				}
			}
		})
	)

	return (
		<Authenticator.Provider>
			<QueryClientProvider client={client}>{children}</QueryClientProvider>
		</Authenticator.Provider>
	)
}
