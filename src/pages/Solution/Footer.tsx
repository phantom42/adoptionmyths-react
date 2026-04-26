import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa"

export default function Footer() {
	return (
		<article id="footer">
			<header>The answers exist. They always have.</header>
			<p>The question is whether or not people are ready to listen.</p>
			<section>
				<ul>
					<li>#AdopteeRights</li>
					<li>#AdoptionReform</li>
					<li>#FamilyPreservation</li>
					<li>#AdopteeVoices</li>
				</ul>
			</section>
			<div className="flex items-center justify-end gap-4 mt-4">
				<a href="https://facebook.com/phantomadoptee" target="_blank"><FaFacebook /></a>
				<a href="https://instagram.com/phantomadoptee" target="_blank"><FaInstagram /></a>
				<a href="https://tiktok.com/@phantomadoptee" target="_blank"><FaTiktok /></a>
				<span className="credit">@phantomAdoptee</span>
			</div>

		</article>
	)
}