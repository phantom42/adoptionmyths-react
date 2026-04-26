import Fact from "./Fact";
import Myth from "./Myth";
import { Link } from "react-router-dom";

export default function DebunkedMyth({debunkedMyth, nextMyth = ()=> {}}) {
	return (
		<article className="box mythbox" style={{padding: '2em'}}>
			<Myth myth={debunkedMyth.myth} slug={debunkedMyth.slug}/>
			<Fact fact={debunkedMyth.fact}/>
			<div className="flex justify-between items-center pt-5">
				{debunkedMyth?.moreinfo ? (
					<a
						href={debunkedMyth.moreinfo}
						target="_blank"
						rel="noopener noreferrer"
						className="italic font-bold cursor-pointer"
						style={{color: 'var(--box-text-color)'}}
						onMouseEnter={e => e.target.style.color = 'var(--main-text-highlight)'}
						onMouseLeave={e => e.target.style.color = 'var(--box-text-color)'}
					>
						Learn more about this fact
					</a>
				) : <span />}
				<Link
					to="/"
					onClick={nextMyth}
					className="italic font-bold cursor-pointer"
					style={{color: 'var(--box-text-color)'}}
					onMouseEnter={e => e.target.style.color = 'var(--main-text-highlight)'}
					onMouseLeave={e => e.target.style.color = 'var(--box-text-color)'}
				>
					Debunk another myth →
				</Link>
			</div>
		</article>
	)
}
