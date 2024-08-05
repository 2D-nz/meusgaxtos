import { BalanceCards } from "@/app/components/balanceCards";
import { RecentStatements } from "@/app/components/recentStatements";

export default function Page() {
	return (
		<div className="p-5 flex flex-col  gap-5">
			<h1 className="text-left text-3xl">Olá, Lorena</h1>
			<BalanceCards />
			<RecentStatements />
		</div>
	);
}
