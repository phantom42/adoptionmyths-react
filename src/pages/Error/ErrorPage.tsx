import { Link } from "react-router-dom"
import SocialLinks from "../../components/SocialLinks"
export default function ErrorPage() {
	return (
		<div className="min-h-screen flex flex-col">
			<div className="flex-1 flex items-center justify-center">
				<div className="w-full max-w-200">
					<div className="box errorbox">
						<h1>Oh no! Something broke!</h1>
						<h2>It was probably some Adoptive Parent. You should be grateful that you're at least getting an error message.</h2>
						<Link to="/">Hopefully at least the front page works.</Link>
					</div>
				</div>
			</div>
			<div className="w-full max-w-200 mx-auto">
				<SocialLinks />
			</div>
		</div>
	)
}