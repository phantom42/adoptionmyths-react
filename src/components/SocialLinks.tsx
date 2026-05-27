import { FaFacebook, FaInstagram, FaTiktok, FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

interface IProps {
	displayDebunk?: boolean
}
export default function SocialLinks({ displayDebunk = false }: IProps) {
	const links = <><a href="https://facebook.com/phantomadoptee" target="_blank" rel="noopener noreferrer" aria-label="Facebook Link"><FaFacebook /></a>
		<a href="https://instagram.com/phantomadoptee" target="_blank" rel="noopener noreferrer" aria-label="Instagram Link"><FaInstagram /></a>
		<a href="https://tiktok.com/@phantomadoptee" target="_blank" rel="noopener noreferrer" aria-label="TikTok Link"><FaTiktok /></a>
		<span className="credit">@phantomAdoptee</span></>
	return (
		<>
			{displayDebunk &&
				<div className="flex items-center justify-between gap-4 mt-4 social-links">
					<Link to="/" className="back-link flex items-center gap-2 italic font-bold cursor-pointer">
						<FaArrowLeft /> Debunk a myth
					</Link>
					<div className="flex items-center gap-4">
						{links}
					</div>
				</div>
			}
			{!displayDebunk &&
				<div className="flex items-center justify-end gap-4 mt-4 social-links">
					{links}
				</div>
			}
		</>
	)
}
