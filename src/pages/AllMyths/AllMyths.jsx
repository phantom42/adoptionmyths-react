import { useLoaderData } from "react-router-dom"
import DebunkedMyth from "../../components/DebunkedMyth";
import SocialLinks from "../../components/SocialLinks";
export default function AllMyths(){
	const {allMythsList} = useLoaderData();
	return (
		<div className="max-w-200 mx-auto">
			{allMythsList.length > 0 && allMythsList.map((myth) =>(
				<DebunkedMyth debunkedMyth={myth} key={myth._id} displayNext={false} />
			))

			}
			<SocialLinks displayDebunk={true}/>
		</div>
	)
}