import Image from "next/image";

/**
 * This is only for images that are positioned absolutely - e.g. 3d images with shadows
 * @returns {JSX.Element}
 * @constructor
 */

const Avatar = ({ width, height, fileName, priority }) => {
	return (
		<div className="relative h-full w-full">
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" style={{ minWidth: width, minHeight: height, width, height }}>
				<Image src={`/avatar/${fileName}.webp`} alt={fileName} layout="fill" quality={100} priority={priority} />
			</div>
		</div>
	)
}

export default Avatar;