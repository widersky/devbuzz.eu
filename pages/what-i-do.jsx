import Head from "next/head";
import Image from "next/image";

import {useTranslation} from "react-i18next";
import {motion} from "framer-motion";

import {
	leftSideAnim,
	rightSideAnim,
	defaultTransition,
} from "../helpers/animations";
import TechStack from "../components/globals/TechStack";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import Picture from "../components/Picture";

const WhatIDo = () => {
	const {t} = useTranslation(['common']);

	return (
		<>
			<Head>
				<title>
					DevBuzz | Adrian Widerski - Fullstack web developer
				</title>
				<meta
					name="description"
					content="Blog dotyczący webdevu oraz spraw dookoła niego."
				/>
			</Head>

			<main className={"flex flex-col justify-center flex-grow"}>
				<div className="py-24 flex items-center">
					<div className="container mx-auto grid grid-cols-2 gap-10">

						{/* Right side */}
						<motion.div
							initial={leftSideAnim.initial}
							animate={leftSideAnim.animate}
							exit={leftSideAnim.exit}
							transition={defaultTransition}
						>
							<div className="flex flex-col justify-center items-start">
								<h2 className="text-5xl font-bold text-brandText">
									{t("whatIDo")}
								</h2>
								<p className="text-lg text-brandTextLight mt-10 leading-relaxed">
									{t("whatIDoText1")}
								</p>
								<p className="text-lg text-brandTextLight mt-4 leading-relaxed">
									{t("whatIDoText2")}
								</p>

								<h4 className="text-2xl text-brandText mt-12">
									{t("whatIDoText3")}
								</h4>

								<TechStack/>

								<p className="text-lg text-brandTextLight mt-12 leading-relaxed">
									{t("whatIDoText4")}
								</p>
							</div>
						</motion.div>

						{/* Left Side */}
						<motion.div
							initial={rightSideAnim.initial}
							animate={rightSideAnim.animate}
							exit={rightSideAnim.exit}
							transition={defaultTransition}
						>
							<Picture width={472} height={614} fileName={"avatar-sitting-2"}/>
						</motion.div>

					</div>
				</div>
			</main>
		</>
	);
};

export const getServerSideProps = async ({locale}) => ({
	props: {
		...(await serverSideTranslations(locale, ["common"])),
	},
});

export default WhatIDo;
