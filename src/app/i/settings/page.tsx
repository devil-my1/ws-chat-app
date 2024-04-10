import { NO_INDEX_PAGE } from "@/const/seo.constants"
import type { Metadata } from "next"

export const metadata: Metadata = {
	title: "Settings",
	...NO_INDEX_PAGE
}

export default function SettingsPage() {
	return <div className=''></div>
}
