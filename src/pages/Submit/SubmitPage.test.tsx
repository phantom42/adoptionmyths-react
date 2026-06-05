import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import SubmitPage from "./SubmitPage";
import userEvent from "@testing-library/user-event";
import { submitForm } from "../../api/queries/submitMyth";


const handleSubmit = vi.fn();
const handleReset = vi.fn();

vi.mock('../../api/queries/submitMyth', () => ({
	submitForm: vi.fn().mockResolvedValue({ ok: true })
}));
vi.mock('@marsidev/react-turnstile', () => ({
	Turnstile: ({ onSuccess }: { onSuccess: (token: string) => void }) => (
		<button type="button" data-testid="turnstile" onClick={() => onSuccess('test-token')}>
			Complete Captcha
		</button>
	)
}));

async function renderComponent() {
	render(
		<SubmitPage />
	)
}

describe('Submit a myth page', () => {
	beforeEach(async () => {
		await renderComponent();
	})
	it('renders the heading', () => {
		const headingText = screen.getByText(new RegExp('the myth and fact', 'i'));
		expect(headingText).toBeInTheDocument();
	})
	it('renders the myth input', () => {
		const mythInput = screen.getByPlaceholderText(/what do people assume/i);
		expect(mythInput).toBeInTheDocument();
	})
	it('renders the fact input', () => {
		const mythInput = screen.getByPlaceholderText(/what is the truth/i);
		expect(mythInput).toBeInTheDocument();
	})
	it('renders the more info input', () => {
		const moreInfo = screen.getByPlaceholderText(/optional link to more info/i);
		expect(moreInfo).toBeInTheDocument();
	})
	it('renders the name input', () => {
		const submittedby = screen.getByPlaceholderText(/your name/i);
		expect(submittedby).toBeInTheDocument();
	})
	it('renders the email input', () => {
		const emailaddress = screen.getByPlaceholderText(/your email/i);
	})
})
describe('submit button logic and renders', () => {
	beforeEach(async () => {
		await renderComponent();
	})
	it('does not render submit button by default', async () => {
		const submitButton = screen.queryByRole('button', { name: /save/i });
		expect(submitButton).not.toBeInTheDocument();
	})
	it('displays save button once turnstile is successful and buttons call and update state as expected', async () => {
		const mockButton = screen.getByRole('button', { name: /complete/i });
		expect(mockButton).toBeInTheDocument();
		await userEvent.click(mockButton);
		const submitButton = screen.getByRole('button', { name: /submit/i });
		expect(submitButton).toBeInTheDocument();
		fireEvent.submit(submitButton.closest('form')!);
		await waitFor(() => expect(submitForm).toHaveBeenCalled());
		const submitAnother = screen.getByRole('button', { name: /submit another/i });
		const message = screen.getByText(/thank you/i);
		expect(submitAnother).toBeInTheDocument();
	})
	// the code for the reset button exists in this page, but is never rendered
})