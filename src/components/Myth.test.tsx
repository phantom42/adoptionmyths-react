import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Myth from './Myth';
import React from 'react';

async function renderComponent(mock: React.ComponentProps<typeof Myth>) {
	render(
		<Myth  {...mock} />
	)
}

const clipboardText = 'Copied!';
const mock = {
	myth: 'test myth',
	slug: 'test-slug',
};
describe('Myth component test', () => {
	it('renders the myth elements correctly', async () => {
		await renderComponent(mock);

		const mythLabel = screen.getByText(/myth:/i);
		const mythText = screen.getByText(new RegExp(mock.myth, 'i'));
		const button = screen.getByRole('button');

		expect(mythLabel).toBeInTheDocument();
		expect(mythText).toBeInTheDocument();
		expect(button).toHaveAttribute('data-slug', mock.slug);
	});

	it('copies slug and notifies user when link is clicked', async () => {
		Object.assign(navigator, {
			clipboard: { writeText: vi.fn().mockResolvedValue(undefined) }
		});

		await renderComponent(mock);
		await userEvent.click(screen.getByRole('button'));

		expect(screen.getByText(clipboardText)).toBeInTheDocument();
		expect(navigator.clipboard.writeText).toHaveBeenCalledWith(expect.stringMatching(mock.slug));
	});
})