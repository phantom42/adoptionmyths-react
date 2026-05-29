import { render, screen } from '@testing-library/react';
import Raindrop from './Raindrop';
import { Raindrop as Droptype } from '@/types/raindrop';

const mock: Droptype = {
	_id: 'id 1',
	cover: 'cover 1',
	domain: 'domain 1',
	excerpt: 'excerpt 1',
	link: 'link 1',
	title: 'title 1',
	lastUpdate: 'last update 1',
	created: 'created 1',
	displayImages: true
}
async function renderComponent() {
	render(
		<Raindrop {...mock} />
	)
}

describe('raindrop component', () => {
	beforeEach(async () => {
		await renderComponent();
	})
	it('renders the title/link', () => {
		const title = screen.getByRole('link', { name: new RegExp(mock.title, 'i') });
		expect(title).toBeInTheDocument();
	})
	it('renders an image', () => {
		const img = screen.getByRole('img');
		expect(img).toBeInTheDocument();
	})
})