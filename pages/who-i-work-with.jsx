import Head from "next/head";
import Image from "next/image";

import {useTranslation} from "next-i18next";
import {motion} from "framer-motion";

import {
	leftSideAnim,
	rightSideAnim,
	defaultTransition,
} from "../helpers/animations";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import Picture from "../components/Avatar";

const WhoIWorkWith = () => {
	const {t} = useTranslation(['common']);

	return (
		<>
			<Head></Head>

			<main className={"flex flex-col justify-center flex-grow"}>
				<div className="py-24 flex items-center">
					<div className="container mx-auto px-4 lg:px-0 grid md:grid-cols-2 gap-10">

						{/* Right side */}
						<motion.div
							initial={leftSideAnim.initial}
							animate={leftSideAnim.animate}
							exit={leftSideAnim.exit}
							transition={defaultTransition}
							className="flex flex-col justify-center items-start"
						>
							<h2 className="text-5xl font-bold text-brandText">
								{t("whoIWorkWith")}
							</h2>
							<p
								className="text-lg text-brandTextLight mt-10 leading-relaxed"
								dangerouslySetInnerHTML={{
									__html: t("whoIWorkWithText1"),
								}}
							/>

							<h4 className="text-2xl text-brandText mt-12">
								{t("whoIWorkWithText2")}
							</h4>

							<div className="grid grid-cols-4 gap-12 mt-8">
								<Image
									className="grayscale transition-all hover:grayscale-0"
									src="/logo-twilio.svg"
									loading="lazy"
									width={72}
									height={72}
									alt="Logo Twilio"
								/>
								<Image
									className="grayscale transition-all hover:grayscale-0"
									src="/logo-reckitt.svg"
									loading="lazy"
									width={72}
									height={72}
									alt="Logo Reckitt Benckiser"
								/>
								<Image
									className="grayscale transition-all hover:grayscale-0"
									src="/logo-hsbc.svg"
									loading="lazy"
									width={72}
									height={72}
									alt="Logo HSBC"
								/>
							</div>
						</motion.div>

						{/* Left Side */}
						<motion.div
							initial={rightSideAnim.initial}
							animate={rightSideAnim.animate}
							exit={rightSideAnim.exit}
							transition={defaultTransition}
							className="hidden md:block"
						>
							<Picture width={935} height={746} fileName={"avatar-standing"}/>
						</motion.div>

					</div>
				</div>
			</main>
		</>
	);
};

export const getServerSideProps = async ({locale}) => ({
	props: {
		...await serverSideTranslations(locale, ["common"]),
	},
});

export default WhoIWorkWith;