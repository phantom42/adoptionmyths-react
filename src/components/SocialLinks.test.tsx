import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import SocialLinks from './SocialLinks';

async function renderComponent(displayDebunk: Boolean = false): Promise<void> {
	let props: object = {};
	if (displayDebunk === true) {
		props = { displayDebunk: true }
	}
	render(
		<MemoryRouter>
			<SocialLinks {...props} />
		</MemoryRouter>
	);
}


const links: string[] = ['facebook', 'instagram', 'tiktok', '@phantomadoptee'];

describe('renders the social links correctly, displayDebunk = false', () => {
	beforeEach(() => {
		renderComponent(false);
	});
	it('renders name and all links', async () => {

		const nameDisplay = screen.getByText(new RegExp('phantomadoptee', 'i'));
		expect(nameDisplay).toBeInTheDocument();

		for (let social of links) {
			const link = screen.getByRole('link', {
				name: new RegExp(social, 'i')
			});
			expect(link).toBeInTheDocument();
		}
	})
	it('does not render debunk another link', () => {
		const debunkLink = screen.queryByRole('link', {
			name: /Debunk a myth/i
		})
		expect(debunkLink).not.toBeInTheDocument();
	})
})
describe('renders correctly without displaydebug', () => {
	beforeEach(() => {
		renderComponent(true);
	});
	it('renders the debug a myth link', () => {
		const debunkLink = screen.queryByRole('link', {
			name: new RegExp('debunk a myth', 'i')
		})
		expect(debunkLink).toBeInTheDocument();
	})
})