import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import LabelWithIcon from "components/LabelWithIcon";
import Button from "./Button";
import { useTranslation } from "react-i18next";

const SinglePostCard = ({ data }) => {
	const { t } = useTranslation();

	useEffect(() => {
		console.log(data);
	}, [data]);

	return (
		<>
			{data.thumbnailUrl && (
				<Link href={`/blog/${data.slug}`} passHref>
					<div className="w-full h-72 relative mb-6 rounded-md overflow-hidden shadow-lg cursor-pointer">
						<Image
							src={data.thumbnailUrl}
							alt={data.title}
							layout="fill"
							objectFit="cover"
						/>
					</div>
				</Link>
			)}

			<div className="flex gap-4 items-center">
				<LabelWithIcon icon="calendar" text={data.niceDate} iconSize={18} />
				<LabelWithIcon icon="timer" text={data.readTime} iconSize={18} />
			</div>

			<Link href={`/blog/${data.slug}`}>
				<a className="text-2xl font-bold text-brandText hover:text-brandRed transition-colors">
					{data.title}
				</a>
			</Link>

			<p>{data.description}</p>

			<div className="flex justify-end mt-6">
				<Button href={`/blog/${data.slug}`} text={t("readMore")} />
			</div>
		</>
	);
};

export default SinglePostCard;
