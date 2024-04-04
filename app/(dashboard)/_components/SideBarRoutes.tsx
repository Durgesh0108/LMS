"use client";
// "use server";

import React from "react";
import SideBarItem from "./SideBarItem";
import {
	Layout,
	Compass,
	Star,
	User,
	Book,
	List,
	BarChart,
} from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

const guestRoutes = [
	{
		icon: Layout,
		label: "DashBoard",
		href: "/",
	},
	{
		icon: Compass,
		label: "Browse",
		href: "/search",
	},
];

const teacherRoutes = [
	{
		icon: List,
		label: "Courses",
		href: "/teacher/courses",
	},
	{
		icon: BarChart,
		label: "Analytics",
		href: "/teacher/analytics",
	},
];

export const SidebarRoutes = () => {
	const pathName = usePathname();
	const router = useRouter();

	const isTeacherPage = pathName?.includes("/teacher");

	const routes = isTeacherPage ? teacherRoutes : guestRoutes;

	return (
		<div className="flex flex-col ">
			{routes.map((route) => (
				<SideBarItem
					key={route.href}
					icon={route.icon}
					label={route.label}
					href={route.href}
				/>
			))}
		</div>
	);
};
