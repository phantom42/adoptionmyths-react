import { useState } from 'react';
import { FaLink, FaCheck } from 'react-icons/fa';

export default function Myth({ myth, slug }: { myth: string, slug: string }) {
	const [copied, setCopied] = useState(false);

	function copyLink() {
		navigator.clipboard.writeText(`${window.location.origin}/myth/${slug}`);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	}

	return (
		<div className="text-4xl pb-5" style={{ fontFamily: 'var(--fancy-font)' }}>
			<span className="font-bold" style={{ color: 'var(--article-header-color)' }}>Myth: </span>
			<span style={{ color: 'var(--main-text-color)' }}>{myth}</span>
			<div className="relative inline-flex items-center ml-2 text-base align-middle group">
				<button onClick={copyLink} className="cursor-pointer" style={{ color: 'var(--box-text-color)' }}>
					{copied ? <FaCheck style={{ color: 'var(--main-text-highlight)' }} /> : <FaLink />}
				</button>
				<span className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded px-2 py-1 text-xs opacity-0 group-hover:opacity-100 transition-opacity" style={{ backgroundColor: 'var(--box-background)', color: 'var(--main-text-color)' }}>
					{copied ? 'Copied!' : 'Copy link'}
				</span>
			</div>
		</div>
	)
}
