import { useLoaderData } from "react-router-dom";
import DebunkedMyth from "../../components/DebunkedMyth";
import { useState, useEffect } from "react";
export default function RandomMythPage() {
	//const {randomMyth} = useLoaderData() ;
	const {randomMythList} = useLoaderData();
	const [mythIndex, setMythIndex] = useState(0);
	const [autoAdvance, setAutoAdvance] = useState(true);
	//let mythIndex=0;
	//const jsonList = JSON.parse(randomMythList);
	//console.log(jsonList);
	//console.log(Array.isArray(jsonList));
	//console.log(jsonList);
	//const [mythIndex, setMythIndex] = useState(0);
	//const [mythList, setMythList] = useState(randomMythList);

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
		if (!autoAdvance) {
			return false; 
		}
		const timer = setTimeout(()=> {
			nextMyth()
		}, 20 * 1000);
		return () => clearTimeout(timer);
	});

	
	const randomMyth = randomMythList[mythIndex];
	return (
		<div>
			<DebunkedMyth debunkedMyth={randomMyth} nextMyth={nextMyth} prevMyth={prevMyth}/>
			
		</div>
	)
}