import { useLoaderData } from "react-router-dom";
import DebunkedMyth from "../../components/DebunkedMyth";
export default function RandomMythPage() {
	const {randomMyth} = useLoaderData() ;
	return (
		<div>
			<DebunkedMyth debunkedMyth={randomMyth} />
			
		</div>
	)
}