import { PropsWithChildren } from "react"
import { Sidebar } from "./sidebar/Sidebar"

export default function DasboardLayout({
	children
}: PropsWithChildren<unknown>) {
	return (
		<div className='grid min-h-screen 2xl:grid-cols-[0.1fr_6fr] grid-cols-[0.5fr_10fr]'>
			<Sidebar />
			<main className='overflow-x-hidden max-h-screen relative'>
				{children}
			</main>
		</div>
	)
}
