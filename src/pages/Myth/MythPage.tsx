import { Myth } from "@/types/myth";
import DebunkedMyth from "../../components/DebunkedMyth";
import SocialLinks from "../../components/SocialLinks";
import SubmitLink from "../../components/SubmitLink";
import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
export default function MythPage() {
	const { singleMyth }: { singleMyth: Myth } = useLoaderData();

	return (
		<div className="min-h-screen flex flex-col">
			<SubmitLink />
			<div className="flex-1 flex items-center justify-center">
				<div className="w-full max-w-200">
					{singleMyth &&
						<DebunkedMyth debunkedMyth={singleMyth} />
					}
					<Link to="/the-solution/" className="solution-link italic font-bold cursor-pointer link">
						<h1 className="font-serif text-3xl">So What's <span className="text-highlight-500 italic">The Solution?</span> <span className="answer-link"> The Answers Already Exist →</span></h1>
					</Link>
				</div>
			</div>
			<div className="w-full max-w-200 mx-auto">
				<SocialLinks />
			</div>
		</div>
	)
}