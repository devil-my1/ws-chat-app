import { NO_INDEX_PAGE } from "@/const/seo.constants"
import type { Metadata } from "next"

export const metadata: Metadata = {
	title: "Call",
	...NO_INDEX_PAGE
}

export default function CallPage() {
	return <div className=''></div>
}
