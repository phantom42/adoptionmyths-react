export async function getRandomListOfMyths() {
	const apiKey = import.meta.env.VITE_API_KEY;
	const headers = {
		"x-api-key": apiKey	
	}
	const url = import.meta.env.VITE_API_URL + '/api/myths/randomized';
	console.log(url);
	const res = await fetch(url, {method: 'GET', headers: headers});
	const data = await res.json();

	return data;
}