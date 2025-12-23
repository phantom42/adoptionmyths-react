import Fact from "./Fact";
import Myth from "./Myth";
import { Link } from "react-router-dom";
export default function DebunkedMyth({debunkedMyth}) {
	return (
		<div className="bg-gray-200  h-content mx-auto w-screen p-10">
			
			<Myth myth={debunkedMyth.myth} slug={debunkedMyth.slug}/>
			<Fact fact={debunkedMyth.fact}/>
			<div className="text-right pt-5">
				<Link to='/' className="italic font-bold hover:text-orange-500 hover:underline cursor-pointer">Debunk another myth</Link>
			</div>
		</div>
	)
}