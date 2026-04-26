import { getMyth } from "../../api/queries/getMyth";

export async function MythLoader() {
	const singleMyth = await getMyth();
	console.log(singleMyth);
	return {
		singleMyth
	}

}