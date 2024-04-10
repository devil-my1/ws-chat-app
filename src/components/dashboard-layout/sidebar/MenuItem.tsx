import { IMenuItem } from "./menu.if"
import Link from "next/link"
import cn from "clsx"

export function MenuItem({ item, cls }: { item: IMenuItem; cls: string }) {
	return (
		<div>
			<Link
				href={item.link}
				className={cn(cls)}
			>
				<item.icon />
			</Link>
		</div>
	)
}
