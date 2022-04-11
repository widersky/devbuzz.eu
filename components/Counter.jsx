const Counter = ({ count, text }) => {
	return (
		<div className={"flex flex-col gap-6 items-center justify-center text-center bg-white rounded-lg p-10"}>
			<h4 className={"text-5xl text-brandText"}>{count}</h4>
			<span className={"text-lg text-brandTextLight"}>{text}</span>
		</div>
	)
}

export default Counter;