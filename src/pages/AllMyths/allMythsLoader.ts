import { getAllMyths } from "../../api/queries/getAllMyths";
import type { Myth } from "@/types/myth";

export async function getAllMythsLoader():Promise<{allMythsList:Myth[]}>{
	const allMythsList = await getAllMyths();
	return {
		allMythsList
	};
}