import { screen, render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ErrorPage from "./ErrorPage";

vi.mock('../../components/SocialLinks', () => ({
	default: () => <div data-testid="social-links"></div>
}));
async function renderComponent() {
	render(
		<MemoryRouter>
			<ErrorPage />
		</MemoryRouter>
	)
}
describe("error page", () => {
	beforeEach(async () => {
		await renderComponent();
	})
	it('renders the notice', () => {
		const notice = screen.getByText(/something broke/i);
		expect(notice).toBeInTheDocument();
	})
	it('renders the link', () => {
		const link = screen.getByRole('link', {
			name: /hopefully at least/i
		})
		expect(link).toBeInTheDocument();
	})
	it('renders the social links', () => {
		const socialLinks = screen.getByTestId('social-links');
		expect(socialLinks).toBeInTheDocument();
	})
})