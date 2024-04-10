import { NO_INDEX_PAGE } from "@/const/seo.constants"
import type { Metadata } from "next"
import CurrentUser from "./CurrentUser"
import { ChatList } from "./ChatList"
import ChatRoom from "./ChatRoom"

export const metadata: Metadata = {
	title: "Chat",
	...NO_INDEX_PAGE
}

export default function ChatPage() {
	return (
		<div
			className='grid h-full'
			style={{
				gridTemplateColumns: ".7fr 3fr"
			}}
		>
			<div className='border-r border-brandLinear'>
				<CurrentUser />
				<hr className=' border-brandLinear' />
				<ChatList />
			</div>
			<div>
				<ChatRoom />
			</div>
		</div>
	)
}
