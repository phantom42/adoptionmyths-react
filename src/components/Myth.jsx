import { useState } from 'react';
import { FaLink, FaCheck } from 'react-icons/fa';

export default function Myth({myth, slug}) {
	const [copied, setCopied] = useState(false);

	function copyLink() {
		navigator.clipboard.writeText(`${window.location.origin}/myth/${slug}`);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	}

	return (
		<>
			<div className="font-bold text-4xl pb-5">
				<span className="text-orange-500">Myth: </span>
				<span>{myth}</span>
				<div className="relative inline-flex items-center ml-2 text-base align-middle group">
					<button onClick={copyLink} className="cursor-pointer">
						{copied ? <FaCheck className="text-green-500" /> : <FaLink />}
					</button>
					<span className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-gray-800 px-2 py-1 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity">
						{copied ? 'Copied!' : 'Copy link'}
					</span>
				</div>
			</div>
		</>
	)
}
