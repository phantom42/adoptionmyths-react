import { useLoaderData } from "react-router-dom";
import DebunkedMyth from "../../components/DebunkedMyth";
import { useState, useEffect } from "react";
export default function RandomMythPage() {
	//const {randomMyth} = useLoaderData() ;
	const {randomMythList} = useLoaderData();
	const [mythIndex, setMythIndex] = useState(0);
	const [autoAdvance, setAutoAdvance] = useState(import.meta.env.VITE_AUTOADVANCE);
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
		<div>
			<DebunkedMyth debunkedMyth={randomMyth} nextMyth={nextMyth} prevMyth={prevMyth}/>
			
		</div>
	)
}