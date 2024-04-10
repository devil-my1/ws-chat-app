import type { MessageType } from "@/types/message.type"
import "./MessageList.scss"
import cn from "clsx"

export default function MessageList({ messages }: { messages: MessageType[] }) {
	return (
		<div className='message-list'>
			{messages.map((message, index) => {
				const messageClass = message?.me ? "my-message" : "other-message"
				return (
					<div
						key={index}
						className={cn(message, messageClass)}
					>
						<span>{message.message}</span>
					</div>
				)
			})}
		</div>
	)
}
