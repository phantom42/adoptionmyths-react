import { getAllMyths } from "../../api/queries/getAllMyths";

export async function getAllMythsLoader(){
	const allMythsList = await getAllMyths();
	return {
		allMythsList
	};
}