import { NO_INDEX_PAGE } from "@/const/seo.constants"
import type { Metadata } from "next"

export const metadata: Metadata = {
	title: "Friends",
	...NO_INDEX_PAGE
}

export default function FriendsPage() {
	return <div className=''></div>
}
