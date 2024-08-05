import { Nav } from "@/app/components/nav";

export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<main className="flex">
			{/* <Nav /> */}
			{children}
		</main>
	);
}
