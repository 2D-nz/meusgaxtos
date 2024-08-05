import { badgeVariants } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function Nav() {
	return (
		<div className="h-screen flex flex-col">
			<Link href="/home" className="">
				Home
			</Link>
			<Link href="/home" className="">
				Home
			</Link>
			<Link href="/home" className="">
				Home
			</Link>
			<Link href="/home" className="">
				Home
			</Link>
			<Link href="/home" className="">
				Home
			</Link>
		</div>
	);
}
