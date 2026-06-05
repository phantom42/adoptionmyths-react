import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import EditableMyth from "./EditableMyth";
import { Myth as MythType } from '@/types/myth';
import { updateMyth } from "../api/queries/updateMyth";

const mockMyth: MythType = {
	_id: 'id',
	myth: 'myth test 1',
	fact: 'fact test 1',
	slug: 'slug-test-1',
	image: 'image.png',
	moreinfo: 'more info 1',
	submitted_by: 'submitted-test-1',
	email_address: 'email@address-1',
	active: true
}

const handleSubmit = vi.fn();
const handleReset = vi.fn();

vi.mock('@marsidev/react-turnstile', () => ({
	Turnstile: ({ onSuccess }: { onSuccess: (token: string) => void }) => (
		<button type="button" data-testid="turnstile" onClick={() => onSuccess('test-token')}>
			Complete Captcha
		</button>
	)
}));

vi.mock('../api/queries/updateMyth', () => ({
	updateMyth: vi.fn().mockResolvedValue({ ok: true })
}));

async function renderComponent() {
	render(
		<EditableMyth submittedMyth={mockMyth} />
	)
}

describe('editable myth tests', () => {
	beforeEach(async () => {
		await renderComponent();
	})
	it('renders the heading', () => {
		const headingText = screen.getByText(new RegExp('the myth and fact', 'i'));
		expect(headingText).toBeInTheDocument();
	})
	it('renders the myth input', () => {
		const mythInput = screen.getByLabelText(/the myth\:/i)
		expect(mythInput).toBeInTheDocument();
		expect(mythInput).toHaveValue('myth test 1');
	})
	it('renders the fact input', () => {
		const mythInput = screen.getByLabelText(/the fact\:/i)
		expect(mythInput).toBeInTheDocument();
		expect(mythInput).toHaveValue('fact test 1');
	})
	it('renders the more info input', () => {
		const moreinfo = screen.getByLabelText(/more info\:/i)
		expect(moreinfo).toBeInTheDocument();
		expect(moreinfo).toHaveValue('more info 1');
	})
	it('renders the checkbox and sets the the status', async () => {
		const checkbox = screen.getByRole('checkbox', { name: /active/i });
		expect(checkbox).toBeInTheDocument();
		expect(checkbox).toBeChecked();
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
	it('displays save button once turnstile is successful', async () => {
		const mockButton = screen.getByRole('button', { name: /complete/i });
		expect(mockButton).toBeInTheDocument();
		await userEvent.click(mockButton);
		const submitButton = screen.getByRole('button', { name: /save/i });
		expect(submitButton).toBeInTheDocument();
		fireEvent.submit(submitButton.closest('form')!);
		await waitFor(() => expect(updateMyth).toHaveBeenCalled());
	})
	// the code for the reset button exists in this page, but is never rendered
})