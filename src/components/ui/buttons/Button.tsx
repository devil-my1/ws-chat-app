import cn from "clsx"
import type { ButtonHTMLAttributes, PropsWithChildren } from "react"
import Loader from "../Loader"

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
	isLoading?: boolean
}

export function Button({
	children,
	className,
	isLoading,
	...rest
}: PropsWithChildren<IButton>) {
	return (
		<button
			className={cn(
				"linear rounded bg-transparent border border-[255,255,255,0.25] py-2 px-7 text-base font-medium text-teal-200 transition hover:bg-purple-400/10 hover:text-red-100 active:bg-brand-700",
				className
			)}
			{...rest}
		>
			{isLoading ? <Loader /> : children}
		</button>
	)
}
