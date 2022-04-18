import Image from "next/image";

const Counter = ({ count, text, gif }) => {
	return (
		<div className={"flex overflow-hidden rounded-lg bg-white relative group transition-all hover:bg-black"}>
			{gif && <Image src={`/gifs/${gif}.webp`} layout={"fill"} objectFit={"cover"} loading="lazy" className={"opacity-0 group-hover:opacity-40 transition-opacity"} />}
			
			<div className={"flex flex-col w-full h-full gap-6 items-center justify-center text-center p-10 relative z-10 group-hover:drop-shadow-lg"}>
				<h4 className={"text-5xl text-brandText transition-colors group-hover:text-white"}>{count}</h4>
				<span className={"text-lg text-brandTextLight transition-colors group-hover:text-white"}>{text}</span>
			</div>
		</div>
	)
}

export default Counter;