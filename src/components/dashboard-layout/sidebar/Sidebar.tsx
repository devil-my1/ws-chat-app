"use client"
import styles from "./Sidebar.module.scss"
import cn from "clsx"
import { MENU } from "./menu.data"
import { MenuItem } from "./MenuItem"
import { Sun, LogOut } from "lucide-react"
import { usePathname, useRouter } from "next/navigation"
import { toast } from "sonner"
import { DASHBOARD_URL } from "@/config/pages-url.config"
import { useMutation } from "@tanstack/react-query"
import { Amplify } from "aws-amplify"
import { awsConfig } from "@/config/aws-config"
import { signOut } from "aws-amplify/auth"

Amplify.configure({
	Auth: {
		Cognito: {
			userPoolId: awsConfig.USER_POOL_ID,
			userPoolClientId: awsConfig.USER_POOL_CLIENT_ID
		}
	}
})

const clearAllCookies = () => {
	// Get all cookies
	const cookies = document.cookie.split(";")

	// Iterate over cookies and remove each one
	cookies.forEach(cookie => {
		const cookieParts = cookie.split("=")
		const cookieName = cookieParts[0].trim()
		document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`
	})
}

// Call the function to clear all cookies
export function Sidebar() {
	const currentActiveTab = usePathname().split("/")[2]

	const { push } = useRouter()
	const { mutate } = useMutation({
		mutationKey: ["logout"],
		mutationFn: () => signOut({ global: true }),
		onSuccess: () => {
			clearAllCookies()
			toast.success("Successfully logouted!")
			push(DASHBOARD_URL.AUTH)
		}
	})

	return (
		<nav className={styles.sidebar}>
			<div
				className={cn(
					styles.logoContainer,
					"mt-4 rounded-full cursor-pointer overflow-hidden flex items-center justify-center"
				)}
			>
				<img
					className='w-full h-full object-cover pointer-events-none '
					src='/assets/logo.png'
					alt='logo'
				/>
			</div>
			<div className={styles.menu}>
				{MENU.map(item => (
					<MenuItem
						key={item.name}
						item={item}
						cls={cn(styles.menuItem, {
							[styles.active]: item.name.toLowerCase() === currentActiveTab
						})}
					/>
				))}
			</div>
			<div
				className={cn(
					styles.themeSwitch,
					"flex gap-4 flex-col justify-center items-center"
				)}
			>
				<button
					className={"hover:text-yellow-400 transition-colors duration-200"}
				>
					<Sun />
				</button>
				<button
					onClick={() => {
						mutate()
					}}
				>
					<LogOut
						className='hover:text-teal-400/70 transition-colors duration-200'
						size={24}
					/>
				</button>
			</div>
		</nav>
	)
}
