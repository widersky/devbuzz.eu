import Image from "next/image";
import { v4 as uuidv4 } from "uuid";

const Ul = ({ children }) => {
	return (
		<ul className="leading-relaxed my-6 text-brandText">

			{/* First, remove new line elements from array which I don't need */}
			{children.filter((item) => item !== "\n").map((item) => (
				<li className="flex items-center gap-2" key={uuidv4()}>
					<Image src="/icon-chevron-right.svg" width={24} height={24} alt="Chevron icon" />
					<span>{item}</span>
				</li>
			))}

		</ul>
	);
};

export default Ul;