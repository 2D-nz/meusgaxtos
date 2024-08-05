import Image from "next/image";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Home() {
	return (
		<main className="flex flex-col items-center h-screen justify-center gap-5">
			<h1 className="text-4xl">Meus Gastos</h1>
			<div className="grid gap-5">
				<Button asChild>
					<Link href="/login">Login</Link>
				</Button>

				<Link
					href="/register"
					className={cn(buttonVariants({ variant: "secondary" }), "-black")}
				>
					Cadastre-se
				</Link>
			</div>
		</main>
	);
}
