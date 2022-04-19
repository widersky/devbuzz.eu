import Link from "next/link";
import Image from "next/image";
import {useTranslation} from "next-i18next";
import {motion} from "framer-motion";
import ProjectTile from "../ProjectTile";

import {floating1, floating2, floating3} from "../../helpers/animations";

const HomeSection2 = () => {
	const {t} = useTranslation('common');

	return (
		<div className="py-16 md:py-32">

			<div className="container mx-auto px-4 lg:px-0 flex flex-col md:grid md:grid-cols-2">

				<div className="relative flex items-center">

					<motion.img
						animate={floating1}
						transition={{duration: 5, times: [0, .5, 1], ease: "easeInOut", repeat: Infinity}}
						src="/floating-images/tools.webp"
						width={512}
						height={512}
						loading="lazy"
						className="hidden md:block"
					/>

				</div>

				<div className="flex flex-col justify-center items-start">
					<h3 className="text-4xl font-bold text-brandText">{t('homeHeading2')}</h3>
					<p className="text-lg text-brandTextLight mt-10 leading-relaxed">{t('homeText3')}</p>
					<p className="text-lg text-brandTextLight mt-4 mb-10 leading-relaxed">{t("homeText4")}</p>

					{/* <ProjectTile about={t("aboutFalcon")} href="" iconSrc="/owns/icon-falcon.webp" title="Falcon Starter"/> */}
				</div>

			</div>

		</div>
	)
}

export default HomeSection2;
