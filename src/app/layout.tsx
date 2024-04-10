import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.scss"
import { SITE_NAME } from "@/const/seo.constants"
import { Providers } from "./providers"
import { Toaster } from "sonner"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
	title: {
		default: SITE_NAME,
		template: `%s | ${SITE_NAME}`
	},
	description: "Social Chat App",
	icons: ["/assets/logo.png"]
}

export const viewport: Viewport = {
	initialScale: 1,
	minimumScale: 0.5,
	maximumScale: 2,
	width: 1200,
	height: 900,
	themeColor: "#0E0B18",
	colorScheme: "dark"
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<Providers>
					{children}
					<Toaster
						theme='dark'
						position='bottom-right'
						duration={1500}
					/>
				</Providers>
			</body>
		</html>
	)
}
