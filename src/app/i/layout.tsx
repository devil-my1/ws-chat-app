import { PropsWithChildren } from "react"

import DasboardLayout from "@/components/dashboard-layout/DashboardLayout"

export default function Layout({ children }: PropsWithChildren<unknown>) {
	return <DasboardLayout>{children}</DasboardLayout>
}
