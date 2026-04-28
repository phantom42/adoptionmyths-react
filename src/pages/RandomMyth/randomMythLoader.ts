import { getRandomMyth } from "../../api/queries/getRandomMyth";
import { Myth } from "@/types/myth";
export async function randomMythLoader(): Promise<{randomMyth: Myth}> {
	const randomMyth  = await getRandomMyth();
	
	return {
		randomMyth
	}
}