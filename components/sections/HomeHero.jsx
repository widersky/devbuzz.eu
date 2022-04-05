// Next
import Image from 'next/image';
import { useTranslation } from "react-i18next";

// Animations
import { motion } from "framer-motion";

// Components
import Button from "../Button";
import TechStack from '../globals/TechStack';

// Internationalization
import "../../helpers/i18n";

// Animations definitions
import {
    leftSideAnim,
    rightSideAnim,
    scrollPromptAnim,
    defaultTransition
} from "../../helpers/animations";

const HomeHero = () => {
    const { t } = useTranslation();

    return (
        <div className="pt-48 pb-24 flex items-center">
            <div className="container mx-auto grid grid-cols-2 gap-10 relative pb-28">
                {/* Left side */}
                <motion.div
                    initial={leftSideAnim.initial}
                    animate={leftSideAnim.animate}
                    exit={leftSideAnim.exit}
                    transition={defaultTransition}
                >
                    <div className="flex flex-col justify-center items-start">
                        <h1 className="text-5xl font-bold text-brandText">
                            {t("hello")}
                        </h1>
                        <p className="text-lg text-brandTextLight mt-10 mb-10 leading-relaxed">
                            {t("intro")}
                        </p>

                        <Button
                            text={t("cta")}
                            href="mailto:adrian@devbuzz.eu"
                        />

                        <TechStack />

                        <p className="relative mt-24 text-xs w-72 text-brandTextLight leading-relaxed pl-10">
                            <div className="absolute top-4 left-0">
                                <Image
                                    src="/icon-cookies.webp"
                                    alt="Cookies icon"
                                    width={27}
                                    height={23}
                                />
                            </div>
                            <i className="block w-24 h-[1px] bg-brandTextLight mb-4 -translate-x-10"></i>
                            {t("cookies")} 😎
                        </p>
                    </div>
                </motion.div>

                {/* Right side */}
                <motion.div
                    initial={rightSideAnim.initial}
                    animate={rightSideAnim.animate}
                    exit={rightSideAnim.exit}
                    transition={defaultTransition}
                >
                    <div className="relative flex justify-center mt-24">
                        <div className="absolute left-1/2 -translate-x-1/2 -translate-y-24 rotate-12 w-96 h-96 rounded-[96px] bg-white bg-opacity-90"></div>

                        <Image className="relative z-10" src="/avatar.webp" alt="Adrian Widerski - avatar" width={250} height={626} />
                    </div>
                </motion.div>

                {/* Scroll prompt */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
                    <motion.div
                        initial={scrollPromptAnim.initial}
                        animate={scrollPromptAnim.animate}
                        exit={scrollPromptAnim.exit}
                    >
                        <Image src="/scroll-down.webp" loading="lazy" width={48} height={48} alt="Scroll down" />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default HomeHero;
