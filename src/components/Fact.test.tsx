import { render, screen } from '@testing-library/react';
import Fact from './Fact';
import React from 'react';

const mock = { fact: 'test fact' };
async function renderComponent(fact: React.ComponentProps<typeof Fact>) {
	render(
		<Fact {...fact} />
	)
}

describe('Fact component test', () => {
	it('renders the fact element correctly', async () => {
		await renderComponent(mock)

		const factLabel = screen.getByText(new RegExp('fact:', 'i'));
		const factText = screen.getByText(new RegExp(mock.fact, 'i'));

		expect(factLabel).toBeInTheDocument();
		expect(factText).toBeInTheDocument();
	})
})