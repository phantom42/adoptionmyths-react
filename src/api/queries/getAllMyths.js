export async function getAllMyths() {
	const apiKey = import.meta.env.VITE_API_KEY;
	const headers = {
		"x-api-key": apiKey	
	}
	const url = import.meta.env.VITE_API_URL + '/api/myths/all';
	const res = await fetch(url, {method: 'GET', headers: headers});
	const data = await res.json();

	return data;
}