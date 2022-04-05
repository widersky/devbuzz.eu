import Head from "next/head";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { motion } from "framer-motion";

import "../helpers/i18n";
import {
    leftSideAnim,
    rightSideAnim,
    defaultTransition,
} from "../helpers/animations";

import SiteHeader from "../components/globals/SiteHeader";
import Footer from "../components/globals/SiteFooter";

const Home = () => {
    const { t } = useTranslation();

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

            <main>
                <div className="py-24 flex items-center">
                    <div className="container mx-auto grid grid-cols-2 gap-10">
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
                        >
                            <div className="relative flex justify-center mt-24">
                                <Image
                                    className="relative z-10"
                                    src="/avatar-sitting.webp"
                                    loading="lazy"
                                    alt=""
                                    width={454}
                                    height={609}
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </main>

        </>
    );
};

export default Home;
