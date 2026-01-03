import Fact from "./Fact";
import Myth from "./Myth";
import { FaLink} from 'react-icons/fa';
import { Link } from "react-router-dom";
export default function DebunkedMyth({debunkedMyth, nextMyth}) {
	return (
		<div className="bg-gray-200  h-content mx-auto w-screen p-10">
			
			<Myth myth={debunkedMyth.myth} slug={debunkedMyth.slug}/>
			<Fact fact={debunkedMyth.fact}/>
			<div className="text-left pt-5">
				{debunkedMyth?.moreinfo && (
				<a
					href={debunkedMyth.moreinfo}
					target="_blank"
					rel="noopener noreferrer"
					className="italic font-bold hover:text-orange-500 hover:underline cursor-pointer"
				>
					Learn more about this fact
				</a>
				)}

			</div>
			<div className="text-right pt-5">
				<Link  onClick={nextMyth} className="italic font-bold hover:text-orange-500 hover:underline cursor-pointer">Debunk another myth</Link>
			</div>
		</div>
	)
}