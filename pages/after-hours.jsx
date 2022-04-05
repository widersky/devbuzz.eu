import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { useTranslation } from "next-i18next";
import { motion } from "framer-motion";

import "../helpers/i18n";
import {
    leftSideAnim,
    rightSideAnim,
    defaultTransition,
} from "../helpers/animations";

import ProjectTile from "../components/ProjectTile";

const AfterHours = () => {
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
                    <div className="container mx-auto grid grid-cols-2 gap-10 min-h-[calc(100vh-476px)]">
                        {/* Left Side */}
                        <motion.div
                            initial={leftSideAnim.initial}
                            animate={leftSideAnim.animate}
                            exit={leftSideAnim.exit}
                            transition={defaultTransition}
                            className="flex flex-col justify-center items-start pr-16"
                        >
                            <h2 className="text-5xl font-bold text-brandText">
                                {t("afterHours")}
                            </h2>
                            <p className="text-lg text-brandTextLight mt-10 leading-relaxed">
                                {t("afterHoursText1")}
                            </p>
                            <p className="text-lg text-brandTextLight mt-4 leading-relaxed">
                                {t("afterHoursText2")}
                            </p>
                            <p className="text-lg text-brandTextLight mt-4 leading-relaxed">
                                {t("afterHoursText3")}
                            </p>

                            {/* PROJECTS */}
                            <div className="flex flex-col gap-2 mt-10">
                                <ProjectTile about={t("aboutFalcon")} iconSrc="/icon-falcon.webp" title="Falcon Starter" />
                                <ProjectTile about={t("aboutLogMate")} iconSrc="/icon-logmate.webp" title="LogMate" />
                            </div>

                            <Link
                                href="https://github.com/widersky"
                                target="_blank"
                                passHref
                            >
                                <a className="mt-6 text-brandText hover:text-brandRed hover:underline">
                                    {t("checkOutMyGH")}
                                </a>
                            </Link>
                        </motion.div>

                        {/* Right side */}
                        <motion.div
                            initial={rightSideAnim.initial}
                            animate={rightSideAnim.animate}
                            exit={rightSideAnim.exit}
                            transition={defaultTransition}
                            className="relative flex justify-center items-center mt-24"
                        >
                            <Image
                                className="relative z-10"
                                src="/avatar-gaming.webp"
                                width={620}
                                height={506}
                                alt=""
                            />
                        </motion.div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default AfterHours;
