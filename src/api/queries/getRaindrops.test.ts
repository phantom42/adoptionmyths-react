import { getRaindrops } from "./getRaindrops";

const apiKey = import.meta.env.VITE_API_KEY;
type mock_type = {
	page: number,
	query: string
}
const mockData: mock_type = {
	page: 0,
	query: ''
}

describe('getRaindrops tests', () => {
	const fetchSpy = vi.spyOn(globalThis, 'fetch').mockResolvedValueOnce(
		new Response(JSON.stringify({data: 'ok'}))
	)	
	afterAll(() => {
		fetchSpy.mockRestore();
	})

	it('verifies that getRaindrops is called correctly', async () => {
		await getRaindrops({...mockData})
		expect(fetchSpy).toHaveBeenCalledWith(
			expect.stringContaining('api/raindrops/search'),
			expect.objectContaining({
				method: 'GET',
				headers: {
					'x-api-key': `${apiKey}`
				}
			})
		)
	})
})