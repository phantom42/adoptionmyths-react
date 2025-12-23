import { getRandomMyth } from "../../api/queries/getRandomMyth";

export async function randomMythLoader() {
	const randomMyth  = await getRandomMyth();
	
	return {
		randomMyth
	}
}