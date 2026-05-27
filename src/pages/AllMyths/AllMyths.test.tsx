import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AllMyths from './AllMyths';
import { Myth } from '@/types/myth';

const mockMythList: Myth[] = [
	{
		_id: 'test-id-1',
		myth: 'test-myth-1',
		fact: 'test-fact-1'
	},
	{
		_id: 'test-id-2',
		myth: 'test-myth-2',
		fact: 'test-fact-2'
	}
]

async function renderComponent() {
	render(
		<MemoryRouter>
			<AllMyths />
		</MemoryRouter>
	)
}
vi.mock('../../components/SocialLinks', () => ({
	default: () => <div data-testid="social-links"></div>
}));

vi.mock('react-router-dom', async () => {
	const actual = await vi.importActual('react-router-dom');
	return {
		...actual,
		useLoaderData: () => ({ allMythsList: mockMythList })
	};
});

describe('All Myths page', () => {

	beforeEach(async () => {
		await renderComponent();
	})
	it('renders 2 myths', () => {
		const myth_1 = screen.getByText(/myth\-1/i);
		const myth_2 = screen.getByText(/myth\-2/i);

		expect(myth_1).toBeInTheDocument();
		expect(myth_2).toBeInTheDocument();
	})
	it('renders the social links', () => {
		const socialLinksComponent = screen.getByTestId(/social-links/i);
		expect(socialLinksComponent).toBeInTheDocument();
	})
})
