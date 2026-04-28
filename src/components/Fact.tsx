export default function Fact({ fact }: { fact: string }) {
	return (
		<div className="box factbox text-2xl">
			<span className="font-bold" style={{ color: 'var(--main-text-highlight)' }}>Fact: </span>
			<span className="italic" style={{ color: 'var(--main-text-color)' }}>{fact}</span>
		</div>
	)
}
