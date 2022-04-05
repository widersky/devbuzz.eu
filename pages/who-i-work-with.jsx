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

const WhoIWorkWith = () => {
    const { t } = useTranslation();

    return (
        <>
            <Head></Head>

            <main>
                <div className="py-24 flex items-center">
                    <div className="container mx-auto grid grid-cols-2 gap-10">
                        {/* Left Side */}
                        <motion.div
                            initial={leftSideAnim.initial}
                            animate={leftSideAnim.animate}
                            exit={leftSideAnim.exit}
                            transition={defaultTransition}
                        >
                            <div className="relative flex justify-center mt-24">
                                <Image
                                    className="relative z-10"
                                    src="/avatar-standing.webp"
                                    loading="lazy"
                                    width={234}
                                    height={735}
                                    alt=""
                                />
                            </div>
                        </motion.div>

                        {/* Right side */}
                        <motion.div
                            initial={rightSideAnim.initial}
                            animate={rightSideAnim.animate}
                            exit={rightSideAnim.exit}
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
                    </div>
                </div>
            </main>
        </>
    );
};

export default WhoIWorkWith;
