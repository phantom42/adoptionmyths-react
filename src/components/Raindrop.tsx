import { Raindrop as RaindropType } from '../types/raindrop';
export default function Raindrop(drop: RaindropType) {
	const dateString: string = (new Date(drop.created)).toDateString()
	return (
		<div className="raindrop drop" key={drop._id}>
			<div className="drop-header"><h1><a className="drop-link" target="_blank" href={drop.link} title={drop.title}>{drop.title}</a> | {dateString}</h1></div>

			<p>{drop.excerpt}</p>
			{drop.displayImages && <img src={drop.cover} className="rounded-xl" alt={drop.title} onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }} />}
		</div>
	)
}