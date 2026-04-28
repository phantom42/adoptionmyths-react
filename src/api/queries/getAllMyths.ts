import { Myth } from "@/types/myth";

export async function getAllMyths(): Promise<Myth[]> {
	const apiKey = import.meta.env.VITE_API_KEY;
	const headers = {
		"x-api-key": apiKey
	}
	const url = import.meta.env.VITE_API_URL + '/api/myths/all';
	const res = await fetch(url, { method: 'GET', headers });
	return res.json();
}
