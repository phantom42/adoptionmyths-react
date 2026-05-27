import { getRandomMyth } from "./getRandomMyth";

const apiKey = import.meta.env.VITE_API_KEY;

describe('getRandomMyth tests', () => {
	const fetchSpy = vi.spyOn(globalThis, 'fetch').mockResolvedValueOnce(
		new Response(JSON.stringify({data: 'ok'}))
	)		
	const key = 'test'
	afterAll(() => {
		fetchSpy.mockRestore();
	})
	it('verifies that getMyth is sent correctly', async () => {
		await getRandomMyth();
		expect(fetchSpy).toHaveBeenCalledWith(
			expect.stringContaining('api/myths/random'),
			expect.objectContaining({
				method: 'GET',
				headers: {
					'x-api-key': `${apiKey}`
				}
			}),
		)
	})
})