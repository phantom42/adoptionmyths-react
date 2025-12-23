export default function Fact({fact}) {
	return (
		<div className="text-2xl bg-blue-500 rounded p-2">
			<span className="font-bold">Fact: </span>
			<span className="italic">{fact}</span>
		</div>
	)
}