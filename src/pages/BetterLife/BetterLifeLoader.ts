import { LoaderFunctionArgs } from "react-router-dom";
import { getRaindrops } from "../../api/queries/getRaindrops";
import { raindropApiResponse } from "@/types/raindropApiResponse";

export default async function getBetterLifeLoader({request}: LoaderFunctionArgs){
	const url = new URL(request.url);
	const page = Number(url.searchParams.get('page') ?? 0);
	const query = url.searchParams.get('q') ?? '';
	const allRaindropsList:raindropApiResponse = await getRaindrops({page: page, query: query});
	return {
		allRaindropsList
	};
}