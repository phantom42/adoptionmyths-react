import { render, screen } from "@testing-library/react";
import BetterLife from "./BetterLife";
import { MemoryRouter } from "react-router-dom";
import { Raindrop as Droptype } from '../../types/raindrop';
import { raindropApiResponse } from "@/types/raindropApiResponse";

const mockDrop: Droptype[] = [
	{
		_id: 'id 1',
		cover: 'cover 1',
		domain: 'domain 1',
		excerpt: 'excerpt 1',
		link: 'link 1',
		title: 'title 1',
		lastUpdate: 'last update 1',
		created: 'created 1'
	},
	{
		_id: 'id 2',
		cover: 'cover 2',
		domain: 'domain 2',
		excerpt: 'excerpt 2',
		link: 'link 2',
		title: 'title 2',
		lastUpdate: 'last update 2',
		created: 'created 2'
	}
]
const mockResponse: raindropApiResponse = {
	count: 2,
	items: mockDrop
}

vi.mock('../../components/SocialLinks', () => ({
	default: () => <div data-testid="social-links"></div>
}));
vi.mock('../../components/SearchBox', () => ({
	default: () => <div data-testid="search-box"></div>
}));
vi.mock('../../components/Raindrop', () => ({
	default: () => <div data-testid="raindrop"></div>
}));

vi.mock('react-router-dom', async () => {
	const actual = await vi.importActual('react-router-dom');
	return {
		...actual,
		useLoaderData: () => ({ allRaindropsList: mockResponse })
	}
})

async function renderComponent() {
	render(
		<MemoryRouter>
			<BetterLife />
		</MemoryRouter>
	)
}

describe('better life page', () => {
	beforeEach(async () => {
		await renderComponent()
	})
	it('renders the heading', () => {
		const headline = screen.getByText(/adoption means/i);
		const subtext = screen.getByText(/guarantee a better life, only a different one/i);
		expect(headline).toBeInTheDocument();
		expect(subtext).toBeInTheDocument();
	})
	it('renders a search box', () => {
		const searchBox = screen.getByTestId('search-box');
		expect(searchBox).toBeInTheDocument();
	})
	it('renders 2 raindrops', async () => {
		const drops = await screen.findAllByTestId('raindrop');
		expect(drops.length).toEqual(2);
	})
})