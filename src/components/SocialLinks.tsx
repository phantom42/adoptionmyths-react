import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

export default function SocialLinks() {
	return (
		<div className="flex items-center justify-end gap-4 mt-4 social-links">
			<a href="https://facebook.com/phantomadoptee" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
			<a href="https://instagram.com/phantomadoptee" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
			<a href="https://tiktok.com/@phantomadoptee" target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
			<span className="credit">@phantomAdoptee</span>
		</div>
	)
}
