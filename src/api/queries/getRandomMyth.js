export async function getRandomMyth() {
	const apiKey = import.meta.env.VITE_API_KEY;
	const headers = {
		"x-api-key": apiKey	
	}
	const res = await fetch('/api/myths/random', {method: 'GET', headers: headers});
	const data = await res.json();

	return data;
}