"use client"
import React, { ChangeEvent, useState } from "react"
import "./MessageInput.scss"
import { Send } from "lucide-react"

type MessageInputProps = {
	onSendMessage: (message: string) => void
}

export default function MessageInput({ onSendMessage }: MessageInputProps) {
	const [inputText, setInputText] = useState("")

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		setInputText(e.target.value)
	}

	const handleSendMessage = () => {
		if (inputText.trim() !== "") {
			onSendMessage(inputText)
			setInputText("")
		}
	}

	return (
		<div className='message-input'>
			<input
				type='text'
				value={inputText}
				onChange={handleInputChange}
				onKeyDown={e => {
					if (e.key === "Enter") {
						handleSendMessage()
					}
				}}
			/>
			<button
				className='flex items-center gap-2 hover:bg-gray-700 transition-all duration-200 hover:text-[#f1623e]'
				onClick={handleSendMessage}
			>
				<Send size={16} />
				Send
			</button>
		</div>
	)
}
