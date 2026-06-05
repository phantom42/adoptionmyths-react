import { Link } from "react-router-dom";

export default function SubmitLink() {
	return (
		<div className="hidden lg:block fixed top-4 right-4 z-50">
			<Link
				to="/submit-myth"
				className="flex items-center gap-2 italic font-bold px-4 py-2 rounded bg-(--box-background) text-(--box-text-highlight) hover:text-(--main-text-highlight) transition-colors duration-200 shadow-lg">
				Got a myth to share?
			</Link>
		</div>
	)
}