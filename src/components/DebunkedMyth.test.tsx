import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import DebunkedMyth, { DebunkedMythProps } from './DebunkedMyth';


const mockBase: DebunkedMythProps = {
	debunkedMyth: {
		_id: 'test-id',
		myth: 'test-myth',
		fact: 'test-fact'
	}

}
const mockWithNav: DebunkedMythProps = {
	debunkedMyth: {
		_id: 'test-id',
		myth: 'test-myth',
		fact: 'test-fact',
		moreinfo: 'test-more-info'
	},
	nextMyth: vi.fn(),
	prevMyth: vi.fn()
}

const mockWithMoreInfo: DebunkedMythProps = {
	debunkedMyth: {
		_id: 'test-id',
		myth: 'test-myth',
		fact: 'test-fact'
	}
}
const previousMythText: string = 'previous myth';
const nextMythText: string = 'debunk another';
const learnMoreText: string = 'learn more about this fact';

vi.mock('./Fact', () => ({
	default: () => <div data-testid="mock-fact"></div>,
}))

vi.mock('./Myth', () => ({
	default: () => <div data-testid="mock-myth"></div>
}))

async function renderComponent(mockObj: DebunkedMythProps): Promise<void> {
	render(
		<MemoryRouter>
			<DebunkedMyth {...mockObj} />
		</MemoryRouter>
	)
}
describe('debunked myth renders correctly, no external link', () => {

	it('renders the base component correctly, learn more is not displayed', async () => {
		await renderComponent(mockBase);
		const mythComponent = screen.getByTestId(/mock-myth/i);
		const factComponent = screen.getByTestId(/mock-fact/i);
		const learnMoreLink = screen.queryByRole('link', {
			name: RegExp(learnMoreText, 'i')
		});

		expect(mythComponent).toBeInTheDocument();
		expect(factComponent).toBeInTheDocument();
		expect(learnMoreLink).not.toBeInTheDocument();


	})
})
describe('debunked myth renders correctly, with external link', () => {
	it('renders with functional next and previous links, learn more is displayed', async () => {
		await renderComponent(mockWithNav);
		const prevLink = screen.getByRole('link', {
			name: new RegExp(previousMythText, 'i')
		})
		const nextLink = screen.getByRole('link', {
			name: new RegExp(nextMythText, 'i')
		})
		expect(prevLink).toBeInTheDocument();
		expect(nextLink).toBeInTheDocument();

		await userEvent.click(nextLink);
		await userEvent.click(prevLink);

		expect(mockWithNav.nextMyth).toHaveBeenCalled();
		expect(mockWithNav.prevMyth).toHaveBeenCalled();

		const learnMoreLink = screen.getByRole('link', {
			name: RegExp(learnMoreText, 'i')
		});
		expect(learnMoreLink).toBeInTheDocument();
	})

})