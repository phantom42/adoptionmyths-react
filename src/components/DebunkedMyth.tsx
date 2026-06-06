import Fact from "./Fact";
import Myth from "./Myth";
import { Link } from "react-router-dom";
import { Myth as MythType } from "@/types/myth";

export interface DebunkedMythProps {
	debunkedMyth: MythType;
	nextMyth?: (e?: React.MouseEvent) => void;
	prevMyth?: (e?: React.MouseEvent) => void;
	displayNext?: boolean;
}

export default function DebunkedMyth({ debunkedMyth, nextMyth = () => { }, prevMyth = () => { }, displayNext = true }: DebunkedMythProps) {
	return (
		<article className="box mythbox" style={{ padding: '2em' }}>
			<Myth myth={debunkedMyth.myth} slug={debunkedMyth.slug ?? debunkedMyth._id} />
			<Fact fact={debunkedMyth.fact} />
			<div className="flex justify-between items-center pt-5">

				{debunkedMyth?.moreinfo ? (
					<a
						href={debunkedMyth.moreinfo}
						target="_blank"
						rel="noopener noreferrer"
						className="italic font-bold cursor-pointer"
						style={{ color: 'var(--box-text-color)' }}
						onMouseEnter={e => e.currentTarget.style.color = 'var(--main-text-highlight)'}
						onMouseLeave={e => e.currentTarget.style.color = 'var(--box-text-color)'}
					>
						Learn more about this fact
					</a>
				) : <span />}
				<a href="https://AdoptionMeansABetterLife.com" className="italic font-bold cursor-pointer"
					onMouseEnter={e => e.currentTarget.style.color = 'var(--main-text-highlight)'}
					onMouseLeave={e => e.currentTarget.style.color = 'var(--box-text-color)'}
					target="_blank">Nonsense! Adoption means a better life!</a>

			</div>
			<div className="flex justify-between items-center pt-5">
				{displayNext &&
					<Link
						to="/"
						onClick={prevMyth}
						className="italic font-bold cursor-pointer"
						style={{ color: 'var(--box-text-color)' }}
						onMouseEnter={e => e.currentTarget.style.color = 'var(--main-text-highlight)'}
						onMouseLeave={e => e.currentTarget.style.color = 'var(--box-text-color)'}
					>
						← Previous Myth
					</Link>}
				{displayNext &&
					<Link
						to="/"
						onClick={nextMyth}
						className="italic font-bold cursor-pointer"
						style={{ color: 'var(--box-text-color)' }}
						onMouseEnter={e => e.currentTarget.style.color = 'var(--main-text-highlight)'}
						onMouseLeave={e => e.currentTarget.style.color = 'var(--box-text-color)'}
					>
						Debunk another myth →
					</Link>
				}
			</div>
		</article>
	)
}
