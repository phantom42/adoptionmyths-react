import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import RandomMythPage from './RandomMythPage';
import { DebunkedMythProps } from '@/components/DebunkedMyth';
import { Myth } from '@/types/myth';


const mockMyth: DebunkedMythProps = {
	debunkedMyth: {
		_id: 'test-id',
		myth: 'test-myth',
		fact: 'test-fact'
	}
}
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

vi.mock('../../components/DebunkedMyth', () => ({
	default: () => <div data-testid="debunked-myth"></div>
}));

vi.mock('../../components/SocialLinks', () => ({
	default: () => <div data-testid="social-links"></div>
}));

vi.mock('react-router-dom', async () => {
	const actual = await vi.importActual('react-router-dom');
	return {
		...actual,
		useLoaderData: () => ({ randomMythList: mockMythList })
	};
});


const mockBase: DebunkedMythProps = {
	debunkedMyth: {
		_id: 'test-id',
		myth: 'test-myth',
		fact: 'test-fact'
	}

}

async function renderComponent(): Promise<void> {
	render(
		<MemoryRouter>
			<RandomMythPage />
		</MemoryRouter>
	)
}

describe('renders a random myth and social links', () => {
	beforeEach(() => {
		renderComponent();
	})
	it('renders a debunked myth', () => {
		const debunkedMythComponent = screen.getByTestId(/debunked-myth/i);

		expect(debunkedMythComponent).toBeInTheDocument();
	})
	it('renders social links', () => {
		const socialLinksComponent = screen.getByTestId(/social-links/i);
		expect(socialLinksComponent).toBeInTheDocument();

	})
	it('renders a link to the answer', () => {
		const answerDisplay = screen.getByRole('heading', { level: 1 });
		expect(answerDisplay).toBeInTheDocument();
		expect(answerDisplay).toHaveTextContent('So What\'s');
	})
})