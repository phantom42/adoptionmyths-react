import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { getMyth } from "../../api/queries/getMyth";
import DebunkedMyth from "../../components/DebunkedMyth";
export default function MythPage() {
	let params = useParams();
	const [myth, setMyth] = useState();
	//console.log(params);
	useEffect(()=> {
		async function loadMyth(slug) {
			const loadedMyth = await getMyth(slug);
			setMyth(loadedMyth);
			//console.log(loadedMyth);
		}
		loadMyth(params.slug);
	},[params.slug])
	return (
		<div>
			{ myth && 
				<DebunkedMyth debunkedMyth={myth} />
			}
		</div>
	)
}