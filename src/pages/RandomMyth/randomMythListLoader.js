import { getRandomListOfMyths } from "../../api/queries/getRandomListOfMyths";

export async function getRandomMythListLoader(){
	const randomMythList = await getRandomListOfMyths();
	return {
		randomMythList
	};

}