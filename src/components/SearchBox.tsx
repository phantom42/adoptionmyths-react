import { useState, useEffect } from "react";

export default function SearchBox({ displayImages, toggleHandler, searchHandler }: { displayImages: boolean, toggleHandler: () => void, searchHandler: (q: string) => void }) {

	const [term, setTerm] = useState('')

	useEffect(() => {
		const timer = setTimeout(() => {
			searchHandler(term);
		}, 400);
		return () => clearTimeout(timer);
	}, [term]);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		searchHandler(term);
	}

	const handleToggle = () => {
		toggleHandler();
	}
	const handleChange = (t: string = '') => {
		setTerm(t);
	}

	return (
		<form onSubmit={handleSubmit} data-testid='search-form'>
			<div className="p-5 rounded search-box">

				<span className="ml-5">
					<label>Search Articles:

						<input
							type="text"
							value={term}
							onChange={(e) => handleChange(e.target.value)}
							name="term"
							className="bg-white text-black rounded-10 pl-1 ml-2"
						/>
					</label>
				</span>
				<span>
					<label className=" float-end mr-5">
						Display Images:
						<input
							type="checkbox"
							name="displayImages"
							checked={displayImages}
							onChange={handleToggle}
							className="ml-2"
						/>
					</label>
				</span>
			</div>
		</form>
	)
}