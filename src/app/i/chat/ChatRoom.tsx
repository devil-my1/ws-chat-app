"use client"
import React, { useState, useEffect } from "react"
import MessageList from "./MessageList/MessageList"
import MessageInput from "./MessageInput/MessageInput"
import type { MessageType } from "@/types/message.type"

const socketConn = new WebSocket(
	"wss://tl7xcktz8a.execute-api.ap-northeast-1.amazonaws.com/production/"
)

export default function ChatRoom() {
	const [messagesData, setMessages] = useState<MessageType[]>([])

	useEffect(() => {
		socketConn.onmessage = e => {
			const recivedMessage = {
				me: false,
				message: JSON.parse(e.data).messageData
			}
			setMessages(prevMessages => [...prevMessages, recivedMessage])
		}
	}, [])

	const handleSendMessage = (message: string) => {
		const newMessage = {
			me: true, // Set to true when the message is from the current user
			message: message
		}

		setMessages(prevMessages => [...prevMessages, newMessage])
		const payload = {
			action: "sendmessage",
			message: message
		}

		socketConn.send(JSON.stringify(payload))
	}

	return (
		<div className='flex flex-col h-[100%] ml-4'>
			<MessageList messages={messagesData} />
			<MessageInput onSendMessage={handleSendMessage} />
		</div>
	)
}
