import { getMyth } from "./getMyth";

const apiKey = import.meta.env.VITE_API_KEY;

describe('getMyth tests', () => {
	const fetchSpy = vi.spyOn(globalThis, 'fetch').mockResolvedValueOnce(
		new Response(JSON.stringify({data: 'ok'}))
	)		
	const key = 'test'
	afterAll(() => {
		fetchSpy.mockRestore();
	})
	it('verifies that getMyth is sent correctly', async () => {
		await getMyth('test');
		
		expect(fetchSpy).toHaveBeenCalledWith(
			expect.stringContaining(`api/myths/${key}`),
			expect.objectContaining({
				method: 'GET',
				headers: {
					'x-api-key': `${apiKey}`
				}
			}),
		)
	})
})