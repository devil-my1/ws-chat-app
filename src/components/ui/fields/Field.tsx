import { forwardRef } from "react"

interface InputFieldProps {
	id: string
	label: string
	extra?: string
	placeholder: string
	name?: string
	variant?: string
	state?: "error" | "success"
	disabled?: boolean
	type?: string
	isNumber?: boolean
}

export const Field = forwardRef<HTMLInputElement, InputFieldProps>(
	(
		{
			label,
			id,
			extra,
			name,
			type,
			state,
			placeholder,
			disabled,
			isNumber,
			...rest
		},
		ref
	) => {
		return (
			<div className={`${extra}`}>
				<label
					htmlFor={id}
					className={`text-sm text-yellow-50 dark:text-yellow-50 ml-1.5 font-medium`}
				>
					{label}
				</label>
				<input
					name={name}
					ref={ref}
					disabled={disabled}
					type={type}
					id={id}
					placeholder={placeholder}
					className={`mt-2 flex w-full items-center justify-center rounded-lg border 
                border-border bg-white/0 p-3 text-base outline-none placeholder:text-yellow-50/30
                placeholder:font-normal duration-500 transition-colors focus:border-primary ${
									disabled === true
										? "!border-none !bg-gray-100 dark:!bg-white/5 dark:placeholder:!text-[255,255,255,0.15]"
										: state === "error"
											? "border-red-500 text-red-500 placeholder:text-red-500 dark:!border-red-400 dark:!text-red-400 dark:placeholder:!text-red-400"
											: state === "success"
												? "border-green-500 text-green-500 placeholder:text-green-500 dark:!border-green-400 dark:!text-green-400 dark:placeholder:!text-green-400"
												: ""
								}
                `}
					onKeyDown={e => {
						if (
							isNumber &&
							!/[0-9]/.test(e.key) &&
							e.key !== "Backspace" &&
							e.key !== "Tab" &&
							e.key !== "Enter" &&
							e.key !== "ArrowLeft" &&
							e.key !== "ArrowRight"
						) {
							e.preventDefault()
						}
					}}
					{...rest}
				></input>
			</div>
		)
	}
)

Field.displayName = "field"
