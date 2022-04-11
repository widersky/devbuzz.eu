import Image from "next/image";

const LabelWithIcon = ({ icon, text, iconSize = 24 }) => {
	return (
		<span className="flex gap-2 items-center">
			<Image src={`/icon-${icon}.svg`} width={iconSize} height={iconSize} alt={text} />
			{text}
		</span>
	)
}

export default LabelWithIcon;