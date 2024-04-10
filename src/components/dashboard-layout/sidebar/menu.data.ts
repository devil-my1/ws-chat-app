import type { IMenuItem } from "./menu.if"
import { MessagesSquareIcon, PhoneCall, Settings, Users2 } from "lucide-react"

import { DASHBOARD_URL } from "@/config/pages-url.config"

export const MENU: IMenuItem[] = [
	{
		icon: Users2,
		link: DASHBOARD_URL.FRIENDS,
		name: "Friends"
	},
	{
		icon: PhoneCall,
		link: DASHBOARD_URL.CALL,
		name: "Call"
	},
	{
		icon: MessagesSquareIcon,
		link: DASHBOARD_URL.CHAT,
		name: "Chat"
	},
	{
		icon: Settings,
		link: DASHBOARD_URL.SETTINGS,
		name: "Settings"
	}
]
