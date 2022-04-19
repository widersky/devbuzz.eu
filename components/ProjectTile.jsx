import Link from "next/link";
import Image from "next/image";

const ProjectTile = ({ iconSrc, title, about, href }) => {
    return (
        <Link
            href={href}
            passHref
        >
            <div className="flex gap-6 w-full items-start bg-white bg-opacity-60 rounded-md shadow px-8 py-6 transition-all hover:bg-opacity-100 hover:shadow-lg cursor-pointer">
                <div className="mt-1.5">
									<Image
											src={iconSrc}
											loading="lazy"
											alt={`${title} icon`}
											width={40}
											height={40}
									/>	
								</div>
                <div>
                    <h4 className="text-xl text-black opacity-80">
                        {title}
                    </h4>
                    <span className="opacity-60 text-sm">
                        {about}
                    </span>
                </div>
                <div className="ml-auto mt-4">
                    <Image
                        src="/icon-external-link.svg"
                        alt=""
                        width={24}
                        height={24}
                    />
                </div>
            </div>
        </Link>
    )
};

export default ProjectTile;