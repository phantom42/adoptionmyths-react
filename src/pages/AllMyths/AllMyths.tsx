import { useLoaderData } from "react-router-dom"
import DebunkedMyth from "../../components/DebunkedMyth";
import SocialLinks from "../../components/SocialLinks";
import { Myth } from "@/types/myth";
export default function AllMyths() {
	const { allMythsList }: { allMythsList: Myth[] } = useLoaderData();
	return (
		<div className="max-w-200 mx-auto">
			{allMythsList.length > 0 && allMythsList.map((myth) => (
				<DebunkedMyth debunkedMyth={myth} key={myth._id} displayNext={false} />
			))

			}
			<SocialLinks displayDebunk={true} />
		</div>
	)
}