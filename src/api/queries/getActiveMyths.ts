import { Myth } from "@/types/myth";

export async function getActiveMyths(): Promise<Myth[]> {
	const apiKey = import.meta.env.VITE_API_KEY;
	const headers = {
		"x-api-key": apiKey
	}
	const url = import.meta.env.VITE_API_URL + '/api/myths/active';
	const res = await fetch(url, { method: 'GET', headers });
	return res.json();
}
