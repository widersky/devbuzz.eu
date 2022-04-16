import {useTranslation} from "next-i18next";
import {motion} from "framer-motion";
import {floating1, floating2} from "../../helpers/animations";

const HomeSection3 = () => {
	const {t} = useTranslation("common");

	return (
		<div className="py-16 md:py-32">
			<div className="container mx-auto px-4 lg:px-0 flex flex-col md:grid md:grid-cols-2">
				<div className="flex flex-col justify-center items-start">
					<h3 className="text-4xl font-bold text-brandText">
						{t("homeHeading3")}
					</h3>
					<p className="text-lg text-brandTextLight mt-10 leading-relaxed">
						{t("homeText5")}
					</p>
					<p className="text-lg text-brandTextLight mt-4 leading-relaxed">
						{t("homeText6")}
					</p>
				</div>

				<div className="relative flex justify-center items-center">

					<motion.img
						animate={floating1}
						transition={{duration: 5, times: [0, .5, 1], ease: "easeInOut", repeat: Infinity}}
						src="/floating-images/note.webp"
						width={512}
						height={512}
						className="hidden md:block"
					/>

				</div>
			</div>
		</div>
	);
};

export default HomeSection3;
