import { getRandomListOfMyths } from "./getRandomListOfMyths";

const apiKey = import.meta.env.VITE_API_KEY;

describe('getRandomListOfMyth tests', () => {
	const fetchSpy = vi.spyOn(globalThis, 'fetch').mockResolvedValueOnce(
		new Response(JSON.stringify({data: 'ok'}))
	)		
	const key = 'test'
	afterAll(() => {
		fetchSpy.mockRestore();
	})
	it('verifies that getMyth is sent correctly', async () => {
		await getRandomListOfMyths();
		expect(fetchSpy).toHaveBeenCalledWith(
			expect.stringContaining('api/myths/randomized'),
			expect.objectContaining({
				method: 'GET',
				headers: {
					'x-api-key': `${apiKey}`
				}
			}),
		)
	})
})