import cn from "clsx"
import { InputHTMLAttributes, forwardRef } from "react"

type TypeTransparentField = InputHTMLAttributes<HTMLInputElement>

export const TransparentField = forwardRef<
	HTMLInputElement,
	TypeTransparentField
>(({ className, ...rest }, ref) => {
	return (
		<input
			type='text'
			ref={ref}
			{...rest}
			className={cn(
				"border-0 bg-[#0000] border-none focus:outline-0 w-full",
				className
			)}
		/>
	)
})

TransparentField.displayName = "TransparentField"
