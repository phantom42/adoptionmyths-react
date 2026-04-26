import SocialLinks from "../../components/SocialLinks";

export default function Footer() {
	return (
		<article id="footer">
			<header>Listen to adoptees</header>
			{/* <p>Listen To Adoptees</p> */}
			<section>
				<ul>
					<li>#AdopteeRights</li>
					<li>#AdoptionReform</li>
					<li>#FamilyPreservation</li>
					<li>#AdopteeVoices</li>
				</ul>
			</section>
			<SocialLinks displayDebunk={true} />
		</article>
	)
}