import { useLoaderData } from "react-router-dom";
import DebunkedMyth from "../../components/DebunkedMyth";
import SocialLinks from "../../components/SocialLinks";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export default function RandomMythPage() {
	//const {randomMyth} = useLoaderData() ;
	const {randomMythList} = useLoaderData();
	const [mythIndex, setMythIndex] = useState(0);
	const [autoAdvance, setAutoAdvance] = useState(import.meta.env.VITE_AUTOADVANCE);
	// eslint-disable-next-line no-unused-vars
	const toggleAutoAdvance = () => {
		setAutoAdvance(!autoAdvance);
	}
	const nextMyth = (e) => {
		if (e) {
			e.preventDefault();
		}
		setMythIndex((mythIndex < randomMythList.length - 1) ? mythIndex + 1 : 0);
	}
	const prevMyth = (e) => {
		e.preventDefault();
		setMythIndex( (mythIndex > 0) ? mythIndex - 1: mythIndex.length - 1);
	}
	useEffect(() => {
		const timer = setTimeout(()=> {
			if (autoAdvance){
				nextMyth()
			}
		}, import.meta.env.VITE_AUTOADVANCE_DELAY_SECONDS * 1000);
		return () => clearTimeout(timer);
	});

	const randomMyth = randomMythList[mythIndex];
	return (
		<div className="min-h-screen flex flex-col">
			<div className="flex-1 flex items-center justify-center">
				<div className="w-full max-w-200">
					<DebunkedMyth debunkedMyth={randomMyth} nextMyth={nextMyth} prevMyth={prevMyth}/>
					<Link to="/the-answer/" className="solution-link italic font-bold cursor-pointer">
						<h1 className="font-serif text-3xl">So What's <span className="text-highlight-500 italic">The Answer?</span></h1>
					</Link>
				</div>
			</div>
			<div className="w-full max-w-200 mx-auto">
				<SocialLinks />
			</div>
		</div>
	)
}