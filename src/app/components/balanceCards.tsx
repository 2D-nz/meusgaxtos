import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Info } from "lucide-react";
export function BalanceCards() {
	const user = {
		balance: 100.5,
		programmed: 10000.0,
	};
	return (
		<div className="flex justify-center gap-5">
			<Card className="">
				<CardHeader className="">
					<CardTitle className="">
						{" "}
						<p>Saldo Atual</p>
					</CardTitle>
				</CardHeader>
				<CardContent className="font-bold ">
					<p>R$ {user.balance.toFixed(2)}</p>
				</CardContent>
			</Card>
			<Card className="">
				<CardHeader className="flex gap-0">
					<CardTitle className="flex lg:gap-2 gap-1">
						Saldo Mês <Info />
					</CardTitle>
					<Info className="absolute top-7 right-5" size={15} />
				</CardHeader>
				<CardContent className=" font-bold">
					<p className="">R$ {user.programmed.toFixed(2)}</p>
				</CardContent>
			</Card>
		</div>
	);
}
