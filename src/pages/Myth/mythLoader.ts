import { getMyth } from "../../api/queries/getMyth";
import { Myth } from "@/types/myth";
import { LoaderFunctionArgs } from "react-router-dom";

export async function MythLoader({ params }: LoaderFunctionArgs): Promise<{singleMyth: Myth}> {
	const singleMyth = await getMyth(params.slug!);
	return {
		singleMyth
	}
}