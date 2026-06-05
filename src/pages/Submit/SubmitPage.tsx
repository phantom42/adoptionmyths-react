import { useState, useRef } from "react";
import { Turnstile } from "@marsidev/react-turnstile";
import { formPayload } from "@/types/formPayload";
import { submitForm } from "../../api/queries/submitMyth";
import { STATUSES } from "../../types/statuses";

export default function SubmitPage() {
	const turnstileKey = import.meta.env.VITE_TURNSTILE_KEY;
	const [isHuman, setIsHuman] = useState(false);
	const [token, setToken] = useState('');
	const [status, setStatus] = useState(STATUSES.OK);

	const formRef = useRef<HTMLFormElement>(null);
	const onTurnstileSuccess = (token: string): void => {
		setIsHuman(true);
		setToken(token);
	}
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
		e.preventDefault();
		const data = new FormData(e.currentTarget);
		const myth = data.get('myth') as string;
		const fact = data.get('fact') as string;
		const moreInfo = data.get('moreInfo') as string;

		const submitted_by = data.get('submittedBy') as string;
		const email_address = data.get('emailAddress') as string;
		const validationToken = token
		const payload: formPayload = {
			myth,
			fact,
			moreInfo,
			submitted_by,
			email_address,
			validationToken
		}
		setStatus(STATUSES.SUBMITTING);
		const result = await submitForm(payload);
		setStatus(STATUSES.COMPLETE);
	}
	const handleReset = (): void => {
		formRef.current?.reset();
		setIsHuman(false);
		setToken('');
		setStatus(STATUSES.OK);
	}
	return (
		<div className="min-h-screen flex flex-col">
			<div className="flex-1 flex items-center justify-center">
				<form className="form box w-1/2 items-center justify-center" onSubmit={handleSubmit} id="mythForm" name="mythForm" ref={formRef}>
					<h1 className="text-2xl">Submit a new myth and fact</h1>
					<fieldset className="mt-10 border-2 p-5 rounded-2xl border-(--main-text-highlight)">
						<legend className="font-bold pl-1 pr-1 text-(--main-text-highlight)">The Myth and Fact</legend>
						<div className="field flex mt-5">
							<label htmlFor="myth">The Myth:</label>
							<textarea name="myth" id="myth" className="w-1/2" required placeholder="What do people assume?"></textarea>
						</div>
						<div className="field flex mt-5">
							<label htmlFor="fact">The Fact:</label>
							<textarea name="fact" id="fact" className="w-1/2" required placeholder="What is the truth?"></textarea>
						</div>
						<div className="field flex mt-5">
							<label htmlFor="moreInfo">More Info:</label>
							<input type="url" id="moreInfo" name="moreInfo" className="w-1/2" placeholder="optional link to more info" />
						</div>
					</fieldset>
					<fieldset className="mt-10 border-2 p-5 rounded-2xl border-(--main-text-highlight)">
						<legend className="font-bold pl-1 pr-1 text-(--main-text-highlight)">Your Info</legend>
						<div>Your information will never be shared in any way.</div>
						<div className="field flex mt-5">
							<label htmlFor="submittedBy">Your Name:</label>
							<input type="text" id="submittedBy" name="submittedBy" className="w-1/2" required placeholder="your name" />
						</div>
						<div className="field flex mt-5">
							<label htmlFor="emailAddress">Your Email:</label>
							<input type="email" id="emailAddress" name="emailAddress" className="w-1/2" required placeholder="your email" />
						</div>
					</fieldset>
					{status === STATUSES.OK &&
						<fieldset className="mt-10 border-2 p-5 rounded-2xl border-(--main-text-highlight)">
							<legend className="font-bold pl-1 pr-1 text-(--main-text-highlight)">Let's go!</legend>
							<p>Note: I may edit your wording for clarity, consistency, or accuracy. I may also combine elements with other myths and facts.</p>
							{!isHuman &&
								<div className="field flex mt-5">
									<label>No robots or H/APs: </label>
									<Turnstile siteKey={turnstileKey} onSuccess={onTurnstileSuccess} />
								</div>
							}
							{isHuman &&
								<div className="field flex mt-5 items-center justify-center">

									<button type="submit" name="submit" id="submit" className="px-6 py-2 bg-(--border-color) text-white font-bold rounded cursor-pointer hover:bg-(--main-text-em) transition-colors duration-200">Submit</button>
								</div>
							}

						</fieldset>
					}
					{status === STATUSES.SUBMITTING &&
						<fieldset className="mt-10 border-2 p-5 rounded-2xl border-(--main-text-highlight)">
							<div className="field flex mt-5 items-center justify-center">
								Please Wait
							</div>
						</fieldset>
					}
					{status === STATUSES.COMPLETE &&
						<fieldset className="mt-10 border-2 p-5 rounded-2xl border-(--main-text-highlight)">
							<div className="field flex mt-5 items-center justify-center">
								Thank you for your submission<br />
								<button type="reset" id="reset" name="reset" onClick={handleReset} className="px-6 py-2 bg-(--border-color) text-white font-bold rounded cursor-pointer hover:bg-(--main-text-em) transition-colors duration-200">Submit Another</button>
							</div>
						</fieldset>
					}
				</form>
			</div>
		</div >
	)
}