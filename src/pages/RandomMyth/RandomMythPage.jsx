import { useLoaderData } from "react-router-dom";
import DebunkedMyth from "../../components/DebunkedMyth";
import { useState } from "react";
export default function RandomMythPage() {
	//const {randomMyth} = useLoaderData() ;
	const {randomMythList} = useLoaderData();
	const [mythIndex, setMythIndex] = useState(0);
	//let mythIndex=0;
	//const jsonList = JSON.parse(randomMythList);
	//console.log(jsonList);
	//console.log(Array.isArray(jsonList));
	//console.log(jsonList);
	//const [mythIndex, setMythIndex] = useState(0);
	//const [mythList, setMythList] = useState(randomMythList);
	const nextMyth = () => {
		setMythIndex((mythIndex < randomMythList.length) ? mythIndex + 1 : 0);
	}
	const prevMyth = () => {
		setMythIndex( (mythIndex > 0) ? mythIndex - 1: mythIndex.length);
	}
	const randomMyth = randomMythList[mythIndex];
	return (
		<div>
			<DebunkedMyth debunkedMyth={randomMyth} nextMyth={nextMyth} prevMyth={prevMyth}/>
			
		</div>
	)
}