import { useLoaderData, useSearchParams } from "react-router-dom";
import { useState } from "react";
import { Raindrop as Droptype } from '../../types/raindrop';
import SocialLinks from "../../components/SocialLinks";
import Raindrop from "../../components/Raindrop";
import SearchBox from "../../components/SearchBox";
export default function BetterLife() {
	const { allRaindropsList } = useLoaderData();
	const [displayImages, setDisplayImages] = useState(false);
	const [searchParams, setSearchParams] = useSearchParams();
	const drops: Droptype[] = allRaindropsList.items;
	const numResults = allRaindropsList.count;
	const numPages = Math.ceil(numResults / 50);
	const submitSearch = (q: string) => {
		setSearchParams(prev => {
			prev.set('q', q);
			return prev;
		});
	}
	const toggleImages = () => {
		setDisplayImages(!displayImages);
	}

	return (
		<div className="min-h-screen flex flex-col">
			<div className="max-w-200 mx-auto">
				<section id="headline" className="drop-headline">
					<h1 className="font-serif text-3xl">Adoption Means <span className="text-highlight-500 italic">A Better Life</span></h1>
					<p className=" text-main-500">Adoption does <em>NOT</em> guarantee a better life, only a different one. The stories of many adoptees are tragic.</p>
				</section>
				<SearchBox displayImages={displayImages} toggleHandler={toggleImages} searchHandler={submitSearch} />
				{allRaindropsList.count > 0 && drops.map((drop: Droptype) => (

					<Raindrop {...drop} key={drop._id} displayImages={displayImages} />
				))
				}
			</div>
			<div className="w-full max-w-200 mx-auto">
				<SocialLinks displayDebunk={true} />
			</div></div>
	)
}