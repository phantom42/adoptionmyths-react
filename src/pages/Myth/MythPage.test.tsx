import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import MythPage from './MythPage';
import { DebunkedMythProps } from '@/components/DebunkedMyth';


const mockMyth: DebunkedMythProps = {
	debunkedMyth: {
		_id: 'test-id',
		myth: 'test-myth',
		fact: 'test-fact'
	}
}

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
		useLoaderData: () => ({ singleMyth: mockMyth })
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
			<MythPage />
		</MemoryRouter>
	)
}

describe('renders a full myth and social links', () => {

	beforeEach(async () => {
		await renderComponent();
	})
	it('renders a debunked myth', () => {
		const debunkedMythComponent = screen.getByTestId(/debunked-myth/i);

		expect(debunkedMythComponent).toBeInTheDocument();
	})
	it('renders social links', () => {
		const socialLinksComponent = screen.getByTestId(/social-links/i);
		expect(socialLinksComponent).toBeInTheDocument();

	})
})