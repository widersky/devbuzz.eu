// Next
import Image from 'next/image';
import { useTranslation } from "react-i18next";

// Animations
import { motion } from "framer-motion";

// Components
import Button from "../Button";
import TechStack from '../globals/TechStack';
import Avatar from "../Avatar";

// Animations definitions
import {
    leftSideAnim,
    rightSideAnim,
    scrollPromptAnim,
    defaultTransition
} from "../../helpers/animations";

const HomeHero = () => {
    const { t } = useTranslation('common');

    return (
        <div className="flex items-center md:min-h-[84vh] py-16 md:py-0 relative">
            <div className="container mx-auto px-4 lg:px-0 grid md:grid-cols-2 gap-10 relative">
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
                            href="mailto:hello@devbuzz.eu"
                        />

                        <TechStack />

                        <div className="relative mt-24 text-xs w-72 text-brandTextLight leading-relaxed pl-10">
                            <div className="absolute top-4 left-0">
                                <Image
                                    src="/icon-cookies.webp"
                                    alt="Cookies icon"
                                    width={27}
                                    height={23}
                                />
                            </div>
                            <i className="block w-24 h-[1px] bg-brandTextLight mb-4 -translate-x-10"></i>
                            <p>
                                {t("cookies")} 😎
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Right side */}
                <motion.div
                    initial={rightSideAnim.initial}
                    animate={rightSideAnim.animate}
                    exit={rightSideAnim.exit}
                    transition={defaultTransition}
										className="hidden md:block"
                >
                    <Avatar width={947} height={750} fileName={"avatar"} priority />
                </motion.div>
            </div>

					{/* Scroll prompt */}
					<div className="hidden md:block absolute top-full left-1/2 -translate-x-1/2">
						<motion.div
							initial={scrollPromptAnim.initial}
							animate={scrollPromptAnim.animate}
							exit={scrollPromptAnim.exit}
						>
							<Image src="/scroll-down.webp" width={48} height={48} alt="Scroll down" priority />
						</motion.div>
					</div>
        </div>
    );
};

export default HomeHero;
