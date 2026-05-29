import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchBox from './SearchBox';

type argumentsType = {
	displayImages: boolean,
	toggleHandler: () => void,
	searchHandler: () => void
}

const mock_empty: argumentsType = {
	displayImages: false,
	toggleHandler: vi.fn(),
	searchHandler: vi.fn()
}
const mock_display: argumentsType = {
	displayImages: true,
	toggleHandler: vi.fn(),
	searchHandler: vi.fn()
}

async function renderComponent(mock: argumentsType): Promise<void> {
	render(
		<SearchBox {...mock} />
	)
}
describe('SearchBox test', () => {
	beforeEach(async () => {

		await renderComponent(mock_empty);
	})
	describe('search box', () => {
		it('has a text input', async () => {
			const box = screen.getByRole('textbox', { name: /search articles/i });
			expect(box).toBeInTheDocument();
		})

		it('allows text to be entered', () => {
			const box = screen.getByRole('textbox', { name: /search articles/i });
			fireEvent.change(box, { target: { value: 'search' } });
			expect(box).toHaveValue('search');
		})

		it('calls the submit handler on submit', () => {
			const form = screen.getByTestId('search-form');
			expect(form).toBeInTheDocument();
			fireEvent.submit(form);
			expect(mock_empty.searchHandler).toHaveBeenCalled();
		})
	})
	describe('display images toggle', () => {
		it('has a checkbox', async () => {
			// await renderComponent(mock_empty);
			const checkbox = screen.getByRole('checkbox', { name: /display images/i });
			expect(checkbox).toBeInTheDocument();
		})
		it('calls the toggle handler and box is checked', async () => {
			const checkbox = screen.getByRole('checkbox', { name: /display images/i });
			await userEvent.click(checkbox);
			expect(mock_empty.toggleHandler).toHaveBeenCalled();
		})
	})
})
describe('search box test with value passed', () => {
	it('checks the display images box when passed true', async () => {
		await renderComponent(mock_display);
		const checkbox = screen.getByRole('checkbox', { name: /display images/i });
		expect(checkbox).toBeChecked();
	})
})