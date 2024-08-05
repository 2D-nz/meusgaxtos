import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Info } from "lucide-react";
import { Statements } from "./statements";

export function RecentStatements() {
	return (
		<Card className="">
			<CardHeader>
				<CardTitle className="flex">
					<>
						Transações programadas <Info className="ml-2 " />
					</>
				</CardTitle>
				<CardDescription></CardDescription>
			</CardHeader>
			<CardContent></CardContent>
			<CardFooter className="flex justify-between">
				<Statements />
			</CardFooter>
		</Card>
	);
}
