import { getRandomListOfMyths } from "../../api/queries/getRandomListOfMyths";
import { Myth } from "@/types/myth";

export async function getRandomMythListLoader(): Promise<{randomMythList: Myth[]}> {
	const randomMythList: Myth[] = await getRandomListOfMyths();
	return {
		randomMythList
	};

}