import { formPayload } from "@/types/formPayload";
export async function updateMyth(data: formPayload):Promise<void>{
	const apiKey = import.meta.env.VITE_API_KEY;
	const url = import.meta.env.VITE_API_URL + '/api/myths/update/' + data._id;
	const headers = {
		'x-api-key': apiKey,
		'Content-Type': 'application/json'
	}
	const res = await fetch(url, {
		method: 'PATCH',
		headers,
		body: JSON.stringify(data)
	})
	const result = await res.json();
	return result;
}