import { getAllMyths } from "./getAllMyths"

const apiKey = import.meta.env.VITE_API_KEY;

describe('getAllMyths tests', () => {
	const fetchSpy = vi.spyOn(globalThis, 'fetch').mockResolvedValueOnce(
		new Response(JSON.stringify({data: 'ok'}))
	)		
	afterAll(() => {
		fetchSpy.mockRestore();
	})
	it('verifies that getAllMyths is sent correctly', async () => {
		await getAllMyths();
		
		expect(fetchSpy).toHaveBeenCalledWith(
			expect.stringContaining('api/myths/all'),
			expect.objectContaining({
				method: 'GET',
				headers: {
					'x-api-key': `${apiKey}`
				}
			}),
		)
	})
})