import { Link } from "react-router-dom"
import { FaLink } from 'react-icons/fa';
export default function Myth({myth}) {
	return (
		<>
			<div className="font-bold text-4xl pb-5">
				<span className="text-orange-500">Myth: </span><span className="">{myth}</span>
			</div>
			
		</>
	)
}
