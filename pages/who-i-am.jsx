import Head from "next/head";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { motion } from "framer-motion";

import {
    leftSideAnim,
    rightSideAnim,
    defaultTransition,
} from "../helpers/animations";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import Avatar from "../components/Avatar";

const Home = () => {
    const { t } = useTranslation(['common']);

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
                    <div className="container mx-auto px-4 lg:px-0 grid md:grid-cols-2 gap-10">
                        {/* Left side */}
                        <motion.div
                            initial={leftSideAnim.initial}
                            animate={leftSideAnim.animate}
                            exit={leftSideAnim.exit}
                            transition={defaultTransition}
                            className="flex flex-col justify-center items-start"
                        >
                            <h2 className="text-5xl font-bold text-brandText">
                                {t("imAdrian")}
                            </h2>
                            <p className="text-lg text-brandTextLight mt-10 leading-relaxed">
                                {t("whoAmIText1")}
                            </p>
                            <p className="text-lg text-brandTextLight mt-4 leading-relaxed">
                                {t("whoAmIText2")}
                            </p>
                            <p className="text-lg text-brandTextLight mt-4 leading-relaxed">
                                {t("whoAmIText3")}
                            </p>
                            <p className="text-lg text-brandTextLight mt-4 leading-relaxed">
                                {t("whoAmIText4")}
                            </p>
                            <p className="text-lg text-brandTextLight mt-4 leading-relaxed">
                                {t("whoAmIText5")}
                            </p>
                            <p className="text-sm text-brandTextLight mt-4 leading-relaxed">
                                {t("whoAmIText6")}
                            </p>
                        </motion.div>

                        {/* Right side */}
                        <motion.div
														initial={rightSideAnim.initial}
														animate={rightSideAnim.animate}
														exit={rightSideAnim.exit}
														transition={defaultTransition}
														className="hidden md:block"
												>
														<Avatar width={1030} height={655} fileName={"avatar-sitting"} />
												</motion.div>
                    </div>
                </div>
            </main>

        </>
    );
};

export const getServerSideProps = async ({ locale }) => ({
	props: {
		...await serverSideTranslations(locale, ["common"]),
	},
});

export default Home;
