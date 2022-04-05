import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { motion } from "framer-motion";

import Button from "../Button";

import "../../helpers/i18n";
import { leftSideAnim, rightSideAnim, scrollPromptAnim, defaultTransition } from "../../helpers/animations";

const HomeSection2 = () => {
    const { t } = useTranslation();
    
    return (
        <div className="py-32">
                
                <div className="container mx-auto grid grid-cols-2">
                    
                    <div className="relative flex justify-center items-center">
                        
                        <motion.img
                            animate={{
                                y: [ 10, -25, 10 ],
                                rotate: [ "-12deg", "-12deg", "-12deg" ]
                            }}
                            transition={{
                                duration: 5,
                                times: [ 0, .5, 1 ],
                                ease: "easeInOut",
                                repeat: Infinity
                            }}
                            src="/icon-3d-mac.webp"
                            className="w-96 h-96"
                        />
                        
                    </div>
                    
                    <div className="flex flex-col justify-center items-start">
                        <h3 className="text-4xl font-bold text-brandText">{t('homeHeading2')}</h3>
                        <p className="text-lg text-brandTextLight mt-10 leading-relaxed">{t('homeText3')}</p>
                        <p className="text-lg text-brandTextLight mt-4 leading-relaxed">{t("homeText4")}</p>
                        
                        <Link
                            href="https://github.com/widersky/falcon-starter"
                            passHref
                        >
                            <div className="flex gap-6 w-full items-center bg-white bg-opacity-60 rounded-md shadow px-8 py-6 mt-10 transition-all hover:bg-opacity-90 cursor-pointer">
                                <Image src="/icon-falcon.webp" loading="lazy" alt="Falcon Framework Logo" width={40} height={40} />
                                <div>
                                    <h4 className="text-xl text-black opacity-80">Falcon Starter</h4>
                                    <span className="opacity-60 text-sm">{t('aboutFalcon')}</span>
                                </div>
                                <div className="ml-auto">
                                    <Image src="/icon-external-link.svg" alt="" width={24} height={24} />
                                </div>
                            </div>
                        </Link>
                    </div>
                    
                </div>
            
            </div>
    )
}

export default HomeSection2;
