import Headline from "./Headline"
import Principle from "./Principle"
import Reform from "./Reform"
import Guardianship from "./Guardianship"
import Prevention from "./Prevention"
import Footer from "./Footer"
export default function Solution() {
	return (
		<div className="container max-w-200 mx-auto">
			<Headline />
			<Principle />
			<Reform />
			<Guardianship />
			<Prevention />
			<Footer />
		</div>
	)
}