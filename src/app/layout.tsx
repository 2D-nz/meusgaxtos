import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "./components/nav";

export const metadata: Metadata = {
	title: "Meus Gastos",
	description: "Gerenciador de gastos",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-BR">
			<body className="bg-black text-white flex">{children}</body>
		</html>
	);
}
