import { useState, useRef } from "react";
import { Myth as MythType } from "@/types/myth";
import { STATUSES } from "../types/statuses";
import { Turnstile } from "@marsidev/react-turnstile";
import { updateMyth } from "../api/queries/updateMyth";
import { formPayload } from "../types/formPayload";

export default function EditableMyth({ submittedMyth }: { submittedMyth: MythType }) {
	const turnstileKey = import.meta.env.VITE_TURNSTILE_KEY;
	const [isHuman, setIsHuman] = useState(false);
	const [token, setToken] = useState('');
	const [status, setStatus] = useState(STATUSES.OK);
	const [isChecked, setIsChecked] = useState(submittedMyth.active || false);


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
		const _id = submittedMyth._id;
		const active = isChecked;
		const slug = submittedMyth.slug;

		const submitted_by = submittedMyth.submitted_by;
		const email_address = submittedMyth.email_address;
		const validationToken = token
		const payload: formPayload = {
			_id,
			myth,
			fact,
			moreInfo,
			validationToken,
			active,
			slug
		}
		setStatus(STATUSES.SUBMITTING);
		const result = await updateMyth(payload);
		setStatus(STATUSES.OK);
	}
	const handleReset = (): void => {
		formRef.current?.reset();
		setIsHuman(false);
		setToken('');
		setStatus(STATUSES.OK);
	}
	return (

		<form className="form box w-1/2 items-center justify-center" onSubmit={handleSubmit} id="mythForm" name="mythForm" ref={formRef}>
			<fieldset className="border-2 p-5 rounded-2xl border-(--main-text-highlight)">
				<legend className="font-bold pl-1 pr-1 text-(--main-text-highlight)">The Myth and Fact</legend>
				<div className="field flex mt-5">
					<label htmlFor="myth">The Myth:</label>
					<textarea name="myth" id="myth" className="w-1/2" required placeholder="What do people assume?" defaultValue={submittedMyth.myth}></textarea>
				</div>
				<div className="field flex mt-5">
					<label htmlFor="fact">The Fact:</label>
					<textarea name="fact" id="fact" className="w-1/2" required placeholder="What is the truth?" defaultValue={submittedMyth.fact}></textarea>
				</div>
				<div className="field flex mt-5">
					<label htmlFor="moreInfo">More Info:</label> {submittedMyth.moreinfo && <a href={submittedMyth.moreinfo} target="blank">view</a>}
					<input type="url" id="moreInfo" name="moreInfo" className="w-1/2" placeholder="optional link to more info" defaultValue={submittedMyth.moreinfo} />
				</div>
				<div className="field flex mt-5">
					<label htmlFor="submittedBy">Submitted By: &nbsp;</label> {submittedMyth.submitted_by}: {submittedMyth.email_address}
				</div>
				<div className="field flex mt-5">
					<label htmlFor="active">Active</label>
					<input type="checkbox" name="active" id="active" onChange={(e) => setIsChecked(e.target.checked)} defaultChecked={isChecked} />
				</div>
				{status === STATUSES.OK &&
					<>

						{!isHuman &&
							<div className="field flex mt-5">
								<label>No robots or H/APs: </label>
								<Turnstile siteKey={turnstileKey} onSuccess={onTurnstileSuccess} />
							</div>
						}
						{isHuman &&
							<div className="field flex mt-5 items-center justify-center">

								<button type="submit" name="submit" id="submit" className="px-6 py-2 bg-(--border-color) text-white font-bold rounded cursor-pointer hover:bg-(--main-text-em) transition-colors duration-200">Save</button>
							</div>
						}

					</>
				}
				{status === STATUSES.SUBMITTING &&
					<>
						<div className="field flex mt-5 items-center justify-center">
							Please Wait
						</div>
					</>
				}
				{status === STATUSES.COMPLETE &&
					<>
						<div className="field flex mt-5 items-center justify-center">
							Thank you for your submission<br />
							<button type="reset" id="reset" name="reset" onClick={handleReset} className="px-6 py-2 bg-(--border-color) text-white font-bold rounded cursor-pointer hover:bg-(--main-text-em) transition-colors duration-200">Submit Another</button>
						</div>
					</>
				}
			</fieldset>

		</form>

	)
}