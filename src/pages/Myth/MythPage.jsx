import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { getMyth } from "../../api/queries/getMyth";
import DebunkedMyth from "../../components/DebunkedMyth";
import SocialLinks from "../../components/SocialLinks";
import { Link } from "react-router-dom";
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
		<div className="min-h-screen flex flex-col">
			<div className="flex-1 flex items-center justify-center">
				<div className="w-full max-w-200">
					{ myth &&
						<DebunkedMyth debunkedMyth={myth} />
					}
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