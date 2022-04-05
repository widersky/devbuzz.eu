import { useTranslation } from "next-i18next";
import { motion } from "framer-motion";

import "../../helpers/i18n";

const HomeSection3 = () => {
    const { t } = useTranslation();

    return (
        <div className="py-32">
            <div className="container mx-auto grid grid-cols-2">
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
                        animate={{
                            y: [-35, 20, -35],
                        }}
                        transition={{
                            duration: 5,
                            times: [0, 0.5, 1],
                            ease: "easeInOut",
                            repeat: Infinity,
                        }}
                        src="/icon-3d-rocket.webp"
                        className="w-72 h-72"
                        loading="lazy"
                    />
                </div>
            </div>
        </div>
    );
};

export default HomeSection3;
